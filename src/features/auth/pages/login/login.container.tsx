import React from "react";
import { useLoginController } from "./login.controller";

function LoginPageComponent() {
  const { login } = useLoginController();

  return (
    <div>
      <button onClick={login}>LOGIN</button>
    </div>
  );
}

export const LoginPageContainer = React.memo(LoginPageComponent);
