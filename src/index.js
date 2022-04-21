import "./styles/styles.scss";

// import "./styles/materialize.css";

// import "./js/materialize";

import newsService from "./js/news-service";
import updateArticlesMarkup from "./js/update-articles-markup";
import refs from "./js/refs";
import loadBtn from "./js/components/load-button";

import notify from './js/components/notification'

refs.searchForm.addEventListener("submit", handleSearchForm);

refs.loadMoreBtn.addEventListener("click", spinBtnLoad);

function handleSearchForm(event) {
  event.preventDefault();
  // console.log(event.currentTarget.elements.query);

  const form = event.currentTarget;
  // console.log(form);
  newsService.query = form.elements.query.value;

  // console.log(searchQuery);

  clearArticles();
  newsService.resetPage();
  spinBtnLoad();
  form.reset();
}

function spinBtnLoad() {
  // refs.loadMoreBtn.classList.add("is-hidden");
  // refs.spinner.classList.remove("is-hidden");

  loadBtn.enable();

  newsService.fetchArticles().then((articles) => {
    console.log(articles)
    updateArticlesMarkup(articles);
    // refs.loadMoreBtn.classList.remove("is-hidden");

    // console.log(document.documentElement.offsetHeight);

    // window.scrollTo({
    //   top: document.documentElement.offsetHeight,
    //   behavior: "smooth",
    // });

    loadBtn.showBtn();
    loadBtn.disable();

    catchError(articles);
    
  });
}

function clearArticles() {
  refs.articles.innerHTML = "";
}

function catchError(articles) {
  
  if (articles === undefined) {
    loadBtn.hide();
    notify.showNotice();
  } else if (articles.length === 0) {
    loadBtn.hide();
    notify.showError();
   }

}