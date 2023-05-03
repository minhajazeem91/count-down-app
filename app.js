const FinalDate = "30 June 2023 23:59:59"; 
document.getElementById('end-date').innerText = FinalDate;
const inputs = document.querySelectorAll('input');

function getDate(){
const EndDate = new Date(FinalDate);
const NewDate = new Date();

const DiffDate = (EndDate - NewDate)/1000;

if(DiffDate < 0) return;
// convert the difference into Days
const days = Math.floor(DiffDate/3600/24);
inputs[0].value = days;

// convert the difference into Hours
const hours = Math.floor(DiffDate/3600) % 24;
inputs[1].value = hours;

// convert the difference into Minutes
const minutes = Math.floor(DiffDate/60) % 60;
inputs[2].value = minutes;

// convert the difference into Hours
const seconds = Math.floor(DiffDate) % 60;
inputs[3].value = seconds;
}

setInterval(
    () => {
        getDate();
},1000
)

