import { useNavigate } from "react-router-dom";
import { useSigninMutation, useSignupMutation } from "../../../store/api/apiProfileSlice";
import { openInfoTooltipRegist } from "../store/infoTooltipRegisterSlice";
import { setIsLoggedIn } from "../../../store/reducers/authSlice";
import { useAppDispatch } from "../../../store/hooks/hooks";

export const useRegister = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [handleRegister, { error: regError }] = useSignupMutation();
  const [handleLogin, { error: loginError }] = useSigninMutation();

  const onRegister = async (name: string, email: string, password: string) => {
    try {
      await handleRegister({ name, email, password }).unwrap();

      try {
        await handleLogin({ email, password }).unwrap();
        dispatch(openInfoTooltipRegist("Вы успешно зарегистрировались!"));
        navigate("/teplo", { replace: true });
        dispatch(setIsLoggedIn(true));
      } catch {
        console.log(loginError);
        dispatch(openInfoTooltipRegist("Что-то пошло не так! Попробуйте ещё раз."));
      }
    } catch {
      if (regError && "status" in regError && regError.status === 409) {
        dispatch(openInfoTooltipRegist("Пользователь с таким Email уже зарегистрирован"));
      } else {
        console.log(regError);
        dispatch(openInfoTooltipRegist("Что-то не так с введенными данными"));
      }
    }
  };

  return { onRegister };
};
