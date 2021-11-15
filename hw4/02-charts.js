let backgroundColors = [
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(255, 99, 132, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)',
  'rgba(199, 199, 199, 0.8)',
  'rgba(83, 102, 255, 0.8)',
  'rgba(40, 159, 64, 0.8)',
  'rgba(210, 199, 199, 0.8)',
  'rgba(78, 52, 199, 0.8)',
];

let borderColors = [
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(255, 99, 132, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(159, 159, 159, 1)',
  'rgba(83, 102, 255, 1)',
  'rgba(40, 159, 64, 1)',
  'rgba(210, 199, 199, 1)',
  'rgba(78, 52, 199, 1)',
];

// URL to Game of Thrones API to fetch all characters
let url = 'https://thronesapi.com/api/v2/Characters';

let throneLabels = [1,2];
//console.log("throneLabels: ", throneLabels);
let throneData = [];


const findOcc = (charactersArr, key) =>{
  let familyArr = [];
    
  charactersArr.forEach((x)=>{
    if(x.family === "" || x.family === "Unkown" || x.family === "Unknown"){
      x.family = x.family.replace(x.family,"None")
    }
    if(familyArr.some((val)=>{ return val[key].includes(`${x[key]}`)})){
      familyArr.forEach((k)=>{
        if(k[key].includes(`${x[key]}`) && x[key] !== "" ){
          k["occurrence"]++;    
        }
      })  
    }else{
      let a = {}
      a[key] = x[key]
      a["occurrence"] = 1
      familyArr.push(a);
    }
  })
    
  return familyArr
}

let renderChart = (labelArr, dataArr) => {
  let donutChart = document.getElementById('donut-chart');
  //let labelArr = ['label', 'label', 'label', 'label', 'label'];
  //let dataArr = [1, 12, 33, 5, 11];
  new Chart(donutChart, {
    type: 'doughnut',
    data: {
      labels: labelArr,
      datasets: [
        {
          label: 'My First Dataset',
          data: dataArr,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    },
  });
};

const fetchData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) =>{
      console.log("length of data: ", data.length);
      console.log(data);
      let key = "family";
      let labelArr = [];
      let dataArr = [];
      familyArr = (findOcc(data, key));
      //console.log(familyArr);
      familyArr.forEach((result)=>{
        //console.log(result);
        console.log(result.family, result.occurrence);
        if(result.occurrence >= 2){
          if(result.family.includes("House") == false && result.family !== "None"){
            result.family = result.family.replace(result.family, `House ${result.family}`)
          }
          labelArr.push(result.family);
          dataArr.push(result.occurrence);
        }
      });

      renderChart(labelArr, dataArr);
        
    })
    .catch((error) => {
        console.log(error);
        let element = document.createElement('div');
        element.textContent = 'An error occured. Please try again.';
        app.append(element);
    })

    .finally(()=>{
    });
};
fetchData(url);
//renderChart();
