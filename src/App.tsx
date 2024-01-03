import Character from "./components/Character";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="flex w-screen h-screen justify-between">
      <Character />
      <Chat />
    </div>
  );
}

export default App;
