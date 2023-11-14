const plus = document.querySelector("#plus");
const min = document.querySelector("#min");
const resultNumber = document.querySelector("#result");
const reset = document.querySelector("#reset");

let result = 0;
plus.addEventListener("click", () => {
    result++;
    updateNumber();
});
min.addEventListener("click", () => {
    result--;
    updateNumber();
});
reset.addEventListener("click", () => {
    result = 0;
    updateNumber();
});

function updateNumber() {
    resultNumber.textContent = result;
}