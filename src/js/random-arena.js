// async function fetchImage() {
//     const response = await fetch("https://api.are.na/v2/channels/i-m-sat-nk6jcu2swik?per=100");
//     const data = await response.json();

//     const images = data.contents
//       .filter(item => item.class === "Image" && item.image?.original?.url);

//     if (images.length === 0) return;

//     let randomImage = images[Math.floor(Math.random() * images.length)];

//     document.getElementById("arena-image").src = randomImage.imageUrl;
//     document.getElementById("arena-title").innerText = randomImage.title;
//   }

//   window.onload = fetchImage;

async function fetchImage() {
    try {
        const response = await fetch("https://api.are.na/v2/channels/i-m-sat-nk6jcu2swik?per=100");
        if (!response.ok) throw new Error("Failed to fetch Are.na data");

        const data = await response.json();

        const images = data.contents
            .filter(item => item.class === "Image" && item.image?.original?.url);

        if (images.length === 0) return;

        let randomImage = images[Math.floor(Math.random() * images.length)];

        document.getElementById("arena-image").src = randomImage.image.original.url;
        document.getElementById("arena-image").alt = randomImage.title || "Untitled";
    } catch (error) {
        console.error("Error fetching Are.na image:", error);
    }
}

window.onload = fetchImage;
