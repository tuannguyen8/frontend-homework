// Enter your code here

console.log('Enter your code here');
let form = document.querySelector('.btn-info');
let reset = document.querySelector('.btn-secondary');
form.addEventListener('click', handleSubmit);
reset.addEventListener('click', resetBtn);

function resetBtn(event){
    let count = document.querySelectorAll('.result-div').length;
    let removeDiv = document.querySelector('.result-div');
    document.querySelector("#comments").value = "";
    if(count > 0){
        removeDiv.remove();
    }   
    event.preventDefault();
}

function handleSubmit(event){   
    let count = document.querySelectorAll('.result-div').length;
    let link = document.querySelector("#comments").value;
    if(count == 0 && link != " "){
        let cutting = link.split('?');
        let url = cutting[0];
        let app = document.querySelector('.bg-info');
        const newDiv = document.createElement("div");
        newDiv.classList.add('result-div','bg-light','border','rounded','w-50','mx-auto','mt-5','p-3');
        app.appendChild(newDiv);

        const result = document.createElement("h1");
        result.innerHTML = "Result";
        newDiv.appendChild(result);
        
        const urlResult = document.createElement("h4");
        urlResult.innerHTML = "URL";
        newDiv.appendChild(urlResult);
        
        const urlReturn = document.createElement("h6");
        urlReturn.innerHTML = `${url}`;
        newDiv.appendChild(urlReturn);

        if(cutting.length > 1){
            const parameters = document.createElement("h4");
            parameters.innerHTML = "Query Parameters";
            newDiv.appendChild(parameters);
            let info = cutting[1];
            let pieceOfInfo = info.split('&');

            console.log(url);
            for(let piece of pieceOfInfo){
                let details = piece.split('=');
                let title = details[0];
                let titleInfo = decodeURIComponent(details[1]);
                console.log(decodeURIComponent(`${titleInfo}`));
                let resultInfo = document.createElement("div");
                resultInfo.innerHTML = `${title}: ${titleInfo}`;
                newDiv.appendChild(resultInfo);
            }
        }
    }
    if(count != 0){
        let removeDiv = document.querySelector('.result-div');
        removeDiv.remove();

        let link = document.querySelector("#comments").value;
        console.log(link);
        let cutting = link.split('?')
        let url = cutting[0];

        let app = document.querySelector('.bg-info');
        const newDiv = document.createElement("div");
        newDiv.classList.add('result-div','bg-light','border','rounded','w-50','mx-auto','mt-5','p-3');
        app.appendChild(newDiv);
        
        const result = document.createElement("h1");
        result.innerHTML = "Result";

        newDiv.appendChild(result);
        
        const urlResult = document.createElement("h4");
        urlResult.innerHTML = "URL";
        newDiv.appendChild(urlResult);
        
        const urlReturn = document.createElement("h6");
        urlReturn.innerHTML = `${url}`;
        newDiv.appendChild(urlReturn);

        if(cutting.length > 1){
            const parameters = document.createElement("h4");
            parameters.innerHTML = "Query Parameters";
            newDiv.appendChild(parameters);
            let info = cutting[1];
            let pieceOfInfo = info.split('&');
            console.log(url);
            for(let piece of pieceOfInfo){
                let details = piece.split('=');
                let title = details[0];
                let titleInfo = decodeURIComponent(details[1]);
                console.log(decodeURIComponent(`${titleInfo}`));
                let resultInfo = document.createElement("div");
                resultInfo.innerHTML = `${title}: ${titleInfo}`;
                newDiv.appendChild(resultInfo);
            }
        }
    }
    event.preventDefault();
}

console.log(url);

// Test Input #1:
// http://www.example.com

// Test Output
// http://www.example.com

// Test Input #2:
// http://www.example.com?name=r2d2

// Output
// http://www.example.com
// name: r2d2

// Test Input #3:
// http://www.example.com?name=r2d2&email=r2d2%40me.com&human=no

// Output
// http://www.example.com
// name: r2d2
// email: r2d2@me.com
// human: no
