import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../actions/posts";
// import { fetchUsers } from "../actions/users";
import { PostsTable, Pagination } from "./index";

function PostGrid() {
  const dispatch = useDispatch();
  const isFetching = useSelector((state) => state.Posts.isFetching);
  const posts = useSelector((state) => state.Posts.posts);
  console.log("posts def", posts);

  const [displayedData, setDisplayedData] = useState(posts.slice(0, 5));
  const [isDisplayedData, setIsDisplayedData] = useState(false);
  const itemsPerPage = 5;
  const allPages = Math.ceil(posts.length / itemsPerPage);
  console.log(isDisplayedData);
  const onPageChange = (page) => {
    const startItem = (page - 1) * itemsPerPage;
    const endItem = page * itemsPerPage;
    setDisplayedData(posts.slice(startItem, endItem));
  };
  //   dispatch(fetchUsers());
  useEffect(() => {
    dispatch(fetchPosts());
  }, [displayedData, dispatch]);

  console.log("dis", displayedData);
  return (
    <>
      {isFetching ? (
        <div>Loading</div>
      ) : (
        <div>
          <PostsTable
            posts={isDisplayedData ? displayedData : posts.slice(0, 5)}
          />{" "}
        </div>
      )}
      <Pagination
        allPagesNumber={allPages}
        itemsPerPage={5}
        itemsNumber={posts.length}
        pageChange={onPageChange}
        dataDisplayed={setIsDisplayedData}
      />
    </>
  );
}

export default PostGrid;
