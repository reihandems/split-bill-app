import Friend from "./Friend"

export default function Friendlist({ friends, handleSplitBill, selected }) {
    return (
        <>
            {friends.map((friend) => (
                <Friend friend={friend} key={friend.id} handleSplitBill={handleSplitBill} selected={selected} />
            ))}
        </>
    )
}