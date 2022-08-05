import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { Row, Col, Container } from "react-bootstrap";
import { useState } from "react";
import Allusers from "./Components/Allusers";

import AddUsersForm from "./Components/AddUsersForm";

function App() {
  const [users, setUsers] = useState([
    {
      name: "Nicholas Ofori Boadi",
      email: "baniicofori@gmail.com",
      gen: "22",
      id: "udiue9893e03-kked",
    },
    {
      name: "Herbert Ofori Boadi",
      email: "herberto@gmail.com",
      gen: "2",
      id: "edjjdjdjdjdkskw",
    },
    {
      name: "Humphrey Dwamena Boadi",
      email: "humphrey@gmail.com",
      gen: "40",
      id: "uuueiriedm003wwsw",
    },
  ]);

  const AddNewUser = (user) => {
    user.id = Math.random().toString(36);
    setUsers([...users, { name: user.name, email: user.email, gen: user.gen }]);
    console.log(user);
  };
   
  const handleUpdate=(id,updateInfo)=>{
    setUsers(
        users.map((user)=>{
          if(user.id===id){
            return updateInfo;
          }
          return user; 
        })

    );
  };
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  return (
    <>
      <Container>
        <Row>
          <Col md={3}>
            <AddUsersForm newUser={AddNewUser} />
          </Col>
          <Col>
            <Allusers 
            userData={users} 
            deleteUser={deleteUser} 
            updateUser={handleUpdate}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
