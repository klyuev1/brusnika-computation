// Глобальные импорты
import { useAppDispatch } from '../../../store/hooks/hooks';
import { useUpdateUserMutation } from '../../../store/api/apiProfileSlice';
// Модульные импорты
import { openInfoTooltipProfile } from '../store/infoTooltipProfileSlice';

export const useUpdateProfile = () => {
  const dispatch = useAppDispatch();
  const [handleUpdateProfile, {error}] = useUpdateUserMutation();

  const onUpdateProfile = async (name: string, email: string) => {
    try {
      await handleUpdateProfile({ name, email }).unwrap()
      dispatch(openInfoTooltipProfile("Данные о профиле изменены"))
    } catch {
      console.log(error)
      dispatch(openInfoTooltipProfile("Что-то пошло не так! Попробуйте ещё раз."));
    }
  }

  return { onUpdateProfile };
}