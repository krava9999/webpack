export function toggle() {
    let formCollection = document.querySelectorAll(".form");
    formCollection.forEach(element => {
        element.classList.toggle("visible");
    })
}