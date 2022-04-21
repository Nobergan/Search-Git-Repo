import handlebarTPL from "../templates/articles.hbs";
import refs from "./refs";

function updateArticlesMarkup(articles) {
  //   console.log(articles);

  const markUp = handlebarTPL(articles);
  refs.articles.insertAdjacentHTML("beforeend", markUp);
}

export default updateArticlesMarkup;
