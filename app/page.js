import Link from "next/link";

export default function Page() {
  return (
    <div className="m-4">
      <header className="font-bold text-xl mb-4">StudyBoard</header>
      <div className="">Hello StudyBoard!</div>

      <div className="flex flex-col">
        <Link href={"/login"} className="text-cyan-700">
          Sign in
        </Link>
        <Link href={"/register"} className="text-cyan-700">
          Sign up
        </Link>
      </div>
    </div>
  );
}
