import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState("");

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
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}

export default App;
