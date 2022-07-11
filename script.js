let events = document.getElementById("events");
let children = events.children;
for (child of children) {
  child.addEventListener("mouseover", (e) => {

    let chosen = document.getElementById("chosen");
    chosen.innerText = e.srcElement.innerText;
    chosen.style.backgroundColor = e.srcElement.style.backgroundColor;
  });
  child.addEventListener("mouseout", (e) => {
    let chosen = document.getElementById("chosen");
    chosen.innerText = e.srcElement.innerText;
    chosen.innerText = "HACKIIS";
    chosen.style.backgroundColor = "white";
  });
}

for (child of document.getElementById("thirdnavbtn").children) {
  child.addEventListener("click", toggleHide);
}
function toggleHide(e) {
  let textbox = document.getElementById("textbox");
  let children = textbox.children;
  for (child of children) {
    if (child.style.display == "block") {
      child.style.display = "none";
    }
  }
  let thirdnavbtns = document.getElementById("thirdnavbtn").children;
  for (let index = 0; index < thirdnavbtns.length; index++) {
    const element = thirdnavbtns[index];
    if (e.srcElement === element) {
      children[index].style.display = "block";
    }
  }
}
