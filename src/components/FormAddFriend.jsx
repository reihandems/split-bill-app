import { useState } from "react";

export default function FormAddFriend() {
    const [name, setName] = useState("")
    const [image, setImage] = useState("https://i.pravatar.cc/150?img=1");

    return (
      <>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn bg-zinc-900 mt-3 w-full sm:w-120"
          onClick={() => document.getElementById("form_add").showModal()}
        >
          + Add Friend
        </button>
        <dialog id="form_add" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Friend's Name</legend>
              <input
                type="text"
                className="input w-full"
                placeholder="Ex: John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </fieldset>
            
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Image</legend>
              <input
                type="text"
                className="input w-full"
                placeholder="Ex: John Doe"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </fieldset>
            
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <div className="flex gap-2">
                  <button className="btn bg-black">Add New</button>
                  <button className="btn">Close</button>
                </div>
              </form>
            </div>
            
          </div>
        </dialog>
      </>
    );
}