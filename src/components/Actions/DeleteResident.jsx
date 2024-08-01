import axios from "axios";

let idx = null;
let name = null;

async function RemoveResident() {
  const data = {
    id: idx,
  };

  await axios.post("http://localhost:4435/residents/delete", data);
}

export function SetResidentInfo(idXYZ, nameXYZ) {
  idx = idXYZ;
  name = nameXYZ;
}

export default function DeleteResident() {
  return (
    <div id="deleteResident" className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div clas sName="modal-body">
            <h1 className="text-black text-3xl text-left">Delete resident</h1>
            <div className="divider mt-5"></div>

            <p className="text-black text-2xl">
              Are you sure to want delete this resident, {name}? [ID:{idx}]
            </p>
          </div>

          <div className="modal-footer">
            <button className="btn-flat waves-effect modal-close">
              Cancel
            </button>
            <button
              className="btn-flat waves-effect modal-close mx-3"
              onClick={() => RemoveResident()}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
