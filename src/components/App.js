import { useEffect, useState } from "react";
import { DataGrid, PostGrid } from "./index";

function App() {
  const [toggle, setToggle] = useState({
    user: true,
    posts: false,
  });
  useEffect(() => {}, [toggle]);
  // console.log(toggle.posts);
  return (
    <div className="App">
      <button onClick={() => setToggle({ user: true, posts: false })}>
        Users
      </button>
      <button onClick={() => setToggle({ user: false, posts: true })}>
        Posts
      </button>
      {toggle.user && <DataGrid />}
      {toggle.posts && <PostGrid />}
    </div>
  );
}

export default App;
