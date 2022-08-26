import { useState } from "react";
import "./App.css";
import { database } from "./firestorelogic.js";
import { ref, set } from "firebase/database";
// import { push } from "firebase/database";
// push method create its own primary key
// set method you will have to give primary key
function App() {
  const [data, setData] = useState({
    roll: "",
    name: "",
    address: "",
  });
  const postUserData = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setData({ ...data, [name]: value });
  };
  const submitData = () => {
    const dbref = ref(database, `users/${data.roll}`);
    set(dbref, data);
  };
  // const submitData = () => {
  //   const dbref = ref(database,"users/")
  //   push(dbref,data) // data in final state

  // };
  return (
    <div className="main">
      <div className="maindiv">
        <input
          name="roll"
          type={"number"}
          placeholder="Roll number"
          value={data.roll}
          onChange={postUserData}
        ></input>
        <input
          name="name"
          type={"text"}
          placeholder="Name"
          value={data.name}
          onChange={postUserData}
        ></input>
        <input
          name="address"
          type={"text"}
          placeholder="Address"
          value={data.address}
          onChange={postUserData}
        ></input>
        <button onClick={submitData}>submit</button>
      </div>
    </div>
  );
}

export default App;
