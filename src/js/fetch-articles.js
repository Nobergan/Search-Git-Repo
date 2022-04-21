// const apiKey = "07a7a2bfb39048e592d680b5ca5dc675";

// function fetchArticles(searchQuery, page = 1) {
//   const url = `https://newsapi.org/v2/everything?q=${searchQuery}&language=en&pageSize=20&page=${page}`;

//   const options = {
//     headers: {
//       Authorization: apiKey,
//     },
//   };

//   return fetch(url, options)
//     .then((res) => res.json())
//     .then(({ articles }) => articles)
//     .catch((error) => console.log(error));
// }

// export default fetchArticles;
