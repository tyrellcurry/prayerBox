const ApiSearch = (search: string) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", process.env.NEXT_PUBLIC_API_KEY);
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
      return fetch(
        `https://api.esv.org/v3/passage/search/?q=${search}&page-size=12&page=1`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result)
          return result;
        })
        .catch((error) => console.log("error", error));
};

export default ApiSearch;
