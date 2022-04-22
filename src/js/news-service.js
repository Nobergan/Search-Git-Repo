export default {
  searchQuery: "",
  clientId: "5431d6d0b92755211afb",
  clientSecret: "f221686ece669a7ff5d954e71fccbf4eb3329ff1",
  repoCount: 8,
  page: 1,
  incrementPage() {
    return (this.page += 1);
  },
  resetPage() {
    return (this.page = 1);
  },
  fetchArticles() {
    const url = `https://api.github.com/search/repositories?q=${this.searchQuery}&client_id=${this.clientId}&client_secret=${this.clientSecret}&page=${this.page}&per_page=${this.repoCount}`;

    return fetch(url)
      .then((res) => res.json())
      .then(data => {
        this.incrementPage();

        return data.items;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    return (this.searchQuery = value);
  },
};
