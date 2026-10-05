import {useState, useEffect } from "react";
function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) =>{
        setUsers(data);
      })
      .catch((error) => 
      {
        console.error("Error:", error);
      });
}, []);
return (
    <div>
      <h1>Users List</h1>
      {users.map(user => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          </div>

      ))}
    </div>
  );
}

export default App;
