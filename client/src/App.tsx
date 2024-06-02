import Character from "./components/Character";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="flex h-dvh w-full flex-col  text-slate-50 md:flex-row">
      <Character />
      <Chat />
    </div>
  );
}

export default App;
