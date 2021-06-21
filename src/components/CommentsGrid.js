import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CommentsTable, Pagination } from "./index";
import { fetchComments } from "../actions/comments";
function PostGrid() {
  const dispatch = useDispatch();
  const isFetching = useSelector((state) => state.Comments.isFetching);
  const comments = useSelector((state) => state.Comments.comments);
  console.log("comments def", comments);

  const [displayedData, setDisplayedData] = useState(comments.slice(0, 5));
  const [isDisplayedData, setIsDisplayedData] = useState(false);
  const itemsPerPage = 5;
  const allPages = Math.ceil(comments.length / itemsPerPage);
  console.log(isDisplayedData);
  const onPageChange = (page) => {
    const startItem = (page - 1) * itemsPerPage;
    const endItem = page * itemsPerPage;
    setDisplayedData(comments.slice(startItem, endItem));
  };
  //   dispatch(fetchUsers());
  useEffect(() => {
    dispatch(fetchComments());
  }, [displayedData, dispatch]);

  console.log("dis", displayedData);
  return (
    <>
      {isFetching ? (
        <div>Loading</div>
      ) : (
        <div>
          <CommentsTable
            comments={isDisplayedData ? displayedData : comments.slice(0, 5)}
          />{" "}
        </div>
      )}
      <Pagination
        allPagesNumber={allPages}
        itemsPerPage={5}
        itemsNumber={comments.length}
        pageChange={onPageChange}
        dataDisplayed={setIsDisplayedData}
      />
    </>
  );
}

export default PostGrid;
