document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "DSC05087.JPEG",
    "DSC05213.JPEG",
    "DSC05224.JPEG",
    "DSC05225.JPEG",
    "DSC05226.JPEG",
    "DSC05310.JPEG",
    "DSC05332.JPEG",
    "DSC05421.JPEG",
    "DSC05423.JPEG",
    "DSC05450.JPEG",
    "DSC05457.JPEG",
    "DSC05482.JPEG",
    "DSC05502.JPEG",
    "DSC05538.JPEG",
    "DSC05637.JPEG",
    "DSC05650.JPEG",
    "DSC05751.JPEG",
    "DSC05761.JPEG",
    "IMG_8172.JPEG"
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
  