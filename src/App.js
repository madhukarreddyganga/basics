import React, { Component} from 'react';
import './App.css';
import Person from './Components/user';
import Form1 from './formss'
class App extends Component {

state={
  persons: [{
  name:"MADHU",
   phonenumber:9848660124,
   address:'162 SONORA AVE',
  age: 28},
],
fields:{}
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
onSubmit =(fields)=>{
this.setState({
  fields
});
};
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
      <button className="details"
      onClick={()=>this.UserInformation('SURESH',+919030144238,'23 GENEVA CT',this.state.persons[0].age>60 ? 
      'Older':(this.state.persons[0].age>30? 'abc': 'MIDDLEAGE'))}>Hello</button>&nbsp;
      {/*ex:this.state.persons[0].age ? 'younger':'older' */}
      
      <button className="details"
      onClick={()=>this.UserInformation('SRAVAN',+919393360127,'501 E KING DRIVE',this.state.persons[0].age<60 ?
       (this.state.persons[0].age<30? 'TEENAGE': 'FIND A JOB'):'YOUTH') }>Hello</button><br/>
       
       <Form1 onSubmit={fields=>this.onSubmit(fields)}/><br/>
       
       <div className="changes">
       <fieldset>
       <span >{JSON.stringify(this.state.fields,null,2)}</span></fieldset>
       </div>
      </div>
    );
  }
}
  
export default App;