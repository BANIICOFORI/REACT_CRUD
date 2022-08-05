import React,{ useState } from "react";
import Button from "react-bootstrap/Button";
import Form from"react-bootstrap/Form";


 function AddUsersForm(props) {
    const [name,setName]= useState(" ");
    const [email,setEmail]= useState(" ");
    const [gen,setGen]= useState(" ");


   

    const handleSubmit =(e)=>{
      e.preventDefault();
      props.newUser({name,email,gen});
      setName("");
      setEmail("");
      setGen("");
  };
        
  return (
    <Form>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name"
         placeholder="Enter your name"
         value={name} 
         onChange={(e) => {
            setName(e.target.value)
         }}
         />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email"
         placeholder="Enter your email"
         value={email} 
         onChange={(e) => {
            setEmail(e.target.value)
         }}
         />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Gen</Form.Label>
        <Form.Control type="gen"
         placeholder="Enter your gen"
         value={gen} 
         onChange={(e) => {
            setGen(e.target.value)
         }}
         />
      </Form.Group>
       
      <Button onClick={handleSubmit} variant="primary" type="submit">Submit</Button>
    </Form>

  );
}
export default AddUsersForm;