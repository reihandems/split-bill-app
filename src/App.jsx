import { useState } from "react";

import FriendsData from "./friends.json"

import Friendlist from "./components/Friendlist";
import FormAddFriend from "./components/FormAddFriend";

function App() {
  const [newFriend, setNewFriend] = useState(FriendsData)
  const friends = FriendsData;

  function handleAddFriend(friend) {
    setNewFriend((newFriend) => [...newFriend, friend])
  }

  return (
    <>
      <div className="font-mono flex flex-col items-center justify-center min-h-screen p-8">
        <div className="text-4xl font-bold mb-5 text-center">
          Split Bill App
        </div>
        <Friendlist friends={friends} />
        <FormAddFriend handleAddFriend={handleAddFriend} newFriend={newFriend} />
      </div>
    </>
  );
}

export default App
