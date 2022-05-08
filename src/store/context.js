import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { store } from "./store";
import axios from "axios";
const useLog = () => {
  const { dispatch } = useContext(store);
  const setLogs = (item) => {
    dispatch({ type: "SET_LOGS", payload: item });
  };

  const setPosts = (item) => {
    dispatch({ type: "SET_POST", payload: item });
  };
  const setUserName = (name) => {
    dispatch({ type: "SET_USER_NAME", payload: name });
  };

  const storeSingleLog = (arr) => {
    setLogs(arr);
  };

  const createPost = async (payload) => {
    try {
      const data = { ...payload, postID: uuidv4() };
      await axios({
        method: "POST",
        url: `${process.env.REACT_APP_END_POINT}/posts`,
        data,
      });
      await getPostList();
      return true;
    } catch (error) {
      console.log("error", error);
      return false;
    }
  };

  const updatePostInfo = async (payload) => {
    try {
      const data = { ...payload };
      await axios({
        method: "PUT",
        url: `${process.env.REACT_APP_END_POINT}/posts`,
        data,
      });
      await getPostList();
      return true;
    } catch (error) {
      console.log("error", error);
      return false;
    }
  };

  const getPostList = async () => {
    try {
      let result = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_END_POINT}/posts`,
      });
      if (result) {
        setPosts(result.data?.Items);
      }
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  const getLogList = async (id) => {
    try {
      let result = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_END_POINT}/logs/${id}`,
      });
      if (result) {
        setLogs(result.data?.Items);
      }
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  return {
    setLogs,
    storeSingleLog,
    setUserName,
    setPosts,
    getPostList,
    createPost,
    updatePostInfo,
    getLogList,
  };
};

export default useLog;
