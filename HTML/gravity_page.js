document.addEventListener("DOMContentLoaded", function() {
    const petalImage = document.getElementById("petal");
    const ingredientsList = document.querySelector(".box3"); // box3로 변경

    petalImage.addEventListener("click", function() {
        ingredientsList.style.display = "block";
    });
});
