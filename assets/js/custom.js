document.addEventListener("DOMContentLoaded", function() {
  let reduction = function () {
    let spec = document.getElementById("pic-element");
    let parent = spec.parentNode;
    if (window.innerWidth <= 576 && spec.parentNode) {
      parent.removeChild(spec);

      parent.appendChild(spec);
      console.log("triggered");
    } else if (window.innerWidth > 576 && spec.parentNode) {
      parent.removeChild(spec);
      parent.prepend(spec);
      console.log("Done");
    }
  };

  reduction();

  window.addEventListener("resize", reduction);
});
