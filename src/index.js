// import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

const container = document.querySelector(".container");
const status = document.querySelectorAll(".status");
const notes = document.querySelectorAll(".note");

let currentDragEl = null;
let cEl = null;

notes.forEach((n) => {
  n.addEventListener("dragstart", dragstart);
  n.addEventListener("dragend", dragend);

  // n.addEventListener("dragover", dragover);
  // n.addEventListener("dragenter", dragenter);
  // n.addEventListener("dragleave", dragleave);
  // n.addEventListener("drop", changeOrder);
});

function changeOrder() {
  // console.log(currentDragEl);
  // console.log(cEl);
  // console.log(this.parentElement);
  // this.parentElement.insertBefore(currentDragEl, cEl);
  this.classList.remove("over");
}

// function overEl(e) {
//   e.preventDefault();
//   cEl = e.target;

//   // currentDragEl = e.target.ele;
// }

function dragstart() {
  // console.log("dragstart");
  currentDragEl = this;
}

function dragend() {
  currentDragEl = null;
  // console.log("dragend");
}

status.forEach((s) => {
  s.addEventListener("dragover", dragover);
  s.addEventListener("dragenter", dragenter);
  s.addEventListener("dragleave", dragleave);
  s.addEventListener("drop", drop);
});

function dragover(e) {
  // status.style.backgroundcolor = "black";
  e.preventDefault();
  cEl = e.target;
  // e.stopPropagation();
  // if (e.target.classList.contains("note")) return;
  console.log("dragover");
  // this.classList.add = "over";
}

function dragenter() {
  this.classList.add("over");
}

function dragleave() {
  this.classList.remove("over");
}

function drop(e) {
  // if (e.target.)
  // console.log(e.target);
  // if (e.target.classList.contains("note")) return;
  // this.appendChild(currentDragEl);

  // if (this.previousElementSiblin)
  console.log(cEl);
  console.log(currentDragEl);

  // if (!cEl.previousElementSibling) {
  // this.appendChild(currentDragEl);
  // } else {
  if (cEl.classList.contains("status")) {
    this.appendChild(currentDragEl);
  } else {
    this.insertBefore(currentDragEl, cEl);
  }
  // }
  this.classList.remove("over");
}

//modal
const addbtn = document.querySelector(".addbtn");
const modalcontainer = document.querySelector(".modalcontainer");
const btn = document.querySelector(".btn");
const nostatus = document.querySelector(".nostatus");

addbtn.addEventListener("click", () => {
  modalcontainer.classList.toggle("hide");
});

modalcontainer.addEventListener("click", (e) => {
  // e.stopPropagation();
  if (!e.target.classList.contains("modalcontainer")) return;
  modalcontainer.classList.toggle("hide");
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const val = document.querySelector("#note").value;

  const newnote = document.createElement("div");
  newnote.setAttribute("draggable", "true");
  newnote.classList.add("note");
  const span = document.createElement("span");
  span.classList.add("close");

  // console.log(val);
  const text = document.createTextNode(val);
  const close = document.createTextNode("\u00D7");
  newnote.appendChild(text);
  span.appendChild(close);

  newnote.appendChild(span);
  nostatus.appendChild(newnote);

  newnote.addEventListener("dragstart", dragstart);
  newnote.addEventListener("dragend", dragend);

  modalcontainer.classList.toggle("hide");
  document.querySelector("#note").value = "";
  // <div class="note" draggable="true">
  //         note sample 1 sample sample sample sample
  //         <span class="close"> &times; </span>
  //       </div>
});
