const czLink = "https://safeoffers.pro/a/M8LJc6Mz6UJRl9";
const globalLink = "https://safeoffers.pro/a/M8LJc6Mz6UJRl9";

async function getVisitorCountry() {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    return data.country_code;
  } catch (error) {
    return null;
  }
}

document.getElementById("joinBtn").addEventListener("click", async () => {
  const country = await getVisitorCountry();

  if (country === "CZ") {
    window.location.href = czLink;
  } else {
    window.location.href = globalLink;
  }
});
