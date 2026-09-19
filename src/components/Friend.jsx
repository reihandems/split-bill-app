export default function Friend({ friend }) {
    
    return (
      <>
        <div className="flex gap-4 my-2 bg-zinc-900 p-6 rounded-xl items-center justify-center w-auto sm:w-120 flex-wrap">
          <div className="avatar">
            <div className="w-14 rounded-full">
              <img
                alt="Tailwind-CSS-Avatar-component"
                src={friend.image}
              />
            </div>
            </div>
            
            <div className="flex flex-col gap-1">
                <div className="name">
                    {friend.name}
                </div>
                <div className="balance">
                    {friend.balance < 0 && (
                        <p className="text-rose-500">You have Rp.{friend.balance} debt to {friend.name}</p>
                    )}
                    {friend.balance > 0 && (
                            <p className="text-green-500">{friend.name} owe you {friend.balance}</p>
                    )}
                    {friend.balance === 0 && (
                        <p className="text-gray-500">You and {friend.name} are cool</p>
                    )}
                </div>
            </div>
                
            <div className="btn w-full sm:w-auto">Select</div>
        </div>
      </>
    );
}