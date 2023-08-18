const mainSection = document.querySelector(".visible");
const thankSection = document.querySelector(".hidden");
const submitButton = document.querySelector("button");
const selectedText = document.querySelector(".orange");
const ratingInputs = document.querySelectorAll('.rating input[type="radio"]');
let selectedRating = null;

ratingInputs.forEach((input) => {
  input.addEventListener("change", () => {
    selectedRating = input.value;
    // console.log(`Selected rating: ${selectedRating}`);
  });
});

submitButton.addEventListener("click", () => {
  thankSection.classList.remove("hidden");
  mainSection.classList.add("hidden");
  selectedText.innerText = `You selected ${selectedRating} out of 5`;
});
