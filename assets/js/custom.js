document.addEventListener("DOMContentLoaded", function () {
  //changes order of componenets on mobile device

  let reduction = function () {
    //elements from contact section
    let spec = document.getElementById("pic-element");
    let parent = spec.parentNode;

    //elements from gamedevs section
    let gameLogo = document.getElementById("gamedevs_logo");
    let gameParent = document.getElementById("gamedevs_logo_parent")
    let mobDevGamePar = document.getElementById("content-box")
    
    if (window.innerWidth <= 576 ) {

      //removing element from gamedev section and appending it to the end of section
      gameParent.removeChild(gameLogo)
      mobDevGamePar.appendChild(gameLogo)
      
      //removing pic from conact section and appending it as first element
      parent.removeChild(spec);
      parent.appendChild(spec);
  
    } else if (window.innerWidth > 576) {
      //resizing to big screeen
      parent.removeChild(spec);
      parent.prepend(spec);

      //inserts gamedevs logo to first place in gameParent
      gameParent.prepend(gameLogo)
    }
  };

  reduction();

  window.addEventListener("resize", reduction);
});
