import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

const HousesPage = () =>{
  const [chartData, setChartData] = useState({});
  const chart = () =>{
    
    fetch('https://thronesapi.com/api/v2/Characters')
    .then((response) => response.json())
    .then((data) =>{
      console.log("length of data: ", data.length);
      console.log(data);
      let key = "family";

      let familyArr = [];
    
      data.forEach((x)=>{
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
      let labelArr = [];
      let dataArr = [];
      console.log(familyArr);
      familyArr.forEach((result)=>{
        //console.log(result);
        console.log(result.family, result.occurrence);
        if(result.occurrence >= 2){
          if(result.family.includes("House") === false && result.family !== "None"){
            result.family = result.family.replace(result.family, `House ${result.family}`)
          }
          labelArr.push(result.family);
          dataArr.push(result.occurrence);
        }
      });

      setChartData({
        labels: labelArr,
        datasets:[
          {
            label: 'level of thiccness',
            data: dataArr,
            backgroundColor:[
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
            ]
          }
        ]
      }) 
    })
    .catch((error) => {
      console.log(error)
    })

  }
  useEffect(()=>{
    chart()
  },[])
  return (
    <div className='Content'>
      <h1>Character Houses </h1>
      <div>
        <Doughnut data = {chartData} />
      </div>
    </div>

  );
}
export default HousesPage;