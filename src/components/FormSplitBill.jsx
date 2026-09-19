export default function FormSplitBill() {
    return (
      <>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn mt-3 w-full sm:w-auto"
          onClick={() => document.getElementById("form_add").showModal()}
        >
          Select
        </button>
        <dialog id="form_add" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <div className="text-xl font-bold">Split Bill with X</div>
            <div className="divider my-2"></div>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Total Bill</legend>
              <input
                type="text"
                className="input w-full"
                placeholder="Ex: Rp. 100.000"
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Your Expense</legend>
              <input
                type="text"
                className="input w-full"
                placeholder="Ex: Rp. 50.000"
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">X's Expense</legend>
              <input
                type="text"
                className="input w-full"
                placeholder="Automatic fill"
                readOnly
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Who Pays?</legend>
              <select defaultValue="Pick a browser" className="select w-full">
                <option disabled={true}>Choose who pays for the bill</option>
                <option>You</option>
                <option>X</option>
              </select>
            </fieldset>

            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <div className="flex gap-2">
                  <button className="btn bg-black">Save</button>
                  <button className="btn">Close</button>
                </div>
              </form>
            </div>
          </div>
        </dialog>
      </>
    );
}