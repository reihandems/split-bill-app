import FormSplitBill from "./FormSplitBill";
import DeleteItem from "./DeleteItem";

export default function Friend({ friend, handleSelect, selected, handleSplitBill, onDeleteItem }) {

  return (
    <>
      <div className="flex gap-4 my-2 bg-zinc-900 p-6 rounded-xl items-center justify-between w-auto sm:w-full flex-wrap">
        <div className="flex gap-3">
          <div className="avatar">
            <div className="w-14 rounded-full">
              <img alt="Tailwind-CSS-Avatar-component" src={friend.image} />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="name">{friend.name}</div>
            <div className="balance">
              {friend.balance < 0 && (
                <p className="text-rose-500 wrap-break-words">
                  You have Rp {friend.balance.toLocaleString("id-ID")} debt to{" "}
                  {friend.name}
                </p>
              )}
              {friend.balance > 0 && (
                <p className="text-green-500 text-wrap">
                  {friend.name} owe you Rp{" "}
                  {friend.balance.toLocaleString("id-ID")}
                </p>
              )}
              {friend.balance === 0 && (
                <p className="text-gray-500">You and {friend.name} are cool</p>
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-2 items-center w-full sm:w-auto">
          <FormSplitBill
            handleSelect={handleSelect}
            friend={friend}
            selected={selected}
            handleSplitBill={handleSplitBill}
          />

          <DeleteItem friend={friend} onDeleteItem={onDeleteItem} handleSelect={handleSelect} />
        </div>
      </div>
    </>
  );
}