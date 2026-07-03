const input = document.querySelector("input");
const addBtn = document.querySelector("#addBtn");
const tskShow = document.querySelector(".tsk-show");


let editTask = null;


addBtn.addEventListener("click", () => {
    const value = input.value.trim();

    if (value === "") return;


    if (editTask !== null) {

        const p = editTask.querySelector("p");
        p.textContent = value;


        editTask = null;
        addBtn.textContent = "Add";
        input.value = "";

        return;
    }


    tskShow.innerHTML += `
        <div class="tsk-item">
            <p>${value}</p>

            <div class="btn">
                <button class="edit">Edit</button>
                <button class="del">Delete</button>
                <button class="complete">Complete</button>
            </div>
        </div>
    `;

    input.value = "";
});



tskShow.addEventListener("click", (event) => {

    if (event.target.classList.contains("del")) {


        if (editTask === event.target.closest(".tsk-item")) {
            editTask = null;
            input.value = "";
            addBtn.textContent = "Add";
        }

        event.target.closest(".tsk-item").remove();
    }


    if (event.target.classList.contains("edit")) {
        const taskItem = event.target.closest(".tsk-item");
        const p = taskItem.querySelector("p");
        input.value = p.textContent;
        editTask = taskItem;
        addBtn.textContent = "Update";
        input.focus();
    }

    if(event.target.classList.contains("complete")){

        const taskItem = event.target.closest(".tsk-item");
        const p = taskItem.querySelector("p");
        p.style.textDecoration = "line-through"
        p.style.color="grey"


        const editBtn = taskItem.querySelector(".edit")
        editBtn.classList.add("disabled")
        const completeBtn = taskItem.querySelector(".complete")
        completeBtn.textContent = "Completed"
        completeBtn.classList.add("disabled")

    }

});

