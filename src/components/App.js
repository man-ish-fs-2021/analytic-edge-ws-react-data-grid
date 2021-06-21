import { useEffect, useState } from "react";
import { DataGrid, PostGrid, CommentsGrid } from "./index";

function App() {
  const [toggle, setToggle] = useState({
    user: true,
    posts: false,
    comments: false,
  });
  useEffect(() => {}, [toggle]);
  // console.log(toggle.posts);
  return (
    <div className="App">
      <button
        onClick={() => setToggle({ user: true, posts: false, comments: false })}
      >
        Users
      </button>
      <button
        onClick={() => setToggle({ user: false, posts: true, comments: false })}
      >
        Posts
      </button>
      <button
        onClick={() => setToggle({ user: false, posts: false, comments: true })}
      >
        Comments
      </button>
      {toggle.user && <DataGrid />}
      {toggle.posts && <PostGrid />}
      {toggle.comments && <CommentsGrid />}
    </div>
  );
}

export default App;
