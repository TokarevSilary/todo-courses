const form = document.querySelector('form');
const tasksDaily = document.querySelector(".tasks__input");
let myStorage = window.localStorage;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (tasksDaily.value !== "") {
        updateInformation();
    }
})


function updateInformation() {

    let ourTextBlock = document.createElement("div");
    ourTextBlock.classList.add("tasks__list");
    ourTextBlock.id = "tasks__list";

    let textBlock = document.createElement("div");
    textBlock.classList.add("task");

    let block = document.createElement("div");
    block.classList.add("task__title");

    ourTextBlock.append(textBlock);
    textBlock.append(block);
    block.innerHTML = tasksDaily.value;

    const cross = document.createElement("a");
    cross.classList.add("task__remove");
    cross.href = "#";
    cross.innerHTML = "&times";
    console.log("я туту");
    let id = Date.now();
    cross.dataset.id = String(id);
    cross.addEventListener("click", (e) => {
        e.preventDefault();
        cross.closest('.tasks__list').remove();
    })
    block.insertAdjacentElement("afterend", cross);


    form.insertAdjacentElement("afterend", ourTextBlock);

    tasksDaily.value = "";

    // const ourSaveFile = ourTextBlock.outerHTML;
    // localStorage.setItem(`${id}`, ourSaveFile);
    // console.log(myStorage);
}

// if (myStorage.length > 0) {
//     for (let i = 0; i < myStorage.length; i++) {
//         const key = localStorage.key(i);
//         form.insertAdjacentHTML("afterend", myStorage.getItem(key));
//     }
// }

// document.addEventListener("click", (e) => {
//     if (e.target.classList.contains("task__remove")) {
//         e.preventDefault();
//         let task = e.target.closest(".tasks__list");
//         task.remove();
//         let id = e.target.dataset.id;
//         myStorage.removeItem(id);
//     }
// })




