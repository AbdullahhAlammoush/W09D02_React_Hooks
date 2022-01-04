import React, { useState } from "react";
import "./App.css";

// export default function App() {
const App = () => {
  const [posts, setPosts] = useState(
    { userId: 8, id: 800, title: "YOU", body: "broken" },
    { userId: 6, id: 600, title: "life", body: "Wasted" }
  );
  const show = () => {
    console.log("results");

    setPosts(posts[0].userId);
  };

  return (
    <div className="App">
      <div>Blog app</div>
      <p>APP</p>
      {/* <p>{show()}</p> */}
      <button onClick={show}>any</button>
    </div>
  );
};
export default App;


// q5
