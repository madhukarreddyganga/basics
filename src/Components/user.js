import React from 'react';

    const Person = (props) => {
      
        
        return (<div>
        <h1>{props.name}<br/>
            {props.phonenumber}<br/>
            {props.address}<br/>
            {props.age} </h1>
     </div>)
}
export default Person;
/*if (props.age>60) {
    return (<div>this.state.persons[0].age>60 ? 'Older':(this.state.persons[0].age>30? 'abc': 'younger')
        <h1>{props.name}<br/>
            {props.phonenumber}<br/>
            {props.address}<br/>
            {props.age}</h1>
     </div>)
}
elseif (props.age<60)
{
    return (<div>
        <h1>{props.name}<br/>
                   {props.phonenumber}<br/>
                   {props.address}<br/>
                  
                   
                   </h1><h2>  He is Middle Age:{props.age}</h2>
       </div>)
  }
  elseif (props.age>15)
  {
      return (<div>
          <h1>{props.name}<br/>
                     {props.phonenumber}<br/>
                     {props.address}<br/>
                    
                     
                     </h1><h2>  He is Teenager Age</h2>
         </div>)
    }
    elseif (props.age===60)
    {
        return (<div>
            <h1>{props.name}<br/>
                       {props.phonenumber}<br/>
                       {props.address}<br/>
                      
                       
                       </h1><h2>  He is Going to be VR</h2>
           </div>)
      }
    }
    else{
          return <div>Invalid Data</div>
    }*/
