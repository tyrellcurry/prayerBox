import { useState } from "react";

export default function PrayerRequest() {
  const [prayerInput, setprayerInput] = useState("");
  const [nameInput, setnameInput] = useState("");
  const [result, setResult] = useState();
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
    try {
      setIsLoading(true); // Set loading state to true before making API request

      const response = await fetch("/api/prayer/prayerApi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: nameInput, prayer: prayerInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      setResult(data.result);
      setprayerInput("");
    } catch (error: any) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    } finally {
      setIsLoading(false); // Set loading state back to false after API request is complete
    }
  }

  console.log(result);

  return (
    <div>
      <main className="text-center flex flex-col items-center px-4">
        <h3 className="text-2xl pb-4">Receive An Instant Prayer ✨</h3>
        <form onSubmit={onSubmit} className="flex flex-col items-center w-full max-w-[400px]">
          <label className="self-start pb-1" htmlFor="name">Your Name:</label>
          <input
          className="w-full p-2 mb-3 rounded-md dark:bg-slate-200 dark:text-slate-800 dark:placeholder-slate-800 "
            id="name"
            type="text"
            name="name"
            placeholder="What is your name?"
            value={nameInput}
            onChange={(e) => setnameInput(e.target.value)}
            autoComplete="off"
          />
          <label className="self-start pb-1" htmlFor="prayer">Your Request:</label>
          <textarea
          className="w-full p-2 mb-4 rounded-md min-h-[80px] max-h-[200px] dark:bg-slate-200 dark:text-slate-800 dark:placeholder-slate-800"
          id="prayer"
            name="prayer"
            placeholder="What would you like prayer with? Be as specific as you'd like."
            value={prayerInput}
            onChange={(e) => setprayerInput(e.target.value)}
          />
          {!isLoading ? <input className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer" type="submit" value="Receive Prayer" /> : <input type="submit" value="Loading..." className="bg-slate-300 text-white px-4 py-2 rounded-md cursor-pointer" disabled/> }
          
        </form>
        <div className="">
        {isLoading && <div className="result mt-4 p-5 max-w-[600px] font-semibold rounded-md bg-slate-50 dark:bg-slate-300 dark:text-slate-800">Your prayer has been received, please wait a moment...</div>}

        {!isLoading && result && <div className="result mt-4 p-5 max-w-[600px] font-semibold rounded-md bg-slate-50 dark:bg-slate-300 dark:text-slate-800">{result}</div>}
        </div>
      </main>
    </div>
  );
}
