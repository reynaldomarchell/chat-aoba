export default function Chat() {
  return (
    <div className="flex-grow basis-11/12">
      <div className="flex h-full flex-col justify-between bg-gradient-to-br from-slate-950 to-slate-800">
        <div className="flex h-20 items-center justify-between px-5 py-3">
          <h1>History</h1>
          <h1>Nindi</h1>
          <h1>Settings</h1>
        </div>
        <div className="h-full">
          <h1>Chat</h1>
        </div>
        <div className="flex h-32 items-center justify-between px-5 py-3">
          <h1>Voice</h1>
          <h1>input</h1>
          <h1>Send</h1>
        </div>
      </div>
    </div>
  );
}
