const form =document.getElementById('form')
const nameInput =document.getElementById('name-input')
const numberOfArriving =document.getElementById('arriving-number')
const weekendStay = document.getElementById('weekend-stay')
const ifChecked = document.getElementById('if-checked')
const pics = ["./photos/1.JPG","./photos/2.JPG","./photos/3.JPG","./photos/4.JPG"]


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
