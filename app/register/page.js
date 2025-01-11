"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [input, setInput] = useState({
    id: "",
    pw: "",
    checkpw: "",
  });

  function handleInputChange(field, event) {
    setInput((prevState) => ({
      ...prevState,
      [field]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    //console.log(regInput);

    // verify loginInput data
    if (
      input.id.length >= 4 &&
      input.id.length <= 30 &&
      input.pw.length >= 8 &&
      input.pw.length <= 30 &&
      input.pw === input.checkpw
    ) {
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
        <div className="font-bold">Sign up to StudyBoard</div>
        <div>
          <label>ID</label>
          <input
            placeholder="4 to 30 characters"
            className="border-2 ml-2"
            onChange={(event) => handleInputChange("id", event)}
            value={input.id}
          />
        </div>
        <div>
          <label>PW</label>
          <input
            type="password"
            placeholder="8 to 30 characters"
            className="border-2 ml-2"
            onChange={(event) => handleInputChange("pw", event)}
            value={input.pw}
          />
        </div>
        <div>
          <label>Check PW</label>
          <input
            type="password"
            placeholder="Enter password again"
            className="border-2 ml-2"
            onChange={(event) => handleInputChange("checkpw", event)}
            value={input.checkpw}
          />
        </div>
        <button type="submit" className="button">
          Register
        </button>
      </form>
    </div>
  );
}
