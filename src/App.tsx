import { useState } from "react";
import ResumeHeader from "./components/ResumeHeader";

function App() {
  const [fullName, setFullName] = useState<string>("John Doe");
  const [position, setPosition] = useState("Frontend Developer");

  return (
    <div className="flex min-h-screen justify-center bg-zinc-800">
      <form className="grid w-full max-w-4xl grid-rows-form bg-zinc-50 p-4">
        <ResumeHeader
          fullname={fullName}
          position={position}
          onNameChange={setFullName}
          onPositionChange={setPosition}
        />
      </form>
    </div>
  );
}

export default App;
