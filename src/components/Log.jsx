import * as React from "react";
import moment from "moment";
import { styled } from "@mui/material/styles";
import { store } from "../store/store";
import useLog from "../store/context";

const LogContainer = styled("div")(({ theme }) => ({
  backgroundColor: "#F4F5F5",
  padding: "15px",
}));

const Title = styled("div")(() => ({
  color: "#A4A4A4",
  fontSize: "21px",
}));

const Result = styled("div")(() => ({
  color: "#000000",
  fontSize: "16px",
}));

function Log({ postID }) {
  const {
    state: { logs },
  } = React.useContext(store);
  const { getLogList } = useLog();

  React.useEffect(() => {
    async function fetchLog() {
      await getLogList(postID);
    }
    fetchLog();
  }, [postID]);
  return (
    <LogContainer>
      <Title>Audit Log:</Title>
      <hr />

      {logs.map((log, index) => (
        <Result key={index}>
          {log?.updatedAt ? "Updated" : "Created"} By {log?.userName} on{" "}
          {moment(log?.updatedAt ? log?.updatedAt : log?.createdAt).format("l")}
          ,&nbsp;
          {moment(log?.updatedAt ? log?.updatedAt : log?.createdAt).format(
            "LTS"
          )}
        </Result>
      ))}
    </LogContainer>
  );
}

export default Log;
