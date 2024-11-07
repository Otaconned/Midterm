'use strict';

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let duration = [6,7,8,9,5,6,4];

let $ = function(id) { return document.querySelector("#"+id); };

document.addEventListener("DOMContentLoaded", function() {
    $("updateBtn").addEventListener("click", updateSleep);
    $("averageBtn").addEventListener("click", ShowAverageMinMaxSleep);
    $("trackBtn").addEventListener("mouseover", displaySleepDuration);
    $("your_details").addEventListener("submit", function(event){
        event.preventDefault();
    });
});

// define functions here

function updateSleep(){
    let selectedDay = document.querySelector('input[name="day"]:checked');
    let sleepDuration = $("sleepDuration").value;

    if(!sleepDuration || isNaN(sleepDuration)) {
        alert("Enter a valid number for sleep duration");
        $("sleepDuration").value = "";
        return;
    } 

    if(selectedDay) {
        let dayIndex = days.indexOf(selectedDay.value);
        duration[dayIndex] = parseFloat(sleepDuration);
        alert("Your updated sleep duration is " + sleepDuration + " hrs on " + days[dayIndex]);
    }
    
    $("sleepDuration").value = "";
}

function ShowAverageMinMaxSleep() {
    let totalSleep = 0;
    const minSleep = Math.min(...duration);
    const maxSleep = Math.max(...duration);

    for (let i = 0; i < duration.length; i ++) {
        totalSleep += duration[i];
    }
    let averageSleep = (totalSleep/duration.length).toFixed(2);

    let display = $("averageSleep");
    display.value = "Average: " + averageSleep + " Minimal: " + minSleep + " Maximal: " + maxSleep;
    display.style.color = "green";
    display.style.borderColor = "red";
}

function displaySleepDuration() {
    let table = $("sleep_table");
    let resultHere = $("result_here");
    let username = $("username").value;

    resultHere.innerHTML = 'User ${username} slept less than five hours on the following days';
    sleepTable.innerHTML = "";

    let tableContent = "<tr><th>Day</th><th>Duration (hrs)</th></tr>";

    for (let i = 0; i < duration.length; i++){
        if(duration[i] < 5) {
            tableContent += '<tr><td>${days[i]}</td><td>${duration[i]}</td></tr>';
        }
    }

    sleepTable.innterHTML = tableContent;
}
