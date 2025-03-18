const CHANNEL_NAME = "i-m-sat-nk6jcu2swik";
const API_URL = `https://api.are.na/v2/channels/${CHANNEL_NAME}?per=100`;

module.exports = async function () {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch Are.na data");

    const data = await response.json();
    // uncomment for troubleshooting
    // console.log("Are.na API Data:", data);

    const images = data.contents
      .filter((item) => item.class === "Image" && item.image?.original?.url)
      .map((item) => ({
        title: item.title || "Untitled",
        imageUrl: item.image.original.url
      }));
      
    return images;

  } catch (error) {
    console.error("Error fetching Are.na data:", error);
    return [];
  }
};
