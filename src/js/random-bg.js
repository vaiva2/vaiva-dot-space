document.addEventListener("DOMContentLoaded", function () {
    const images = [
      "DSC05087.JPEG",
      "DSC05213.JPEG",
    ];
  
    // get the last used image from local storage
    let lastImage = localStorage.getItem("lastBackground");
    let randomImage;

    // generate random image from list but not the same as last time
    do {
        randomImage = images[Math.floor(Math.random() * images.length)];
    } while (randomImage === lastImage);

    // store the new image in local storage
    localStorage.setItem("lastBackground", randomImage);

    document.body.style.backgroundImage = `url('/img/${randomImage}')`;
  });
  