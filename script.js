const czLink = "https://discountzone.pro/a/zpKMET4486Ug6QY";
const globalLink = "https://safeoffers.pro/a/ADP32s5l4H9pEL";

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
