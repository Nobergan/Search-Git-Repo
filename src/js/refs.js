const refs = {
  articles: document.querySelector(".js-articles"),
  searchForm: document.querySelector(".js-search-form"),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
  loadMoreBtnLable: document.querySelector(
    'button[data-action="load-more"] > .label'
  ),
  loadMoreBtnSpinner: document.querySelector(
    'button[data-action="load-more"] > .spinner'
  ),
};

export default refs;
