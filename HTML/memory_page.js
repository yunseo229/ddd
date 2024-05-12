document.addEventListener("DOMContentLoaded", function() {
    const forgetImage = document.getElementById("forget");
    const ingredientsList = document.querySelector(".box3"); // box3로 변경

    forgetImage.addEventListener("click", function() {
        ingredientsList.style.display = "block";
    });
});
