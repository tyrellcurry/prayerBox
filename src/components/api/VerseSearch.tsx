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
  return (
    <>
      {/* You can render any JSX you need here */}
      {data ? (
        verses.map((verse: any) => {
          console.log(verse);
          return (
            <>
              <h2>Ref: {verse.reference}</h2>
              <p>{verse.text}</p>
            </>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default ApiComponent;
