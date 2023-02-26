import ApiVerseSearch from "../api/ApiVerseSearch";
import { useState } from "react";

function VerseSearch() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const [searchCount, setSearchCount] = useState(0);
  
    const handleSearchSubmit = (e: { preventDefault: () => void }) => {
      e.preventDefault();
      setSearchValue(searchTerm);
      setSearchCount((prevCount) => prevCount + 1);
    };
  return (
    <div className="m-auto max-w-[700px]">
      <form onSubmit={handleSearchSubmit}>
        <div className="flex justify-center py-4">
          <input
            className="px-2 text-slate-800"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="ml-2 bg-slate-200 px-4 text-slate-800 hover:bg-slate-300"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
      {searchValue && <ApiVerseSearch key={searchCount} search={searchValue} />}
    </div>
  );
}

export default VerseSearch;
