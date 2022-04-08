// display current day
    // append in header

// time blocks 9am - 5pm
    // create li to append to container
    // time-block, row, hour classes

// greyed out for past, red present, green future (use classes)
    // click on block --> enter an event
    // save in local storage

var saveBtn = document.getElementById("save")
var taskInput = document.getElementById("task-input")

let taskStorage = localStorage.getItem("taskInput")
    JSON.stringify(localStorage.getItem("taskInput"))

saveBtn.addEventListener("click", function(){
    taskStorage.push(taskInput.value.trim());
    localStorage.setItem("taskInput", JSON.stringify(taskStorage));
    listBuilder(taskInput.value);
    taskInput.value = "";
});