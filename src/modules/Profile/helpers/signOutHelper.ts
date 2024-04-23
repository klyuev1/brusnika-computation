import { useNavigate } from 'react-router-dom';
// Глобальные импорты
import { useAppDispatch } from '../../../store/hooks/hooks';
import { setIsLoggedIn } from '../../../store/reducers/authSlice';
import { useSignoutMutation } from '../../../store/api/apiProfileSlice';
// Модульные импорты
import { openInfoTooltipProfile } from '../store/infoTooltipProfileSlice';

export const useSignOut = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [handleSignout, {error: signoutError}] = useSignoutMutation();

  const onSignOut = async () => {
    try {
      await handleSignout()
      dispatch(setIsLoggedIn(false));
      navigate("/");
    } catch {
      console.log(signoutError)
      dispatch(openInfoTooltipProfile("Что-то пошло не так! Попробуйте ещё раз."));
    } finally {
      localStorage.clear();
    }
  }

  return { onSignOut };
}