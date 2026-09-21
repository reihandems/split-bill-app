import { useState } from "react";

import FriendsData from "./friends.json"

import Friendlist from "./components/Friendlist";
import FormAddFriend from "./components/FormAddFriend";

function App() {
  const [friends, setFriends] = useState(FriendsData)
  const [selectedFriend, setSelectedFriend] = useState({})

  function handleAddFriend(friend) {
    setFriends(() => [...friends, friend])
  }

  function handleSelect(friend) {
    setSelectedFriend(friend);
  }

  function handleSplitBill(value) {
    setFriends(
      friends.map((friend) => {
        if (friend.id === selectedFriend?.id) {
          return {
            ...friend,
            balance: friend.balance + value
          }
        }

        return friend;
      })
    )
  }
  return (
    <>
      <div className="font-mono max-w-xl mx-auto mt-12 p-8 shadow-sm/15 rounded-t-2xl sm:rounded-2xl bg-neutral-800">
        <div className="text-4xl font-bold mb-5 text-center">
          Split Bill App
        </div>
        <Friendlist
          friends={friends}
          handleSelect={handleSelect}
          selected={selectedFriend}
          handleSplitBill={handleSplitBill}
        />
        <FormAddFriend handleAddFriend={handleAddFriend} />
      </div>
    </>
  );
}

export default App
