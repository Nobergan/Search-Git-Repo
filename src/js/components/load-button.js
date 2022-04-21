import refs from "../refs";

const loadBtn = {
  enable() {
    refs.loadMoreBtn.disabled = true;
    refs.loadMoreBtn.classList.add("active");
    refs.loadMoreBtnLable.textContent = "Loading...";
    refs.loadMoreBtnSpinner.classList.remove("is-hidden");
  },
  disable() {
    refs.loadMoreBtn.disabled = false;
    refs.loadMoreBtnLable.textContent = "Show more";
    refs.loadMoreBtnSpinner.classList.add("is-hidden");
  },
  showBtn() {
    refs.loadMoreBtn.classList.remove("is-hidden");
    refs.loadMoreBtn.classList.remove("active");
    refs.loadMoreBtn.style.display = 'block';
  },
  hide() {
    refs.loadMoreBtn.style.display = 'none';
  }
};
export default loadBtn;
