import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    axios.post("/users").then((res) => {
      if (res.data) {
        console.log(res.data);
        setUser(res.data);
      } else {
        alert("failed to");
      }
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>{user.id}</h1>
        <h1>{user.username}</h1>
        <h1>{user.password}</h1>
        <h1>{user.email}</h1>
      </header>
    </div>
  );
};

export default Home;
