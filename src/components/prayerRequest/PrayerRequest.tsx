import { useState } from "react";

export default function PrayerRequest() {
  const [prayerInput, setprayerInput] = useState("");
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
        body: JSON.stringify({ prayer: prayerInput }),
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
      <main className="text-center">
        <h3>Request A Prayer</h3>
        <form onSubmit={onSubmit} className="flex flex-col items-center">
          <input
          className="w-96 p-2"
            type="text"
            name="prayer"
            placeholder="What would you like prayer with?"
            value={prayerInput}
            onChange={(e) => setprayerInput(e.target.value)}
          />
          {!isLoading ? <input className="bg-blue-500 px-4 py-2 rounded-md cursor-pointer" type="submit" value="Generate Prayer" /> : <input type="submit" value="Generate Prayer" className="bg-slate-300 px-4 py-2 rounded-md cursor-pointer" disabled/> }
          
        </form>
        <div className="result">
        {isLoading && <div>Loading...</div>}

        {!isLoading && result && <div>{result}</div>}
        </div>
      </main>
    </div>
  );
}
