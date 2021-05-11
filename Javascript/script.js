// add close buttons for list elements

function addCloseButton() {
  let listElements = document.querySelectorAll(".list-elem");

  for (let i = 0; i < listElements.length; i++) {
    let span = document.createElement("SPAN");
    let CloseButton = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(CloseButton);
    listElements[i].appendChild(span);
  }
}

addCloseButton();

// hide current list element when clicking the close button

function execClose() {
  let close = document.querySelectorAll(".close");
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let listParent = this.parentElement;
      listParent.style.display = "none";
    };
  }
}

execClose();

// add the checked symbol

function addCheckButton() {
  let list = document.querySelector(".to-do-list");
  list.addEventListener(
    "click",
    function (ev) {
      if (ev.target.className === "list-elem") {
        ev.target.classList.toggle("checked");
      }
    },
    false
  );
}

addCheckButton();
