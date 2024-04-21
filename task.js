function addTask(){
    var taskInput=document.getElementById("task-input");
    var taskText=taskInput.value.trim();

    if(taskText==""){
        alert("please enter text");
        return;
    }
    var tasklist=document.getElementById("task");
    var listItem=document.createElement("li");
    listItem.textContent=taskText;

    var deleteButton=document.createElement("button");
    deleteButton.textContent="delete";
    deleteButton.onclick=function(){
        listItem.remove();
    };
    listItem.appendChild(deleteButton);
    tasklist.appendChild(listItem);

    taskInput.value="";
}