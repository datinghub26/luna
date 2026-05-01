// ✅ Your Smartlink (already added)
const SMARTLINK = "https://safeoffers.pro/a/BBL32ulp8lujLzR";

// 🔍 Detect source (URL param + referrer fallback)
function getSource() {
    const params = new URLSearchParams(window.location.search);
    const srcParam = params.get("src");

    if (srcParam) return srcParam.toLowerCase();

    let ref = document.referrer.toLowerCase();

    if (ref.includes("facebook")) return "facebook";
    if (ref.includes("tiktok")) return "tiktok";

    return "direct";
}

const source = getSource();

// 🌍 GEO Detection
fetch("https://ipapi.co/json/")
.then(res => res.json())
.then(data => {
    let country = data.country_name || "your area";
    let city = data.city || "";

    // 🎯 Source-based message
    let sourceText = "";

    if (source === "tiktok") {
        sourceText = "🔥 Trending on TikTok!";
    } else if (source === "facebook") {
        sourceText = "🔥 People from Facebook are joining!";
    } else {
        sourceText = "🔥 People are joining now!";
    }

    document.getElementById("headline").innerText =
        "💘 Singles in " + country + " are waiting";

    document.getElementById("geoText").innerText =
        sourceText + " Near " + (city ? city : country);

    document.getElementById("searchText").innerText =
        "🔍 Searching matches in " + country + "...";
})
.catch(() => {
    document.getElementById("geoText").innerText =
        "🔥 People near you are online now";
});

// 🔄 Step navigation
function nextStep(step) {
    document.querySelectorAll('.box').forEach(el => el.classList.add('hidden'));
    document.getElementById('step' + step).classList.remove('hidden');

    if (step === 3) {
        setTimeout(() => {
            window.location.href = SMARTLINK;
        }, 2500);
    }
}
