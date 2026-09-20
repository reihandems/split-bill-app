import Friend from "./Friend"

export default function Friendlist({ friends, handleSelect, selected, handleSplitBill }) {
  return (
    <>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          handleSelect={handleSelect}
          selected={selected}
          handleSplitBill={handleSplitBill}
        />
      ))}
    </>
  );
}