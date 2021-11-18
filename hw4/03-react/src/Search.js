import React from 'react';
import { Component } from 'react';
//import { useEffect, useState } from 'react';
class SearchPage extends Component{
  
  constructor(props){
    super(props)
    this.state ={
      characterId: 41,
      data: []
      
    }
  }
  handleDelete = (event) =>{

  }
  handleSubmit = (event)=>{
    event.preventDefault(); 
    const{characterId} = this.state
    console.log("characterId: ", characterId)
    this.setState({characterId});
  }
  handleSubmitChange = (event)=>{
    event.preventDefault();
    /* console.log(event)*/
   /*  console.log("name event: ", event.target.name)
    console.log("value event: ",event.target.value) */ 
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  componentDidMount(){ 
    //let characterId = 2;
    const{characterId} = this.state
    console.log("alo: ",characterId)
    fetch(`https://thronesapi.com/api/v2/Characters/${characterId}`)
      .then(response => response.json())
      .then(data => {
        //console.log(data);
        this.setState({data})
      });
    
  }

  render(){
    
    const{characterId} = this.state
    const {data} = this.state;

    return (
      <div className="Content-Search">
        <h1>Thrones Characters</h1>
        <p>Character Id is: {characterId}</p>
        <form onSubmit={this.handleDelete, this.handleSubmit}>
          <label>
            Character ID:
            <input type="number" placeholder="Id of Chacracter" name = "characterId" onChange={this.handleSubmitChange}/>
          </label>
          <button>Submit</button>
        </form> 
        <div className="Card">
          <img src={data.imageUrl} alt="character-img"></img> 
          <div className="Character-Info">
            <p>Character id: {data.id}</p>
            <p>Full name: {data.fullName}</p>
            <p>Title: {data.title}</p>
          </div>
          
        </div>
        
        
      </div>
    );
 }
  
}
export default SearchPage;