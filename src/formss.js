import React, { Component } from 'react';
import './App.css';
class form1 extends Component {
    state={
        
        firstname:"",
        lastname:"",
        email:"",
        age:""
    };
    change=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            firstname:"",
            lastname:"",
            email:"",
            age:""
        })
       /* const { firstname,lastname,email,age } = this.state;*/
      /*  alert("Signed up with firstname: ${firstname} lastname: ${lastname} email:${email} age:${age}");*/
    }
    onKeyUp=(target,e)=>{
    
     if(e.keyCode===13){
       switch(target)
       {
           case 'firstname':
           this.lastname.focus();
           break;
           case 'lastname':
           this.age.focus();
           break;
           case 'age':
           this.submit.focus();
           break;
           default :
           this.firstname.focus();

       }
     }
    }

    render() {
        return (
            <div className="forms">
                <form >
                    <input name="firstname" className="details"
                    value={this.state.firstname}
                    placeholder="FirstName"
                    onChange={e=>this.change(e)} 
                    ref={(input)=>{this.firstname=input}}
                    onKeyUp={this.onKeyUp.bind(this,'firstname')}
                    /><br/><br/>

                     <input name="lastname" className="details"
                    value={this.state.lastname}
                    placeholder="LastName"
                    onChange={e=>this.change(e)} 
                    ref={(input)=>{this.lastname=input}}
                    onKeyUp={this.onKeyUp.bind(this,'lastname')}
                     
                    /><br/><br/>
                     <input name="email" className="details"
                    value={this.state.email}
                    placeholder="Email"
                    onChange={e=>this.change(e)} 
                    ref={(input)=>{this.email=input}}
                    onKeyUp={this.onKeyUp.bind(this,'email')}
                    
                    /><br/><br/>
                     <input name="age" className="details"
                    value={this.state.age}
                    placeholder="Age"
                    onChange={e=>this.change(e)}
                    ref={(input)=>{this.age=input}}
                    onKeyUp={this.onKeyUp.bind(this,'age')}
                    /><br/><br/>
                    <button onClick={e=>this.onSubmit(e)} className="details"
                           ref={(input)=>{this.submit=input}}      
                           onKeyUp={this.onKeyUp.bind(this,'submit')}                           
                    >Submit</button>
                </form>
            </div>
        );
    }
}

export default form1;