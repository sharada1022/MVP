import React,{useState} from "react";
 import "./Form.css";
  
function WorkoutForm(props){
    let [input, setInput] = useState({
      workout_name:"",
      day:"",
      hours:""
    });

    const handleChange =(event) => {
      let { name, value } = event.target;
      setInput(input => ({...input, [name]:value }));
      };

      // const handlehoursChange =(event) => {
      //   let data = input
      //   data.hours = event.target.value
      //   setInput(data)

      //   //setInput(event.target.value)
      // };
      // const handleexcerciseChange =(event) => {

      //   let data = input
      //   data.exercise_name = event.target.value
      //   setInput(data)

      //  // setInput(event.target.value)
      // };
           
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(input);
       
        props.submitCb(input)
      };


    return (
     
      <item>
    <div className = "Form">   

       <form onSubmit={e => handleSubmit(e)}>
             <table><tr><td>
             <label>
               Name: </label></td><td>
               <input name = "workout_name" onChange = {e => handleChange(e)}/>
              </td></tr><tr><td>
             <label>
               Hours: 
               </label></td><td>
               <input name = "hours" onChange = {e => handleChange(e)}/>
               </td></tr><tr><td>
             <label>
               Date: 
               </label></td><td>
               <input name = "day" type="date" onChange = {e => handleChange(e)}/>
               </td></tr></table>
           <button type="submit">Submit</button>
           
        </form>

    </div>
    </item>
    )};

   

    export default WorkoutForm;