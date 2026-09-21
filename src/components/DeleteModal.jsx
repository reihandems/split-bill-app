export default function DeleteModal({onDeleteAll}) {
    return (
      <>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn btn-soft btn-error"
          onClick={() => document.getElementById("deleteModal").showModal()}
        >
          Delete All
        </button>
        
        <dialog id="deleteModal" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-2xl">Delete</h3>
            <div className="divider"></div>
            
            <p className="">
              Are you sure you want to delete all friends data?
            </p>
            <div className="modal-action">
              <form method="dialog" className="flex gap-2">
                <button className="btn btn-soft btn-error" onClick={onDeleteAll}>Delete All</button>
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </>
    );
}