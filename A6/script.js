const input = document.querySelector("input")
const addBtn = document.querySelector("#add-Btn")
const tskShow = document.querySelector(".tsk-show")

let editCard=null;


addBtn.addEventListener("click",()=>{
    if(input.value.trim()==="") return
    tskShow.innerHTML+=
        `
        <div class="crds">
                <h3>${input.value}</h3>
                <div class="btns">
                    <button class="edit-btn">Edit</button>
                    <button class="delete-btn">Delete</button>
                </div>
            </div>
        `
        input.value="";

})

tskShow.addEventListener("click",(e)=>{
    if(e.target.classList.contains("delete-btn")){
        const card= e.target.closest(".crds")
        card.remove()
    }

    if(e.target.classList.contains("edit-btn")){
      const card = e.target.closest(".crds")
      input.value = card.querySelector("h3").innerText;
      card.remove();
      input.focus();
      addBtn.innerText = "Add";
    }
    
})




