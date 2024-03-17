import { SendHorizontal } from "lucide-react";

export default function ChatInput() {
  return (
    <div className="flex h-16 items-center justify-between gap-3 px-2 py-7">
      <input
        placeholder="Type a message..."
        type="text"
        className="box-border grow rounded-xl bg-slate-800 px-2 py-1 outline-none transition-colors duration-300 ease-linear placeholder:font-light hover:bg-slate-700"
      />
      <button className="rounded-full bg-slate-800 p-2 outline-none transition-colors duration-300 ease-linear hover:bg-slate-700">
        <SendHorizontal color="#f1f5f9" size={18} />
      </button>
    </div>
  );
}
