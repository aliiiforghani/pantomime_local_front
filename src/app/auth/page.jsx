"use client";
import { useState } from "react";
import RegisterForm from "./registerForm";

import LoginForm from "./LoginForm";
import { useRouter } from "next/navigation";

function AuthPage() {
  const [step, setStep] = useState(2);
  const router = useRouter();

  const renderSteps = () => {
    switch (step) {
      case 1:
        return <RegisterForm setStep={setStep} />;
      case 2:
        return <LoginForm setStep={setStep} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-full sm:max-w-sm">{renderSteps()}</div>
    </div>
  );
}
export default AuthPage;

//? TASK #1 : auth user using OTP :

//1. form -> getOTP -> input + button => phoneNumber => send OTP
// input => TextField
// 2. form -> checkOTP ->
// request => ?
//* 1. axios (useState + useEffect),
//* 2. useFetch (data, loading, error),
//* 3. react-query ->  redux alternative (state management) + fetch , mutate !
