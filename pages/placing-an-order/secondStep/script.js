let secDeleviry = document.getElementById("secDeleviry");
let secPickup = document.getElementById("secPickup");

secDeleviry.addEventListener("change", function () {
  if (secDeleviry.checked) {
    document.querySelector(".contaner-delevety").style.display = "block";
    document.querySelector(".contaner-pickup").style.display = "none";
  }
});

secPickup.addEventListener("change", function () {
  if (secPickup.checked) {
    document.querySelector(".contaner-delevety").style.display = "none";
    document.querySelector(".contaner-pickup").style.display = "block";
  }
});
