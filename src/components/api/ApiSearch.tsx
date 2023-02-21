const ApiSearch = (search: string) => {
  var myHeaders = new Headers();
  myHeaders.append("api-key", "f016cf0177b4aaa543d94e80df34cf26");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(
    `https://api.scripture.api.bible/v1/bibles/06125adad2d5898a-01/search?query=${search}&limit=20`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      let offset = Math.floor(Math.random() * (result.data.total + 1));
      if (offset === result.data.total) {
        offset -= 1;
      }
      return fetch(
        `https://api.scripture.api.bible/v1/bibles/06125adad2d5898a-01/search?query=${search}&limit=20&offset=${offset}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          return result;
        })
        .catch((error) => console.log("error", error));
    })
    .catch((error) => console.log("error", error));
};

export default ApiSearch;
