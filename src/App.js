import React, { Component} from 'react';
import './App.css';
import Person from './Components/user';

class App extends Component {

state={
  persons: [{
  name:"MADHU",
   phonenumber:9848660124,
   address:'162 SONORA AVE',
  age: 28},
 /* {
    name:"MAHI",
     phonenumber:9848550325,
     address:'182 SONORA AVE',
    age: 45},
    {
      name:"MADHUSUDHAN",
       phonenumber:9848582356,
       address:'190 DUMBER DR',
      age: 36},
      {
        name:"GOVARDHAN",
         phonenumber:9393360128,
         address:'110 DUMBER DR',
        age: 58},*/
  ]
};



UserInformation=(newname,newphonenumber,newaddress,newage)=>{
  
  this.setState({persons: [...this.state.persons,{
    name:newname,
    phonenumber:newphonenumber,
    address:newaddress,
    age:newage
  }]});
  console.log(this.state);
}
  render() {
    return (
      <div className="App">
      <br/>
      <div className="App-header">
       
       {
         this.state.persons.map((user)=>{
           return (<Person name={user.name}
            phonenumber={user.phonenumber} 
            address={user.address} age={user.age}/>);
         })
       }
     </div>
      
      <button 
      onClick={()=>this.UserInformation('SURESH',+919030144238,'23 GENEVA CT',this.state.persons[0].age>60 ? 'YOUNGER':'OLDER')}>Hello</button><br/>
      {/*ex:this.state.persons[0].age ? 'younger':'older' */}
      <button 
      onClick={()=>this.UserInformation('SRAVAN',+919393360127,'501 E KING DRIVE',this.state.persons[0].age<60 ? 'YOUNGER':'OLDER') }>Hello</button><br/>
      
      </div>
     
      
      
    );
  }
}
  
export default App;