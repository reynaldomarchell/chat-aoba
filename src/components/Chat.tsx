export default function Chat() {
  return (
    <div className="flex flex-col justify-between text-center h-screen w-2/5 bg-slate-800 bg-gradient-to-br from-slate-950 to-slate-800">
      <div className="h-20 flex items-center justify-between">
        <h1>History</h1>
        <h1>Nindi</h1>
        <h1>Settings</h1>
      </div>
      <div className="h-svh">
        <h1>Chat</h1>
      </div>
      <div className="h-32 flex items-center justify-between">
        <h1>Voice</h1>
        <h1>input</h1>
        <h1>Send</h1>
      </div>
    </div>
  );
}
