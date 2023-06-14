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
    <div>
      <div className="container mx-auto sm:max-w-lg aspect-auto mx-auto ">
        {renderSteps()}
      </div>
    </div>
  );
}
export default AuthPage;
