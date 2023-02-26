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
  const verses = data?.results;

  //   console.log(passages.length > 0);
  console.log(verses);
  if (verses === undefined) {
    return <p className="text-center">Loading...</p>;
  } else if (verses.length === 0) {
    return (
      <p className="text-center">
        No verses found, please try modifying your search.
      </p>
    );
  } else {
    return (
      <div>
        <p className="pb-2">Page: {data.page} of {data.total_pages}</p>
        <div className="grid grid-cols-2 gap-4">
          {verses.map((verse: any) => {
            return (
              <div
                key={verse.reference}
                className="mb-4 rounded-lg bg-slate-300 p-4 text-slate-800 drop-shadow-lg"
              >
                <h2 className="font-semibold">{verse.reference}</h2>
                <p>{verse.content}</p>
              </div>
            );
          })}
        </div>
        <p className="text-xs text-slate-600 pt-1 pb-4">
          Scripture quotations are from the ESV® Bible (The Holy Bible, English
          Standard Version®), copyright © 2001 by Crossway, a publishing
          ministry of Good News Publishers. Used by permission. All rights
          reserved. The ESV text may not be quoted in any publication made
          available to the public by a Creative Commons license. The ESV may not
          be translated into any other language. Users may not copy or download
          more than 500 verses of the ESV Bible or more than one half of any
          book of the ESV Bible. Scripture quotations marked “ESV” are from the
          ESV® Bible (The Holy Bible, English Standard Version®), copyright ©
          2001 by Crossway, a publishing ministry of Good News Publishers. Used
          by permission. All rights reserved. The ESV text may not be quoted in
          any publication made available to the public by a Creative Commons
          license. The ESV may not be translated into any other language. Users
          may not copy or download more than 500 verses of the ESV Bible or more
          than one half of any book of the ESV Bible. Unless otherwise
          indicated, all Scripture quotations are from the ESV® Bible (The Holy
          Bible, English Standard Version®), copyright © 2001 by Crossway, a
          publishing ministry of Good News Publishers. Used by permission. All
          rights reserved. The ESV text may not be quoted in any publication
          made available to the public by a Creative Commons license. The ESV
          may not be translated into any other language. Users may not copy or
          download more than 500 verses of the ESV Bible or more than one half
          of any book of the ESV Bible.
        </p>
      </div>
    );
  }
};

export default ApiComponent;
