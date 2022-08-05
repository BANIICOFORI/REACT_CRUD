import React,{ useState } from "react";
  import {Button,Form }from "react-bootstrap";


 function EditUserForm(props) {

    const [name,setName]= useState(props.userInfo.name);
    const [email,setEmail]= useState(props.userInfo.email);
    const [gen,setGen]= useState(props.userInfo.gen);


   

    const handleSubmit =(e)=>{
      e.preventDefault();
      props.updateUser(props.userInfo.id,{name,email,gen});
      setName("");
      setEmail("");
      setGen("");
      props.hide();
  };
        
  return (
    <Form>  
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name"
         placeholder="Enter your name"
         value={name} 
         onChange={(e) => {
            setName(e.target.value);
         }}
         />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email"
         placeholder="Enter your email"
         value={email} 
         onChange={(e) => {
            setEmail(e.target.value);
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
       
      <Button onClick={handleSubmit} variant="primary" type="submit">
        Update
      </Button>
    </Form>

  );
}
export default EditUserForm;