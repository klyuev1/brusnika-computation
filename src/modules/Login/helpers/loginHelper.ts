import { useNavigate } from "react-router-dom";
import { useSigninMutation } from "../../../store/api/apiProfileSlice";
import { useAppDispatch } from "../../../store/hooks/hooks";
import { openInfoTooltipLogin } from "../store/infoTooltipLoginSlice";
import { setIsLoggedIn } from "../../../store/reducers/authSlice";

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [handleLogin, { error }] = useSigninMutation();

  const onLogin = async (email: string, password: string) => {
    try {
      await handleLogin({ email, password }).unwrap();
      dispatch(openInfoTooltipLogin("Вы успешно авторизировались!"));
      navigate("/teplo", { replace: true });
      dispatch(setIsLoggedIn(true));
    } catch {
      console.log(error);
      dispatch(openInfoTooltipLogin("Что-то пошло не так! Попробуйте ещё раз."));
    }
  };

  return { onLogin };
};
