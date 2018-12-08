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


    render() {
        return (
            <div className="forms">
                <form >
                    <input name="firstname" className="details"
                    value={this.state.firstname}
                    placeholder="FirstName"
                    onChange={e=>this.change(e)} required
                    /><br/><br/>
                     <input name="lastname" className="details"
                    value={this.state.lastname}
                    placeholder="LastName"
                    onChange={e=>this.change(e)} required
                    /><br/><br/>
                     <input name="email" className="details"
                    value={this.state.email}
                    placeholder="Email"
                    onChange={e=>this.change(e)} required
                    /><br/><br/>
                     <input name="age" className="details"
                    value={this.state.age}
                    placeholder="Age"
                    onChange={e=>this.change(e)} required
                    /><br/><br/>
                    <button onClick={e=>this.onSubmit(e)} className="details">Submit</button>
                </form>
            </div>
        );
    }
}

export default form1;