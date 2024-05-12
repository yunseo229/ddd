document.addEventListener("DOMContentLoaded", function() {
    const treemImage = document.getElementById("treem");
    const ingredientsList = document.querySelector(".box3"); // box3로 변경

    treemImage.addEventListener("click", function() {
        ingredientsList.style.display = "block";
    });
});
