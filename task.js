const form = document.querySelector('form');
const tasksDaily = document.querySelector(".tasks__input");
const myStorage = window.localStorage;
const tasks = document.getElementById("tasks");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (tasksDaily.value.trim() !== "") {
        updateInformation();
    }
})


function updateInformation() {
    createTask()
    tasksDaily.value = "";
    saveFile()
}

function createTask() {
    const tasksList = document.createElement("div");
    tasksList.classList.add("tasks-list");
    tasks.append(tasksList);


    tasksList.insertAdjacentHTML("afterend",
        `
            <div class="task">
              <div class="task__title">
                ${tasksDaily.value}
              </div>
              <a href="#" class="task__remove">&times;</a>
            </div>
            `
    );
}

function saveFile() {
    ourSaveFile = [];

    saveFile = document.querySelectorAll(".task__title");
    saveFile.forEach(element => {
        ourSaveFile.push(element.textContent.trim());
    })

    localStorage.setItem("saves", JSON.stringify(ourSaveFile));
}




if (myStorage.getItem("saves")) {
    const saves = JSON.parse(myStorage.getItem("saves")) || [];
    for (let i = 0; i < saves.length; i++) {
        form.insertAdjacentHTML("afterend",
            `
            <div class="task">
              <div class="task__title">
                ${saves[i]}
              </div>
              <a href="#" class="task__remove">&times;</a>
            </div>
            `
        );
    }
}


tasks.addEventListener("click", (e) => {
        if (e.target.classList.contains("task__remove")) {
            e.preventDefault();
            let task = e.target.closest(".task");
            let ourText = task.querySelector(".task__title");
            task.remove();
            const saves = JSON.parse(myStorage.getItem("saves")) || [];
            let newSaves =saves.filter(element => element.trim() !== ourText.textContent.trim());
            myStorage.setItem("saves", JSON.stringify(newSaves));

        }
    })






