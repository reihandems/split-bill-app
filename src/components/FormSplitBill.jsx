import { useState } from "react";

export default function FormSplitBill({ friend, handleSelect, selected, handleSplitBill }) {
  // const isSelected = selected?.id === friend.id;

  const [amount, setAmount] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const [whoIsPay, setWhoIsPay] = useState("user");
  const friendExpense = amount && amount - myExpense;

  function handleSubmit() {
    if (!amount || !myExpense) return;
    handleSplitBill(whoIsPay === "user" ? friendExpense : -myExpense)
  }

  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn mt-3 w-full sm:w-auto"
        onClick={() => {
          document.getElementById("form_split").showModal();
          handleSelect(friend);
        }}
      >
        Select
      </button>
      <dialog id="form_split" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="text-xl font-bold">
            Split Bill with {selected.name}
          </div>
          <div className="divider my-2"></div>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Total Bill</legend>
            <input
              type="text"
              className="input w-full"
              placeholder="Ex: Rp. 100.000"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Your Expense</legend>
            <input
              type="text"
              className="input w-full"
              placeholder="Ex: Rp. 50.000"
              value={myExpense}
              onChange={(e) => setMyExpense(e.target.value)}
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              {selected.name}'s Expense
            </legend>
            <input
              type="text"
              className="input w-full"
              placeholder="Automatic fill"
              disabled
              value={friendExpense}
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Who Pays?</legend>
            <select
              className="select w-full"
              value={whoIsPay}
              onChange={(e) => setWhoIsPay(e.target.value)}
            >
              <option disabled={true}>Choose who pays for the bill</option>
              <option value="user">You</option>
              <option value="friend">{selected.name}</option>
            </select>
          </fieldset>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <div className="flex gap-2">
                <button className="btn bg-black" onClick={handleSubmit}>Save</button>
                <button className="btn">Close</button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}