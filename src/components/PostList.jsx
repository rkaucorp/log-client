import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CreateIcon from "@mui/icons-material/Create";
import UpdatePostModal from "./UpdatePostModal";
import useLog from "../store/context";
import { store } from "../store/store";

export default function PostList() {
  const {
    state: { postList, userName },
  } = React.useContext(store);
  const { getPostList } = useLog();
  const [open, setOpen] = React.useState(false);
  const [selectedPost, setSelectedPost] = React.useState({});

  React.useEffect(() => {
    async function fetchPostList() {
      await getPostList();
    }
    fetchPostList();
  }, []);
  const handleEdit = (post) => {
    setSelectedPost(post);
    setOpen(true);
  };
  return (
    <List sx={{ width: "100%" }} aria-label="contacts">
      {open && (
        <UpdatePostModal open={open} setOpen={setOpen} post={selectedPost} />
      )}
      {postList.length > 0
        ? postList.map((post, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{ bgcolor: "#A4A4A4", marginBottom: "5px" }}
            >
              <ListItemButton>
                <ListItemText primary={post?.logName} />
                {userName && (
                  <ListItemIcon
                    onClick={() => {
                      handleEdit(post);
                    }}
                  >
                    <CreateIcon />
                  </ListItemIcon>
                )}
              </ListItemButton>
            </ListItem>
          ))
        : "Nothing Found"}
    </List>
  );
}
