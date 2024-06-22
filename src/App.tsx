import Header from "./Components/Header";

const App = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-200">
      <Header />
      <form className="-mt-16 w-full max-w-form rounded-md bg-zinc-50 p-8 shadow-form flex flex-col">

        <h2 className="font-roboto text-xl font-semibold text-zinc-600">Personal Details</h2>
        <hr className="my-4 border border-zinc-200" />
        <div className="flex gap-8">
          <label className="flex flex-col flex-1 text-zinc-500 gap-1">
            First Name*
            <input type="text" placeholder="John" className="text-zinc-600 border-2 border-zinc-300 px-4 py-2 rounded-md focus:border-zinc-600 transition-all duration-150 ease-in-out outline-none" />
          </label>
          <label className="flex flex-col flex-1 text-zinc-500 gap-1">
            Last Name*
            <input type="text" placeholder="Smith" className="text-zinc-600 border-2 border-zinc-300 px-4 py-2 rounded-md focus:border-zinc-600 transition-all duration-150 ease-in-out outline-none" />
          </label>
        </div>
      </form>
    </div>
  );
};

export default App;
