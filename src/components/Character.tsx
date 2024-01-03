import loadOhMyLive2DConfig from "../config/live2d";

loadOhMyLive2DConfig();

export default function Character() {
  return (
    <div className="h-screen w-1/2">
      <img
        src="/bgCharacter.gif"
        alt="Working Room"
        className="w-full h-full overflow-hidden"
      />
    </div>
  );
}
