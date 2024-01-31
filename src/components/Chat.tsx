export default function Chat() {
  return (
    <div className="flex h-screen w-2/5 flex-col justify-between bg-slate-800 bg-gradient-to-br from-slate-950 to-slate-800 text-center">
      <div className="flex h-20 items-center justify-between">
        <h1>History</h1>
        <h1>Nindi</h1>
        <h1>Settings</h1>
      </div>
      <div className="h-svh">
        <h1>Chat</h1>
      </div>
      <div className="flex h-32 items-center justify-between">
        <h1>Voice</h1>
        <h1>input</h1>
        <h1>Send</h1>
      </div>
    </div>
  );
}
