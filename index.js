const form =document.getElementById('form')
const nameInput =document.getElementById('name-input')
const numberOfArriving =document.getElementById('arriving-number')
const weekendStay = document.getElementById('weekend-stay')
const ifChecked = document.getElementById('if-checked')
const countDown =document.getElementById('countdown')
const pics = ["./photos/1.JPG","./photos/2.JPG","./photos/3.JPG","./photos/4.JPG"]

function countdown() {
    const targetDate = new Date('2023-10-20');
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    if (timeRemaining <= 0) {
        // Target date has passed
        countDown.textContent = 'Countdown has ended!';
        return;
    }

    // Calculate days, hours, minutes, and seconds remaining
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the countdown
    countDown.textContent =
        ` ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

// Update the countdown every second
setInterval(countdown, 1000);
function handlerBackground(){
    document.body.style.backgroundImage =`url(${pics[Math.floor(Math.random()*pics.length)]})`
}

    setInterval(handlerBackground,5000)


form.addEventListener('submit',function (e){
    e.preventDefault()
    const nameInputValue = nameInput.value
    const numberOfArrivingValue = numberOfArriving.value

    const guest ={
        name: nameInputValue ,
        numberOfArriving : numberOfArrivingValue ,
        stayForTheWeekend : weekendStay.checked
    }
    console.log(guest)
    alert("לכו להזדיין")
})
weekendStay.addEventListener('change',function (){
    if(weekendStay.checked){
        console.log("hello")
        ifChecked.innerText = `יהיה כיך יא בולבולים`
    }
    else{
        ifChecked.innerText = ""
    }
})
