"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateRoom() {
  const router = useRouter();
  const [input, setInput] = useState({
    name: "",
    desc: "",
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
    if (input.name.length >= 1) {
      console.log("valid input");
      console.log(input);
      router.push("/");
    } else {
      alert("invalid input. StudyRoom name must not be empty");
    }

    return;
  }

  return (
    <div className="m-4">
      <header className="font-bold text-xl mb-4">
        <Link href={"/"}>StudyBoard</Link>
      </header>

      <form onSubmit={handleSubmit} className="">
        <div className="font-bold">Create StudyRoom</div>
        <section className="my-2">
          <div className="flex my-1 items-center">
            <label className="mx-2">StudyRoom Name</label>
            <input
              className="input"
              onChange={(event) => handleInputChange("name", event)}
              value={input.name}
            />
          </div>
          <div className="flex my-1 items-center">
            <label className="mx-2">Description (optional)</label>
            <input
              className="input w-1/2"
              onChange={(event) => handleInputChange("desc", event)}
              value={input.desc}
            />
          </div>
          <button type="submit" className="button">
            Create
          </button>
        </section>
      </form>
    </div>
  );
}
