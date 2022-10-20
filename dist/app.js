import addModal from "./modal.js";
const $app = document.querySelector("#app");
const $modalBody = document.querySelector(".modal_body");
const $ul = document.querySelector("ul");
$ul.addEventListener("click", (e) => {
    if ($ul.children.length !== 0) {
        addModal($modalBody, e.target.textContent);
    }
});
