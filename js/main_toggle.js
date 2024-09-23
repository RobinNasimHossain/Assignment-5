/** @format */

const buttonDonation = document.getElementById("button-donation");
const buttonHistory = document.getElementById("button-history");
const donationContainer = document.getElementById("donation-container");
const historySection = document.getElementById("history-section");
const footer = document.getElementById("footer");
const blogNavButtons = document.getElementById("blog-nav-buttons");

function toggleButton(event) {
  const clicked = event;
  if (clicked.innerText === "Donation") {
    clicked.classList.add("bg-primaryBg");
    buttonHistory.classList.remove("bg-primaryBg");
    donationContainer.classList.remove("hidden");
    historySection.classList.add("hidden");
    footer.classList.remove("hidden");
  } else if (clicked.innerText === "History") {
    clicked.classList.add("bg-primaryBg");
    buttonDonation.classList.remove("bg-primaryBg");
    donationContainer.classList.add("hidden");
    historySection.classList.remove("hidden");
    footer.classList.add("hidden");
  } else if (clicked.innerText === "Blog") {
    window.location.href = "blog.html";
  } else if (clicked.innerText === "Home") {
    window.location.href = "index.html";
  } else if (clicked === "History") {
    console.log("history button clicked");
  } else if (clicked === "Blog") {
  }
}
