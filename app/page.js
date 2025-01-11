import Link from "next/link";

export default function Page() {
  return (
    <div className="m-4">
      <header className="font-bold text-xl mb-4">StudyBoard</header>
      <div className="">Hello StudyBoard!</div>

      <div className="flex flex-col my-4">
        <Link href={"/login"} className="text-cyan-700">
          Sign in
        </Link>
        <Link href={"/register"} className="text-cyan-700">
          Sign up
        </Link>
      </div>

      <div className="flex flex-col w-max my-4">
        <Link href={"/create-room"} className="button my-1">
          Create StudyRoom
        </Link>
        <Link href={"/join-room"} className="button my-1">
          Join StudyRoom
        </Link>
      </div>
    </div>
  );
}
