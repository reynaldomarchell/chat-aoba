import { useState } from "react";
import ChatBody from "./ChatBody";
import ChatInput from "./ChatInput";
import ChatHeader from "./ChatHeader";

export default function Chat() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="z-10 flex-grow basis-9/12">
      <div className="flex h-full flex-col justify-between bg-gradient-to-br from-slate-950 to-slate-900">
        <ChatHeader />

        <ChatBody />

        <ChatInput />
      </div>
    </div>
  );
}
