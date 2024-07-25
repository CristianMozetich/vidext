import React from "react";
import { Button } from "../ui/button";
import GoogleIcon from "../../app/icons/GoogleIcon";
import FaceIcon from "../../app/icons/FaceIcon";

const Login = () => {
  return (
    <div className="flex flex-col gap-2">
      <Button
        
        className="w-80 h-9 gap-5 bg-slate-200 dark:bg-button  rounded-xl  flex items-center justify-center"
      >
        <GoogleIcon />
        <span>Ingresa con Google</span>
      </Button>
      <Button
      
        className="w-80 h-9 gap-1 bg-slate-200 dark:bg-button  rounded-xl  flex items-center justify-center"
      >
        <FaceIcon />
        <span>Ingresa con Facebook</span>
      </Button>
    </div>
  );
};

export default Login;
