// const distinguishContent = (title)=>{
//   const checkImage = /(.png)$|(.jpg)$/;
//   const checkVideo= /(.png)$|(.jpg)$/;
//   const checkImg = /(.png)$|(.jpg)$/;
//   if(title.includes('.png'))
// }
// image video note task
const isImageOrVideo = (targetContent) => targetContent === "Image" || targetContent === "Video";
const addMainContent = (title, text, targetContent) => `
<div class="content">
  ${targetContent === "Image" ? `<img src=${text}></img>` : ``}
  ${targetContent === "Video" ? `<video src=${text}></video>` : ``}
  <div class="contentWrap">
    <div class="contentTitle">${title}</div>
    ${targetContent === "Note" ? `<div>${text}</div>` : ``}
    ${targetContent === "Task" ? `<ul><li>${text}</li></ul>` : ``}
  </div>
  <button onclick={myFunction(this)} class="eraseContentBtn">x</button>
</div>
`;
window.myFunction = (e) => {
    e.parentNode.remove();
};
const urlContent = ($modal, targetContent) => {
    return `
  <div id="modalContent">
  <button class="eraseModalBtn">x</button>
  <div class="modalText">Title</div>
  <input type="text" class="titleInput"/>
  <div class="modalText">${isImageOrVideo(targetContent) ? "URL" : "Body"}</div>
  <input type="text" class="textInput"/>
  <div>
  <button class="modalBtn" >Click me</button>
  </div>
  </div>
  `;
};
const addModal = ($target, targetContent) => {
    const $modal = document.querySelector(".modal");
    $target.insertAdjacentHTML("afterbegin", urlContent($modal, targetContent));
    const $btn = document.querySelector(".eraseModalBtn");
    const $addBtn = document.querySelector(".modalBtn");
    // 삭제버튼
    $btn.onclick = () => {
        // 해당 컨텐츠 영역 삭제
        document.querySelector("#modalContent").remove();
        $modal.style.display = "none";
    };
    // 추가버튼
    $addBtn.onclick = () => {
        const $titleInput = document.querySelector(".titleInput");
        const $textInput = document.querySelector(".textInput");
        const $main = document.querySelector("main");
        $main.insertAdjacentHTML("afterbegin", addMainContent($titleInput.value, $textInput.value, targetContent));
        document.querySelector("#modalContent").remove();
        $modal.style.display = "none";
    };
    $modal.style.display = "block";
};
export default addModal;
