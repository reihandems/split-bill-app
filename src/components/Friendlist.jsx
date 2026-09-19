import Friend from "./Friend"

export default function Friendlist({ friends }) {
    return (
        <>
            {friends.map((friend) => (
                <Friend friend={friend} key={friend.id} />
            ))}
        </>
    )
}