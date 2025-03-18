const CHANNEL_NAME = "i-m-sat-nk6jcu2swik";
const API_URL = `https://api.are.na/v2/channels/${CHANNEL_NAME}?per=100`;

module.exports = async function () {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    console.log("Are.na data fetched successfully:");

    // get only images
    return data.contents
      .filter((item) => item.class === "Image")
      .slice(0, 1)
      .map((item) => ({
        title: item.title,
        imageUrl: item.image.original.url,
      }));
  } catch (error) {
    console.error("Error fetching Are.na data:", error);
    return [];
  }
};

