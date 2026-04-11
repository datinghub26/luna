// 👉 PUT YOUR SMARTLINK HERE
const SMARTLINK = "https://safeoffers.pro/a/ADP32s5l4H9pEL";

// GEO Detection
fetch("https://ipapi.co/json/")
.then(res => res.json())
.then(data => {
    let country = data.country_name || "your area";
    let city = data.city || "";

    document.getElementById("headline").innerText =
        "💘 Singles in " + country + " are waiting";

    document.getElementById("geoText").innerText =
        "🔥 People near " + (city ? city : country) + " are online now";

    document.getElementById("searchText").innerText =
        "🔍 Searching matches in " + country + "...";
})
.catch(() => {
    document.getElementById("geoText").innerText =
        "🔥 People near you are online now";
});

function nextStep(step) {
    document.querySelectorAll('.box').forEach(el => el.classList.add('hidden'));
    document.getElementById('step' + step).classList.remove('hidden');

    if (step === 3) {
        setTimeout(() => {
            window.location.href = SMARTLINK;
        }, 2500);
    }
}
