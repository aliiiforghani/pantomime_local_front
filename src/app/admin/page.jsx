"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

function AdminPage() {
  const [step, setStep] = useState(2);
  const router = useRouter();
//     useEffect(axios.get("http://localhost:2000", {
//       withCredentials:true
//   }), []);

  return (
    <div className="flex justify-center">
      <div className="w-full sm:max-w-sm">admin</div>
    </div>
  );
}
export default AdminPage;
