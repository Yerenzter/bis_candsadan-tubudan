import axios from "axios";

let id = null;
let name = null;

async function RemovePersonnel() {
  const data = {
    id: id,
  };

  await axios.post("http://localhost:4435/accounts/delete", data);
}

export function SetPersonnelInfo(idXYZ) {
  return (id = idXYZ);
}

export default function DeletePersonnel() {
  return (
    <div id="deletePersonnel" className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <h1 className="text-black text-3xl text-left">Delete personnel</h1>
            <div className="divider mt-5"></div>

            <p className="text-black">
              Are you sure to want delete this account, {name} [ID:{id}]?
            </p>
          </div>

          <div className="modal-footer">
            <button className="btn bg-gray-400 waves-effect modal-close">
              Cancel
            </button>
            <button
              className="btn bg-blue-500 waves-effect modal-close mx-3"
              onClick={() => RemovePersonnel()}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
