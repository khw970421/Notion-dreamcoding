const isImageOrVideo = (targetContent) =>
  targetContent === "Image" || targetContent === "Video";

const urlContent = ($modal, targetContent) => {
  return `
  <div id="modalContent">
  <button>x</button>
  <div class="modalText">Title</div>
  <input type="text"/>
  <div class="modalText">${isImageOrVideo(targetContent) ? "URL" : "Body"}</div>
  <input type="text"/>
  <div>
  <button>Click me</button>
  </div>
  </div>
  `;
};
const addModal = ($target, targetContent) => {
  const $modal = document.querySelector(".modal");
  $target.insertAdjacentHTML("afterbegin", urlContent($modal, targetContent));

  $target.children[0].onclick = () => {
    // 해당 컨텐츠 영역 삭제
    document.querySelector("#modalContent").remove();
    $modal.style.display = "none";
  };
  $modal.style.display = "block";
};

export default addModal;
