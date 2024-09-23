/** @format */

const availableCash = document.getElementById("available-cash");
const modalButton = document.getElementById("modal-btn");

function donateNowButton(event) {
  const donationValue = event.previousElementSibling.value;

  const parentDiv = event.parentElement;
  const spanElement = parentDiv.querySelector("span");
  let spanValue = spanElement.innerText;

  const address = parentDiv.querySelector(".address").innerText;

  const currentTime = new Date();

  const restMoney = Number(availableCash.innerText);
  if (donationValue > 0 && restMoney >= donationValue && donationValue != "") {
    spanValue = Number(spanValue) + Number(donationValue);
    spanElement.innerText = spanValue;
    availableCash.innerText = restMoney - donationValue;
    my_modal_1.showModal();

    const newHistory = document.createElement("div");
    newHistory.innerHTML = `

    <div
          class="border-[1px] border-[#1111111A] p-8 w-full space-y-4 rounded-2xl mb-6 shadow-md"
        >
          <p class="text-primary font-bold">
            ${donationValue} Taka is Donated for ${address}
          </p>
          <p class="text-secondary font-light">Date : ${currentTime}</p>
    </div>
    
    `;
    historySection.appendChild(newHistory);
  } else if (restMoney < donationValue) {
    alert("Not Enough Balance");
    event.previousElementSibling.value = "";
  } else {
    alert("Invalid Amount");
    event.previousElementSibling.value = "";
  }
  document.getElementById("modal-btn").addEventListener("click", function () {
    event.previousElementSibling.value = "";
  });
}
