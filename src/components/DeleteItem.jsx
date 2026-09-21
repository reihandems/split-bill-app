export default function DeleteItem({ friend, handleSelect, onDeleteItem }) {

    return (
      <>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn btn-error btn-soft"
                onClick={() => {
                    document.getElementById("deleteItem").showModal();
                    handleSelect(friend)
                }}
        >
          ❌
        </button>
        <dialog id="deleteItem" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-2xl">Delete Item</h3>
            <div className="divider"></div>
            <p>Are you sure you want to delete this item?</p>
            <div className="modal-action">
              <form method="dialog" className="flex gap-2">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-error btn-soft" onClick={onDeleteItem}>Delete</button>
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </>
    );
}