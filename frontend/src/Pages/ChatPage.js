import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from "../Components/ChatBox.js";
import MyChats from "../Components/MyChats.js";
import SideDrawer from "../Components/miscellaneous/SideDrawer.js";
import { ChatState } from "../Context/chatProvider.js";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box display="flex" justifyContent="space-between" w="100vw" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;
