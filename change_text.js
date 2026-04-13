const title = document.getElementById("title");
const button = document.getElementById("button");

button.addEventListener("click", () => {
    title.textContent = "Текст изменен!";
})