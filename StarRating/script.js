const icons = document.querySelectorAll(".icons");
icons.forEach((icon, index1) => {
  icon.addEventListener("click", () => {
    icons.forEach((icon, index2) => {
      index1 >= index2
        ? icon.classList.add("active")
        : icon.classList.remove("active");
    });
  });
});
