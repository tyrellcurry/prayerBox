import { useState, useEffect } from "react";
import ApiSearch from "./ApiSearch";

interface ApiComponentProps {
  search: string;
}

const ApiComponent = ({ search }: ApiComponentProps) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const getData = async () => {
      const result = await ApiSearch(search);
      setData(result);
    };

    getData();
  }, [search]);

  const verses = data?.data?.verses;

  if (verses === undefined) {
    return <p className="text-center">Loading...</p>;
  } else if (verses.length === 0) {
    return <p className="text-center">No verses found, please try modifying your search.</p>;
  } else {
    return (
      <div className="grid grid-cols-2 gap-4">
        {verses.map((verse: any) => {
          console.log(verse);
          return (
            <div
              key={verse.id}
              className="mb-4 rounded-lg bg-slate-300 p-4 text-slate-800 drop-shadow-lg"
            >
              <h2 className="font-semibold">{verse.reference}</h2>
              <p>{verse.text}</p>
            </div>
          );
        })}
      </div>
    );
  }
};

export default ApiComponent;
