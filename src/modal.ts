const isValid = (value, targetContent) => {
  const checkImage = /(.png)$|(.jpg)$/;
  const checkVideo = /(.mp4)$|(.avi)$}|(.wmv$)/;
  if (checkImage.test(value) && targetContent === "Image") {
    return true;
  } else if (checkVideo.test(value) && targetContent === "Video") {
    return true;
  } else if (targetContent === "Note" || targetContent === "Task") return true;
  else return false;
};

const isImageOrVideo = (targetContent) =>
  targetContent === "Image" || targetContent === "Video";

const addMainContent = (title, text, targetContent) => `
<div class="content">
  ${targetContent === "Image" ? `<img src=${text}></img>` : ``}
  ${targetContent === "Video" ? `<video src=${text}></video>` : ``}
  <div class="contentWrap">
    <div class="contentTitle">${title}</div>
    ${targetContent === "Note" ? `<div>${text}</div>` : ``}
    ${targetContent === "Task" ? `<ul><li>${text}</li></ul>` : ``}
  </div>
  <button onclick={eraseContent(this)} class="eraseContentBtn">x</button>
</div>
`;

declare global {
  interface Window {
    eraseContent: Function;
  }
}

window.eraseContent = (e) => {
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
  <button class="modalBtn">Click me</button>
  </div>
  </div>
  `;
};
const addModal = ($target, targetContent) => {
  const $modal = document.querySelector(".modal") as HTMLInputElement;
  $target.insertAdjacentHTML("afterbegin", urlContent($modal, targetContent));
  const $btn = document.querySelector(".eraseModalBtn") as HTMLInputElement;
  const $addBtn = document.querySelector(".modalBtn") as HTMLInputElement;

  // 삭제버튼
  $btn.onclick = () => {
    // 해당 컨텐츠 영역 삭제
    document.querySelector("#modalContent").remove();
    $modal.style.display = "none";
  };

  // 추가버튼
  $addBtn.onclick = () => {
    const $titleInput = document.querySelector(
      ".titleInput"
    ) as HTMLInputElement;
    const $textInput = document.querySelector(".textInput") as HTMLInputElement;
    const $main = document.querySelector("main");

    if (isValid($textInput.value, targetContent)) {
      $main.insertAdjacentHTML(
        "afterbegin",
        addMainContent($titleInput.value, $textInput.value, targetContent)
      );

      document.querySelector("#modalContent").remove();
      $modal.style.display = "none";
    } else {
      alert("제대로 된 값을 입력해주세요 ");
    }
  };
  $modal.style.display = "block";
};

export default addModal;
