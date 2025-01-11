"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateRoom() {
  const router = useRouter();
  const [inviteList, setInviteList] = useState([
    {
      id: "1",
      name: "dummy1",
      creator: "Kim",
    },
    {
      id: "2",
      name: "dummy2",
      creator: "Kim",
    },
  ]);

  function handleAcceptInvite(event) {
    //
  }
  function handleDenyInvite(event) {
    //
  }

  const InviteItem = ({ data }) => {
    return (
      <div className="m-2 rounded-lg p-2 border-2">
        <div className="flex">
          <div>
            <div className="font-bold">{data.name}</div>
            <div className="">created by {data.creator}</div>
          </div>
          <button className="ml-auto button" onClick={handleAcceptInvite}>
            Accept
          </button>
          <button className="ml-2 button_r" onClick={handleDenyInvite}>
            Deny
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="m-4">
      <header className="font-bold text-xl mb-4">
        <Link href={"/"}>StudyBoard</Link>
      </header>
      <div className="font-bold">Join StudyRoom</div>

      <section>
        <div>Invitations</div>
        {inviteList.length == 0 ? (
          <div className="text-slate-600">
            You have not been invited to a StudyRoom yet.
          </div>
        ) : (
          inviteList.map((data, key) => <InviteItem key={key} data={data} />)
        )}
      </section>
    </div>
  );
}
