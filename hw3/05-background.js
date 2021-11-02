// Enter your code here

console.log('Enter your code here');
const btn = document.querySelector('#btn');
const interval = document.getElementById('interval').value;
const randomBackground =() => {
    let x = Math.ceil(Math.random() * 256);
    let y = Math.ceil(Math.random() * 256);
    let z = Math.ceil(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background = bgColor;
}

myVar = setInterval(function(){
    randomBackground();
}, interval*1000);

btn.addEventListener("click", ()=>{
    if(document.getElementById("btn").className == "btn btn-danger"){
        document.getElementById("btn").className = "btn btn-success";
        document.getElementById("btn").value = "Start";
        clearInterval(myVar); 
    }else{
        document.getElementById("btn").className = "btn btn-danger";
        document.getElementById("btn").value = "Stop";
        myVar = setInterval(function(){
            randomBackground();
        }, interval*1000);
    }
})
