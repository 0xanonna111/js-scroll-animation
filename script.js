const boxes = document.querySelectorAll(".box");

function checkScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
      box.classList.remove("hidden");
    }
  });
}

window.addEventListener("scroll", checkScroll);
checkScroll();
