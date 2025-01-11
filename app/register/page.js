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
      <header className="font-bold text-xl mb-4">
        <Link href={"/"}>StudyBoard</Link>
      </header>

      <form onSubmit={handleSubmit} className="rounded-lg border-2 p-4 w-max">
        <div className="font-bold">Sign up to StudyBoard</div>
        <section className="mt-2 text-center">
          <div className="flex my-1 items-center">
            <label className="mr-2 ml-auto">ID</label>
            <input
              className="input ml-auto"
              onChange={(event) => handleInputChange("id", event)}
              value={input.id}
            />
          </div>
          <div className="flex my-1 items-center">
            <label className="mr-2 ml-auto">PW</label>
            <input
              type="password"
              className="input ml-auto"
              onChange={(event) => handleInputChange("pw", event)}
              value={input.pw}
            />
          </div>
          <div className="flex my-1 items-center">
            <label className="mr-2 ml-auto">PW check</label>
            <input
              type="password"
              className="input ml-auto"
              onChange={(event) => handleInputChange("checkpw", event)}
              value={input.checkpw}
            />
          </div>
          <button type="submit" className="button">
            Register
          </button>
        </section>
      </form>
    </div>
  );
}
