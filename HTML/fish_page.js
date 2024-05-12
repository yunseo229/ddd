document.addEventListener("DOMContentLoaded", function() {
    const GoldfishImage = document.getElementById("Goldfish");
    const ingredientsList = document.querySelector(".box3"); // box3로 변경

    GoldfishImage.addEventListener("click", function() {
        ingredientsList.style.display = "block";
    });
});
