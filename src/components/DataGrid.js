import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../actions/users";
import { Table, Pagination } from "./index";

function DataGrid() {
  const isFetching = useSelector((state) => state.Users.isFetching);

  const users = useSelector((state) => state.Users.users);

  console.log("users def", users);
  const dispatch = useDispatch();

  const [displayedData, setDisplayedData] = useState();
  const [isDisplayedData, setIsDisplayedData] = useState(false);
  const itemsPerPage = 5;
  const allPages = Math.ceil(users.length / itemsPerPage);
  console.log(isDisplayedData);
  const onPageChange = (page) => {
    const startItem = (page - 1) * itemsPerPage;
    const endItem = page * itemsPerPage;
    setDisplayedData(users.slice(startItem, endItem));
  };
  //   dispatch(fetchUsers());
  useEffect(() => {
    dispatch(fetchUsers());
  }, [displayedData, dispatch]);

  console.log("dis", displayedData);
  return (
    <>
      {isFetching ? (
        <div>Loading</div>
      ) : (
        <div>
          <Table users={isDisplayedData ? displayedData : users.slice(0, 5)} />{" "}
        </div>
      )}
      <Pagination
        allPagesNumber={allPages}
        itemsPerPage={5}
        itemsNumber={users.length}
        pageChange={onPageChange}
        dataDisplayed={setIsDisplayedData}
      />
    </>
  );
}

export default DataGrid;
