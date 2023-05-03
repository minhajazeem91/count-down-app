const FinalDate = "05 May 2023 11:59:59"; 
document.getElementById('end-date').innerText = FinalDate;

const EndDate = new Date(FinalDate);
const NewDate = new Date();
console.log(NewDate);

const diffDate = (EndDate - NewDate)
console.log(diffDate);