let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let duration = [6,7,8,9,5,6,4];

let $ = function(id) { return document.querySelector("#"+id); };

document.addEventListener("DOMContentLoaded", function() {
    $("updateBtn").addEventListener("click", updateSleep);
    $("averageBtn").addEventListener("click", displaySleepDuration);
    $("trackBtn").addEventListener("mouseover", displaySleepDuration);

});

// define functions here

function updateSleep(){
    let selectedDay = document.querySelector('input[name="day"]:checked');
    let sleepDuration = $("#sleepDuration").value;

    if(sleepDuration === "" || isNaN(sleepDuration)) {
        alert("Enter a valid number for sleep duration");
        $("sleepDuration").value = "";
    } 

    if(selectedDay) {
        let dayIndex = days.findIndex(day => selectedDay.value.toLowerCase().includes(day.toLowerCase()));
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
    table.innerHTML = "";

    let username = $("username").value;

    let tableParagraph = document.createElement("p");
    tableParagraph.textContent = "Hey " + username + "! You slept less than five hours on the following days";
    $("result_here").appendChild(tableParagraph);

    let headerRow = document.createElement("tr");

    let nameHeader = document.createElement("th");
    nameHeader.textContent="Day";
    headerRow.appendChild(dayHeader);

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
