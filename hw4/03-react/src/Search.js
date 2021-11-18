import React from 'react';
import { Component } from 'react';
//import { useEffect, useState } from 'react';
class SearchPage extends Component{
  
  constructor(props){
    super(props)
    this.state ={
      characterId: -1,
      data: {},
      tempCharacter: ""
      
    }
  }

  handleSubmit = (event)=>{
    event.preventDefault(); 

    let id = this.state.tempCharacter
    
    fetch(`https://thronesapi.com/api/v2/Characters/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({characterId: Number(id)})
        this.setState({data: data})
      })
      .catch(error => {
        console.log(error)
      });
  }


  handleChange =(event) =>{
    this.setState({
      tempCharacter: event.target.value
    })
  }

  render(){
    return (
      <div className="Content-Search">
        <h1>Thrones Characters</h1>
        <form onSubmit={ this.handleSubmit}>
          <label>
            Character ID:
          <input onChange={this.handleChange} type="number" value={this.state.tempCharacter} placeholder="Id of Chacracter" name = "characterId"/>
          </label>
          <button>Submit</button>
        </form> 
        {this.state.tempCharacter !== "" &&
          <div className="Card">
            <img src={this.state.data.imageUrl} alt="character-img"></img> 
            <div className="Character-Info">
              <p>Character id: {this.state.data.id}</p>
              <p>Full name: {this.state.data.fullName}</p>
              <p>Title: {this.state.data.title}</p>
            </div>
          </div>        
        }  
      </div>
    );
 }
  
}
export default SearchPage;