import axios from "axios";

async function CreateResident() {
  const fname = document.querySelector("#addResFirstname");
  const mname = document.querySelector("#addResMiddlename");
  const lname = document.querySelector("#addResLastname");
  const age = document.querySelector("#addResAge");
  const sex = document.querySelector("#addResSex");
  const civilStatus = document.querySelector("#addResCivilStatus");
  const occupation = document.querySelector("#addResOccupation");
  const birthday = document.querySelector("#addResBirthday");

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

  await axios.post("http://localhost:4435/residents/post", data);
}

export default function AddResident() {
  return (
    <div id="addResident" className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <h1 className="text-black text-3xl text-left">Add new resident</h1>
            <div className="divider mt-5"></div>

            <div className="row py-5">
              <div className="col s3 input-field outlined">
                <input id="addResFirstname" placeholder="Firstname" />
              </div>

              <div className="col s3 input-field outlined">
                <input id="addResMiddlename" placeholder="Middlename" />
              </div>

              <div className="col s3 input-field outlined">
                <input id="addResLastname" placeholder="Lastname" />
              </div>

              <div className="col s3 input-field outlined">
                <input id="addResAge" placeholder="Age" />
              </div>

              <div className="col s3">
                <div className="input-field outlined">
                  <input
                    id="addResSex"
                    className="dropdown-trigger"
                    placeholder="Sex"
                    data-target="selectResSex"
                    readOnly={true}
                  />
                </div>

                <ul id="selectResSex" className="dropdown-content">
                  <li onClick={() => (addResSex.value = "Male")}>
                    <a href="#">Male</a>
                  </li>
                  <li onClick={() => (addResSex.value = "Female")}>
                    <a href="#">Female</a>
                  </li>
                </ul>
              </div>

              <div className="col s3 input-field outlined">
                <div className="input-field outlined">
                  <input
                    id="addResCivilStatus"
                    className="dropdown-trigger"
                    placeholder="Civil status"
                    data-target="selectResCivilStatus"
                    readOnly={true}
                  />
                </div>

                <ul id="selectResCivilStatus" className="dropdown-content">
                  <li onClick={() => (addResCivilStatus.value = "Single")}>
                    <a href="#">Single</a>
                  </li>
                  <li onClick={() => (addResCivilStatus.value = "Married")}>
                    <a href="#">Married</a>
                  </li>
                  <li onClick={() => (adResCivilStatus.value = "Divorced")}>
                    <a href="#">Divorced</a>
                  </li>
                  <li onClick={() => (addResCivilStatus.value = "Widowed")}>
                    <a href="#">Widowed</a>
                  </li>
                </ul>
              </div>

              <div className="col s3 input-field outlined">
                <input id="addResOccupation" placeholder="Occupation" />
              </div>

              <div className="col s3 input-field outlined">
                <input id="addResBirthday" type="date" placeholder="Birthday" />
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
            onClick={() => CreateResident()}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
