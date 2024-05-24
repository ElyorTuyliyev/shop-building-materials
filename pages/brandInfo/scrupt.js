const minPriceInput = document.getElementById("min-price-input");
const maxPriceInput = document.getElementById("max-price-input");
const minPriceSlider = document.getElementById("min-price");
const maxPriceSlider = document.getElementById("max-price");

function updatePriceInputs() {
  const minPrice = parseInt(minPriceSlider.value);
  const maxPrice = parseInt(maxPriceSlider.value);

  if (minPrice > maxPrice) {
    minPriceSlider.value = maxPrice;
    minPriceInput.value = maxPrice;
  } else {
    minPriceInput.value = minPrice;
    maxPriceInput.value = maxPrice;
  }
}

minPriceSlider.addEventListener("input", updatePriceInputs);
maxPriceSlider.addEventListener("input", updatePriceInputs);

minPriceInput.addEventListener("input", () => {
  minPriceSlider.value = minPriceInput.value;
  updatePriceInputs();
});

function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
}

const resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", () => {
  const checkboxes = document.querySelectorAll(
    '.filter-item input[type="checkbox"]'
  );
  checkboxes.forEach((checkbox) => (checkbox.checked = false));

  const radios = document.querySelectorAll('.filter-item input[type="radio"]');
  radios.forEach((radio) => (radio.checked = false));

  document.getElementById("any").checked = true;
});
