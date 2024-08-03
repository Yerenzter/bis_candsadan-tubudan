import axios from "axios";

let a = null;
let b = null;
let c = null;
let d = null;
let e = null;
let f = null;
let g = null;
let h = null;
let i = null;

async function ModifyResident() {
  const fname = document.querySelector("#editResFirstname");
  const mname = document.querySelector("#editResMiddlename");
  const lname = document.querySelector("#editResLastname");
  const age = document.querySelector("#editResAge");
  const sex = document.querySelector("#editResSex");
  const civilStatus = document.querySelector("#editResCivilStatus");
  const occupation = document.querySelector("#editResOccupation");
  const birthday = document.querySelector("#editResBirthday");

  const data = {
    fname: fname.value,
    mname: mname.value,
    lname: lname.value,
    age: age.value,
    sex: sex.value,
    civilstatus: civilStatus.value,
    occupation: occupation.value,
    birthday: birthday.value,
    id: i,
  };

  await axios.put("http://localhost:4435/residents/edit", data);
}

export function FillResidentForm(
  fname,
  mname,
  lname,
  age,
  sex,
  civilstatus,
  occupation,
  birthday,
  id
) {
  a = fname;
  b = mname;
  c = lname;
  d = age;
  e = sex;
  f = civilstatus;
  g = occupation;
  h = birthday;
  i = id;
}

export default function EditResident() {
  return (
    <div id="editResident" className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <h1 className="text-black text-3xl text-left">Edit resident</h1>
            <div className="divider mt-5"></div>

            <div className="row py-5">
              <div className="col s3 input-field outlined">
                <input
                  id="editResFirstname"
                  defaultValue={a}
                  placeholder="Firstname"
                />
              </div>

              <div className="col s3 input-field outlined">
                <input
                  id="editResMiddlename"
                  defaultValue={b}
                  placeholder="Middlename"
                />
              </div>

              <div className="col s3 input-field outlined">
                <input
                  id="editResLastname"
                  defaultValue={c}
                  placeholder="Lastname"
                />
              </div>

              <div className="col s3 input-field outlined">
                <input id="editResAge" defaultValue={d} placeholder="Age" />
              </div>

              <div className="col s3">
                <div className="input-field outlined">
                  <input
                    id="editResSex"
                    className="dropdown-trigger"
                    placeholder="Sex"
                    data-target="selectEditResSex"
                    readOnly={true}
                    defaultValue={e}
                  />
                </div>

                <ul id="selectEditResSex" className="dropdown-content">
                  <li onClick={() => (editResSex.value = "Male")}>
                    <a href="#">Male</a>
                  </li>
                  <li onClick={() => (editResSex.value = "Female")}>
                    <a href="#">Female</a>
                  </li>
                </ul>
              </div>

              <div className="col s3 input-field outlined">
                <div className="input-field outlined">
                  <input
                    id="editResCivilStatus"
                    className="dropdown-trigger"
                    placeholder="Civil status"
                    data-target="selectEditResCivilStatus"
                    readOnly={true}
                    defaultValue={f}
                  />
                </div>

                <ul id="selectEditResCivilStatus" className="dropdown-content">
                  <li onClick={() => (editResCivilStatus.value = "Single")}>
                    <a href="#">Single</a>
                  </li>
                  <li onClick={() => (editResCivilStatus.value = "Married")}>
                    <a href="#">Married</a>
                  </li>
                  <li onClick={() => (adResCivilStatus.value = "Divorced")}>
                    <a href="#">Divorced</a>
                  </li>
                  <li onClick={() => (editResCivilStatus.value = "Widowed")}>
                    <a href="#">Widowed</a>
                  </li>
                </ul>
              </div>

              <div className="col s3 input-field outlined">
                <input
                  id="editResOccupation"
                  defaultValue={g}
                  placeholder="Occupation"
                />
              </div>

              <div className="col s3 input-field outlined">
                <input
                  id="editResBirthday"
                  type="date"
                  defaultValue={h}
                  placeholder="Birthday"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="modal-footer px-5">
          <button className="btn bg-gray-400 waves-effect modal-close">
            Cancel
          </button>
          <button
            className="btn bg-blue-500 waves-effect modal-close mx-3"
            onClick={() => ModifyResident()}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
