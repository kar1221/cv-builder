import { useReducer } from "react";
import ResumeContent from "./components/ResumeContent";
import ResumeHeader from "./components/ResumeHeader";
import { DetailsReducer, initialState } from "./components/utils";

function App() {
  const [state, dispatch] = useReducer(DetailsReducer, initialState);

  return (
    <div className="flex min-h-screen justify-center bg-zinc-800">
      <form className="grid h-max w-full max-w-4xl grid-rows-form overflow-hidden bg-zinc-50 px-8 py-4">
        <ResumeHeader state={state} onChange={dispatch} />
        <ResumeContent state={state} onChange={dispatch} />
      </form>
    </div>
  );
}

export default App;
