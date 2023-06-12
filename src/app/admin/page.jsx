"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

function AdminPage() {
  const [step, setStep] = useState(2);
  const router = useRouter();

  

  return (
    <div className="flex justify-center">
      <div className="w-full sm:max-w-sm">admin</div>
    </div>
  );
}
export default AdminPage;

