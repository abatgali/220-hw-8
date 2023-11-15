let items = document.querySelectorAll("#codeList li");

let totalItems = items.length;

let element = null;
let image = document.createElement("img");
image.setAttribute(
  "src",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/trashcanIcon.png"
);
image.setAttribute("class", "listIcon");

// console.log(image);

for (let i = 0; i < totalItems; i++) {
  let imageClone = image.cloneNode(true);
  items[i].appendChild(imageClone);
}

let codeBoxlist = document.getElementById("codeList");

codeBoxlist.addEventListener("click", function changeProp(e) {
  // e.preventDefault();
  //   console.log("Element clicked!", e.target);
  e.stopPropagation(false);
  function getTarget(e) {
    return e.target;
  }
  const targetElement = getTarget(e);
  const tParent = targetElement.parentNode;

  //   console.log(tParent);
  if (tParent.tagName == "LI") {
    tParent.parentNode.removeChild(tParent);
  } else if (tParent.tagName == "UL") {
    // console.log(tParent)
    if (targetElement.className == "selected") {
      targetElement.classList.remove("selected");
      //   console.log(targetElement.className)
    } else targetElement.setAttribute("class", "selected");
    // console.log(targetElement)
  }
});
