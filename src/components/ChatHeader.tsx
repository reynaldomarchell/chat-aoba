import { CircleFadingPlus } from "lucide-react";

export default function ChatHeader() {
  return (
    <div className="flex h-14 justify-center py-3 text-sm">
      <button className="flex items-center justify-between gap-2 rounded-full bg-slate-800 px-3 py-4 outline-none transition-colors duration-300 ease-linear hover:bg-slate-700">
        <p>Start new chat</p>
        <CircleFadingPlus color="#f1f5f9" />
      </button>
    </div>
  );
}
