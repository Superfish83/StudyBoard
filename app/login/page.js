"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [input, setInput] = useState({
    id: "",
    pw: "",
  });

  function handleInputChange(field, event) {
    setInput((prevState) => ({
      ...prevState,
      [field]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // verify loginInput data
    if (input.id.length >= 4 && input.pw.length >= 8) {
      console.log("valid input");
      console.log(input);
      router.push("/");
    } else {
      alert("invalid input");
    }

    return;
  }

  return (
    <div className="m-4">
      <header className="font-bold text-xl mb-4">StudyBoard</header>

      <form onSubmit={handleSubmit} className="rounded-lg border-2 p-4">
        <div className="font-bold">Sign in</div>
        <div>
          <label>ID</label>
          <input
            className="border-2 ml-2"
            onChange={(event) => handleInputChange("id", event)}
            value={input.id}
          />
        </div>
        <div>
          <label>PW</label>
          <input
            type="password"
            className="border-2 ml-2"
            onChange={(event) => handleInputChange("pw", event)}
            value={input.pw}
          />
        </div>
        <button type="submit" className="button">
          Sign in
        </button>
        <div>
          <label>{"Don't have account?"}</label>
          <Link href={"/register"} className="text-cyan-700 ml-2">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}
