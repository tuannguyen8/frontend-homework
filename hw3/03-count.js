// Enter your code here

console.log('Enter your code here');

const inputNode = document.querySelector("#userinput");
const textContent = document.getElementById("intro").innerHTML;

function search(e) {
    resetSearch();
    let searched = document.getElementById("userinput").value.trim();
    if (searched !== "") {
        let text = document.getElementById("intro").innerHTML;
        let re = new RegExp(searched,"g");
        let newText = text.replace(re, `<a class="highlight" style="background:yellow;">${searched}</a>`);
        document.getElementById("intro").innerHTML = newText;
    }
}

function resetSearch(e){
    let text = document.getElementById("intro");
    text.remove();
    let app = document.querySelector('.intro-cover');
    const resetpara = document.createElement("div");
    resetpara.innerHTML=`${textContent}`;
    resetpara.setAttribute('id','intro');
    app.appendChild(resetpara); 

}

inputNode.addEventListener("keyup", function(e){   
    if(e.keyCode){
        search();   
    }
})