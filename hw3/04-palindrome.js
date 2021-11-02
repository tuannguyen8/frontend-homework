// Enter your code here
console.log('Enter your code here');
let inputNode = document.querySelector("#number");

const resetResult = (e)=>{
    let resetdiv = document.getElementById("result");
    resetdiv.remove();
}

const palindrome = ()=>{
    resetResult();
    let value = inputNode.value;
    let len = value.length;
    if(value == ""){
        let app = document.querySelector('.result-div');
        const reset = document.createElement("div");
        reset.innerHTML=`Please enter a number`;
        reset.style.color = "red";
        reset.setAttribute('id','result');
        app.appendChild(reset);
        return;
    }
    for(i = 0; i < len/2; i++){
        if(value[i] !== value[len-1-i]){
            let app = document.querySelector('.result-div');
            const reset = document.createElement("div");
            reset.innerHTML=`No. Try again`;
            reset.style.color = "red";
            reset.setAttribute('id','result');
            app.appendChild(reset);
            return;
        }
    }
    let app = document.querySelector('.result-div');
    const reset = document.createElement("div");
    reset.innerHTML=`Yes. This is a palindrome!`;
    reset.style.color = "green";
    reset.setAttribute('id','result');
    app.appendChild(reset);
    return;
}

inputNode.addEventListener("keyup", function(e){
    e.preventDefault();
    console.log(e.keyCode);
    if(e.keyCode === 13){
        palindrome();
    } 
})