function scroll(e) {
  e.scrollIntoView({ behavior: "smooth", block: "start" });
}

function scrollToTop() {
  const element = document.body;
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}

window.addEventListener("load", function () {
  //use slice for ie11
  Array.prototype.slice
    .call(document.querySelectorAll(".menu-item"))
    .forEach((item) => {
      const target = item.getAttribute("data-id");

      item.addEventListener("click", (e) => {
        e.preventDefault();
        scroll(document.getElementById(target));

        let removeClass = document.querySelectorAll(".menu-item");
        for (remove of removeClass) {
          remove.classList.remove("active");
          if (target == remove.getAttribute("data-id")) {
            remove.classList.add("active");
          }
        }
      });
    });
});


//прокрутка вверх
// window.addEventListener("load", function () {
//   // use slice for supporting IE 11
//   Array.prototype.slice
//     .call(document.querySelectorAll(".menu-item"))
//     .forEach((item) => {
//       const target = item.getAttribute("data-id");

//       item.addEventListener("click", (e) => {
//         e.preventDefault();
//         scroll(document.getElementById(target));
//       });
//     });

//   document.getElementById("back").addEventListener("click", (e) => {
//     e.preventDefault();
//     scrollToTop();
//   });
// });

// ловит секцию в поле видимости и задает активные классы кнопкам
document.addEventListener("DOMContentLoaded", function () {
  const lazyAnimate = (divs) =>
    divs.forEach((el) =>
      el.target.toggleAttribute("visible", el.intersectionRatio > 0.4)
    );
  let observer = new IntersectionObserver(lazyAnimate, {
    rootMargin: "10px",
    threshold: [0.3, 1.0],
  });
  let container = document.querySelectorAll("section");
  container.forEach((div) => observer.observe(div));
});

let sections = document.querySelectorAll("section");
let navElements = document.querySelectorAll(".menu-item");
window.addEventListener("scroll", function () {
  for (section of sections) {
    let attributeList = section.getAttributeNames();
    for (attribute of attributeList) {
      if (attribute == "visible") {
        for (navElement of navElements) {
          navElement.classList.remove("active");
          if (
            section.getAttribute("id") == navElement.getAttribute("data-id")
          ) {
            navElement.classList.add("active");
          }
        }
      }
    }
  }
});
