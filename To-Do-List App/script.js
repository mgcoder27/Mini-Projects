const input_box = (document.getElementById("input-box"));
const taskslist = document.getElementById("tasks-list");
const addButton = document.getElementById("add-button");


function AddTask(){
    if(input_box.value=== ''){
        alert("Please Enter Task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input_box.value;
        taskslist.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input_box.value = "";
    saveData();
}

taskslist.addEventListener("click", function(e){ // iski help se task ko check karne ka option milta hai aur task ko delete karne ka option milta hai
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){ // iski help se task ko save karne ka option milta hai
    localStorage.setItem("taskslist", taskslist.innerHTML);
}

function loadData(){ // iski help se task ko browser par load karne ka option milta hai
    taskslist.innerHTML = localStorage.getItem("taskslist");
}

loadData();