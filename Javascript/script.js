// add close buttons for list elements

function addCloseButton() {
  let listElements = document.querySelectorAll(".list-elem");

  for (let i = 0; i < listElements.length; i++) {
    let span = document.createElement("SPAN");
    let CloseButton = document.createTextNode("x");
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
      if (ev.target.className.search("list-elem") >= 0) {
        ev.target.classList.toggle("checked");
      }
    },
    false
  );
}

addCheckButton();

// add a task

function addTask() {
  let newTask = document.createElement("LI");
  let inputTaskValue = document.querySelector(".task-input").value;
  let inputText = document.createTextNode(inputTaskValue);
  if (inputTaskValue === "") {
    document.querySelector(".task-input").style.backgroundColor = "#FA8072";
    document.querySelector(".task-input").classList.add("wizz-this");
    setTimeout(() => {
      document.querySelector(".task-input").classList.remove("wizz-this");
    }, 500);

    return;
  }
  newTask.appendChild(inputText);
  document.querySelector(".to-do-list").appendChild(newTask);
  newTask.classList.add("list-elem");
  addCloseButton();
  execClose();
  document.querySelector(".task-input").value = "";
}

// making input background color white

function makeWhite() {
  document.querySelector(".task-input").style.backgroundColor = "#FFFFFF";
}
