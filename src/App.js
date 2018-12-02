import React, { Component } from 'react';
import './App.css';

const person=(props)=>{
     return ( <div>
              <h1>{props.name}</h1>
              <h1>{props.phonenumber}</h1>
              <h1>{props.address}</h1></div>
     )
}
 


class App extends Component {
state={
  persons: [{
  name:"MADHU",
   phonenumber:+919848660124,
   address:'162 SONORA AVE'}]
};


UserInformation=(newname,newphonenumber,newaddress)=>{
  
  this.setState({persons: [...this.state.persons,{
    name:newname,
    phonenumber:newphonenumber,
    address:newaddress
  }]});
  console.log(this.state);
}
  render() {
    return (
      <div className="App">
      <br/>
      <div className="App-header">
       <person/>
       {
         this.state.persons.map((user)=>{
           return (<person user={user.name}/>,<person user={user.phonenumber}/>,<person user={user.address}/>);
         })
       }
      <span>{this.state.persons[0].name}</span><br/>
      <span>{this.state.persons[0].phonenumber}</span><br/>
      <span>{this.state.persons[0].address}</span><br/>
      <span className="App-link"><hr/></span> 
      <button onClick={()=>this.UserInformation('SURESH',+919030144238,'23 GENEVA CT')}>Hello</button>
      <button onClick={this.UserInformation}>Hello</button>
      </div>
     
      <br/>
      </div>
    );
  }
}

export default App;
