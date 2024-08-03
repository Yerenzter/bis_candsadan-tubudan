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

async function ModifyPersonnel() {
  const fname = document.querySelector("#editAccFirstname");
  const mname = document.querySelector("#editAccMiddlename");
  const lname = document.querySelector("#editAccLastname");
  const age = document.querySelector("#editAccAge");
  const sex = document.querySelector("#editAccSex");
  const civilStatus = document.querySelector("#editAccCivilStatus");
  const occupation = document.querySelector("#editAccOccupation");
  const birthday = document.querySelector("#editAccBirthday");

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

  await axios.put("http://localhost:4435/accounts/edit", data);
}

export function FillAccountForm(
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

export default function EditPersonnel() {
  return (
    <div id="editPersonnel" className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <h1 className="text-black text-3xl text-left">Edit resident</h1>
            <div className="divider mt-5"></div>

            <div className="row py-5">
              <div className="col s3 input-field outlined">
                <input
                  id="editAccFirstname"
                  defaultValue={a}
                  placeholder="Firstname"
                />
              </div>

              <div className="col s3 input-field outlined">
                <input
                  id="editAccMiddlename"
                  defaultValue={b}
                  placeholder="Middlename"
                />
              </div>

              <div className="col s3 input-field outlined">
                <input
                  id="editAccLastname"
                  defaultValue={c}
                  placeholder="Lastname"
                />
              </div>

              <div className="col s3 input-field outlined">
                <input id="editAccAge" defaultValue={d} placeholder="Age" />
              </div>

              <div className="col s3">
                <div className="input-field outlined">
                  <input
                    id="editAccSex"
                    className="dropdown-trigger"
                    placeholder="Sex"
                    data-target="selectResSex"
                    readOnly={true}
                    defaultValue={e}
                  />
                </div>

                <ul id="selectResSex" className="dropdown-content">
                  <li onClick={() => (editAccSex.value = "Male")}>
                    <a href="#">Male</a>
                  </li>
                  <li onClick={() => (editAccSex.value = "Female")}>
                    <a href="#">Female</a>
                  </li>
                </ul>
              </div>

              <div className="col s3 input-field outlined">
                <div className="input-field outlined">
                  <input
                    id="editAccCivilStatus"
                    className="dropdown-trigger"
                    placeholder="Civil status"
                    data-target="selectResCivilStatus"
                    readOnly={true}
                    defaultValue={f}
                  />
                </div>

                <ul id="selectResCivilStatus" className="dropdown-content">
                  <li onClick={() => (editAccCivilStatus.value = "Single")}>
                    <a href="#">Single</a>
                  </li>
                  <li onClick={() => (editAccCivilStatus.value = "Married")}>
                    <a href="#">Married</a>
                  </li>
                  <li onClick={() => (adResCivilStatus.value = "Divorced")}>
                    <a href="#">Divorced</a>
                  </li>
                  <li onClick={() => (editAccCivilStatus.value = "Widowed")}>
                    <a href="#">Widowed</a>
                  </li>
                </ul>
              </div>

              <div className="col s3 input-field outlined">
                <input
                  id="editAccOccupation"
                  defaultValue={g}
                  placeholder="Occupation"
                />
              </div>

              <div className="col s3 input-field outlined">
                <input
                  id="editAccBirthday"
                  type="date"
                  placeholder="Birthday"
                  defaultValue={h}
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
            onClick={() => ModifyPersonnel()}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
