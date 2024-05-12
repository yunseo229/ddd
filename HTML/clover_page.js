document.addEventListener("DOMContentLoaded", function() {
    const clov3Image = document.getElementById("clov3");
    const ingredientsList = document.querySelector(".box3"); // box3로 변경

    clov3Image.addEventListener("click", function() {
        ingredientsList.style.display = "block";
    });
});
