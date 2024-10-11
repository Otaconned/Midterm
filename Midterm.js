'use strict';

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let duration = [6,7,8,9,5,6,4];

let $ = function(id) { return document.querySelector("#"+id); };

document.addEventListener("DOMContentLoaded", function() {
    $("#updateBtn").addEventListener("click", updateSleep);
    $("#averageBtn").addEventListener("click", displaySleepDuration);
    $("#trackBtn").addEventListener("mouseover", displaySleepDuration);

});

// define functions here

function updateSleep(){
    let dayOfWk = document.querySelector('input[name="day"]:checked');
    let hours = $("#sleepDuration").value;

    if(isNaN(sleepDuration) || !dayOfWk) {
        alert("Enter a valid number for sleep duration");
        $('#sleepDuration').value = "";
    } else {
        alert("Your updated sleep duration is " + hours + " hrs on " + day);
        $('#sleepDuration').value = "";
    }
}

function ShowAverageMinMaxSleep() {
    let totalSleep = 0;
    const average = (totalSleep/duration.length).toFixed(2);
    const min = Math.min(duration[i]);
    const max = Math.max(duration[i]);
    const sleepLabel = document.createElement('label');

    for (let i = 0; i < duration.length; i ++) {
        totalSleep += duration[i];
    }

    $("averageSleep").textContent = "Average sleep duration for this week";
    $("averageSleep").style.color = "green";
    $("averageSleep").style.borderColor = "red";
}
