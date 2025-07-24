document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "DSC05087.webp",
    "DSC05213.webp",
    "DSC05224.webp",
    "DSC05225.webp",
    "DSC05226.webp",
    "DSC05310.webp",
    "DSC05332.webp",
    "DSC05421.webp",
    "DSC05423.webp",
    "DSC05450.webp",
    "DSC05457.webp",
    "DSC05482.webp",
    "DSC05502.webp",
    "DSC05538.webp",
    "DSC05637.webp",
    "DSC05650.webp",
    "DSC05751.webp",
    "DSC05761.webp",
    "IMG_8172.webp"
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
  