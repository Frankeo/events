
const buttonRight = document.querySelector("button.right");
const buttonLeft = document.querySelector("button.left");

const isMobile = () => window.screen.width <= 768

const getFirstInvisibleIdx = (columns: HTMLCollectionOf<Element>) => {
  let firstInvisibleIdx = null;
  for (let idx = 0; idx < columns.length; idx++) {
    if (columns[idx].classList.contains("is-hidden")) {
      firstInvisibleIdx = idx;
    }
  }
  return firstInvisibleIdx;
};

export function carouselFn() {
    const offset = isMobile() ? 2 : 5;
    buttonLeft?.addEventListener("click", () => {
        const columns = document.getElementsByClassName("column is-one-quarter-desktop is-full-mobile");
        const idx = getFirstInvisibleIdx(columns);
        const nextIndexToReveal = idx !== null ? idx : 0;
        columns[nextIndexToReveal].classList.remove("is-hidden");
        if (!nextIndexToReveal) {
          buttonLeft.classList.add("is-hidden");
        } else {
          buttonLeft.classList.remove("is-hidden");
        }
        if (nextIndexToReveal + offset === columns.length) {
          buttonRight?.classList.remove("is-hidden");
        }
      });
      buttonRight?.addEventListener("click", () => {
        const columns = document.getElementsByClassName("column is-one-quarter-desktop is-full-mobile");
        const idx = getFirstInvisibleIdx(columns);
        const nextIndexToHide = idx !== null ? idx + 1 : 0;
        columns[nextIndexToHide].classList.add("is-hidden");
        if (!nextIndexToHide) {
          buttonLeft?.classList.remove("is-hidden");
        }
        if (nextIndexToHide + offset === columns.length) {
          buttonRight.classList.add("is-hidden");
        }
      });
}
