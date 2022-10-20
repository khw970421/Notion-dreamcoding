import addModal from "./modal.js";
const $modalBody = document.querySelector(".modal_body");
const $ul = document.querySelector("ul");
$ul.addEventListener("click", (e) => {
    if ($ul.children.length !== 0) {
        const target = e.target;
        addModal($modalBody, target.textContent);
    }
});
