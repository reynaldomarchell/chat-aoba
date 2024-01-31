import Character from "./components/Character";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="flex h-screen w-screen justify-between text-white">
      <Character />
      <Chat />
    </div>
  );
}

export default App;
