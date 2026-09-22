import Friend from "./Friend"

export default function Friendlist({ friends, handleSelect, selected, handleSplitBill, onDeleteItem }) {
  
  return (
    <>
      {friends.length === 0 ? (
        <div className="flex gap-4 my-2 bg-zinc-900 p-6 rounded-xl items-center justify-between w-auto sm:w-full flex-wrap">
          No data available.
          <br />{" "}
          <span className="text-gray-600">
            Add new friend to start split-bill
          </span>
        </div>
      ) : (
        friends.map((friend) => (
          <Friend
            friend={friend}
            key={friend.id}
            handleSelect={handleSelect}
            selected={selected}
            handleSplitBill={handleSplitBill}
            onDeleteItem={onDeleteItem}
          />
        ))
      )}
    </>
  );
}