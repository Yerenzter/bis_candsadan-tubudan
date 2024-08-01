import axios from "axios";

async function CreatePersonnel() {
  const fname = document.querySelector("#addAccFirstname");
  const mname = document.querySelector("#addAccMiddlename");
  const lname = document.querySelector("#addAccLastname");
  const age = document.querySelector("#addAccAge");
  const sex = document.querySelector("#addAccSex");
  const civilStatus = document.querySelector("#addAccCivilStatus");
  const occupation = document.querySelector("#addAccOccupation");
  const birthday = document.querySelector("#addAccBirthday");

  const data = {
    fname: fname.value,
    mname: mname.value,
    lname: lname.value,
    age: age.value,
    sex: sex.value,
    civilstatus: civilStatus.value,
    occupation: occupation.value,
    birthday: birthday.value,
  };

  await axios.post("http://localhost:4435/accounts/post", data);
}

export default function AddPersonnel() {
  return (
    <div id="addPersonnel" className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <h1 className="text-black text-3xl text-left">Add new account</h1>
            <div className="divider mt-5"></div>

            <div className="row py-5">
              <div className="col s3 input-field outlined">
                <input id="addAccFirstname" placeholder="Firstname" />
              </div>

              <div className="col s3 input-field outlined">
                <input id="addAccMiddlename" placeholder="Middlename" />
              </div>

              <div className="col s3 input-field outlined">
                <input id="addAccLastname" placeholder="Lastname" />
              </div>

              <div className="col s3 input-field outlined">
                <input id="addAccAge" placeholder="Age" />
              </div>

              <div className="col s3">
                <div className="input-field outlined">
                  <input
                    id="addAccSex"
                    className="dropdown-trigger"
                    placeholder="Sex"
                    data-target="selectResSex"
                    readOnly={true}
                  />
                </div>

                <ul id="selectResSex" className="dropdown-content">
                  <li onClick={() => (addAccSex.value = "Male")}>
                    <a href="#">Male</a>
                  </li>
                  <li onClick={() => (addAccSex.value = "Female")}>
                    <a href="#">Female</a>
                  </li>
                </ul>
              </div>

              <div className="col s3 input-field outlined">
                <div className="input-field outlined">
                  <input
                    id="addAccCivilStatus"
                    className="dropdown-trigger"
                    placeholder="Civil status"
                    data-target="selectResCivilStatus"
                    readOnly={true}
                  />
                </div>

                <ul id="selectResCivilStatus" className="dropdown-content">
                  <li onClick={() => (addAccCivilStatus.value = "Single")}>
                    <a href="#">Single</a>
                  </li>
                  <li onClick={() => (addAccCivilStatus.value = "Married")}>
                    <a href="#">Married</a>
                  </li>
                  <li onClick={() => (adResCivilStatus.value = "Divorced")}>
                    <a href="#">Divorced</a>
                  </li>
                  <li onClick={() => (addAccCivilStatus.value = "Widowed")}>
                    <a href="#">Widowed</a>
                  </li>
                </ul>
              </div>

              <div className="col s3 input-field outlined">
                <input id="addAccOccupation" placeholder="Occupation" />
              </div>

              <div className="col s3 input-field outlined">
                <input id="addAccBirthday" type="date" placeholder="Birthday" />
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
            onClick={() => CreatePersonnel()}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
