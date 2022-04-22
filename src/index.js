import "./styles/styles.scss";
import newsService from "./js/news-service";
import updateArticlesMarkup from "./js/update-articles-markup";
import refs from "./js/refs";
import loadBtn from "./js/components/load-button";
import notify from './js/components/notification'

refs.searchForm.addEventListener("submit", handleSearchForm);

refs.loadMoreBtn.addEventListener("click", spinBtnLoad);

function handleSearchForm(event) {
  event.preventDefault();

  const form = event.currentTarget;
  
  newsService.query = form.elements.query.value;
  
  clearArticles();
  newsService.resetPage();
  spinBtnLoad();
  form.reset();
}

function spinBtnLoad() {
  loadBtn.enable();

  newsService.fetchArticles().then((articles) => {
    console.log(articles)
    updateArticlesMarkup(articles);

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