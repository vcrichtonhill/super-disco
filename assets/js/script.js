
// greyed out for past, red present, green future (use classes)
    // click on block --> enter an event
    // save in local storage

var saveBtn = $(".saveBtn")
var taskInput = document.getElementById("task-input")
var currentDay = document.getElementById("currentDay")
currentDay.innerHTML = moment().format('LL')
var currentTime = moment().format('LT');


let taskStorage = localStorage.getItem("taskInput")
    JSON.stringify(localStorage.getItem("taskInput"))

saveBtn.on("click", function(){
    // taskStorage.push(taskInput.value.trim());
    // localStorage.setItem("taskInput", JSON.stringify(taskStorage));
    // listBuilder(taskInput.value);
    // taskInput.value = "";
    var activity = $(this).siblings(".description").val()
    var hourKey = $(this).parent().attr("id")
    localStorage.setItem(hourKey, activity)
});
for (var i = 9; i < 18; i++) {
    $("#hour-" + i + " .description").val(localStorage.getItem("hour-" + i))

}
$(".time-block").each(function(row){
    var hour = $(this).attr("id").split("-")[1]
    var momentHour = moment().hour()
    if (hour < momentHour) {
        $(this).addClass("past")
    } else if (hour == momentHour) {
        $(this).addClass("present")
    } else {
        $(this).addClass("future")
    }
})
// if (hour is after moment().format('LT');) {
//     assign class past
// } else if {
//     assign class present
// } else {
//     assign class future
// }
