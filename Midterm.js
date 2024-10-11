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

    if(isNaN(hours) || !dayOfWk) {
        alert("Enter a valid number for sleep duration");
        $("#sleepDuration").value = "";
    } else {
        let dayIndex = days.indexOf(dayOfWk.value);
        duration[dayIndex] = hours;

        alert("Your updated sleep duration is " + hours + " hrs on " + days[i]);
        $("#sleepDuration").value = "";
    }
}

function ShowAverageMinMaxSleep() {
    let totalSleep = 0;
    const minSleep = Math.min(...duration);
    const maxSleep = Math.max(...duration);

    for (let i = 0; i < duration.length; i ++) {
        totalSleep += duration[i];
    }

    const averageSleep = (totalSleep/duration.length).toFixed(2);

    $("averageSleep").value = "Average sleep duration for this week";
    $("averageSleep").style.color = "green";
    $("averageSleep").style.borderColor = "red";
}

function displaySleepDuration() {
    let table = $("sleep_table");
    table.innerHTML = "";

    let username = $("#username").value;

    let tableParagraph = document.createElement("p");
    tableParagraph.textContent = "Hey " + username + "! You slept less than five hours on the following days";
    table.appendChild(tableParagraph);

    let headerRow = document.createElement("tr");

    let nameHeader = document.createElement("th");
    nameHeader.textContent="Day";
    headerRow.appendChild(nameHeader);

    let hourHeader = document.createElement("th");
    hourHeader.textContent="Hour";
    headerRow.appendChild(hourHeader);

    table.appendChild(headerRow);

    for (let i = 0; i < days.length; i++){
        if(duration[i] < 5) {
            let row = document.createElement("tr");

            let daysColumn = document.createElement("td");
            daysColumn.textContent = days[i];
            row.appendChild(daysColumn);
    
            let hoursColumn = document.createElement("td");
            hoursColumn.textContent = duration[i];
            row.appendChild(hoursColumn);
    
            table.appendChild(row);  
        }
    }
}
