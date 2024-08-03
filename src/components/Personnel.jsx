import { useEffect, useState } from "react";
import { Loop, Tick, M } from "../lib";
import axios from "axios";
import AddPersonnel from "./Actions/AddPersonnel";
import EditPersonnel, { FillAccountForm } from "./Actions/EditPersonnel";
import DeletePersonnel, { SetPersonnelInfo } from "./Actions/DeletePersonnel";

export default function Resident() {
  useEffect(() => {
    MInit();
  }, []);

  useEffect(() => {
    Tick(RecognizeFilteringMethod);
  }, []);

  const [data, sendData] = useState({});

  const MInit = async () => {
    await M.Modal.init(document.querySelectorAll(".modal"));
    await M.Dropdown.init(document.querySelectorAll(".dropdown-trigger"), {
      constrainWidth: false,
      container: document.querySelector("#wrapper")
    });
  };

  const SearchAccounts = async (keyword) => {
    const search = {
      id: keyword,
      fname: keyword,
      mname: keyword,
      lname: keyword,
    };

    const res = await axios.post(
      "http://localhost:4435/accounts/search",
      search
    );
    sendData(res.data);
  };

  const OrderById = async () => {
    const res = await axios.get("http://localhost:4435/accounts/order/id");
    sendData(res.data);
  };

  const RecognizeFilteringMethod = () => {
    let search = document.querySelector("#searchAccounts");

    if (search.value !== "") return SearchAccounts(search.value);

    return OrderById();
  };

  return (
    <>
      <AddPersonnel />
      <EditPersonnel />
      <DeletePersonnel />

      <div id="wrapper" className="fixed  z-50 top-10 right-0"></div>

      <div className="row">
        <div className="col s3 flex justify-start sticky z-10 left-0  top-10 bg-transparent">
          <div className="input-field outlined">
            <input id="searchAccounts" placeholder="Search accounts" />
          </div>
        </div>

        <div className="col s9 flex justify-end sticky z-10 left-0 top-10 bg-transparent    ">
          <button
            className="btn bg-blue-500 waves-effect mx-1 modal-trigger"
            data-target="addPersonnel"
          >
            <i className="material-icons text-white">add</i>
          </button>
        </div>

        <div className="col s12">
          <table className="centered">
            <thead className="text-white">
              <tr>
                <th>Firstname</th>
                <th>Middlename</th>
                <th>Lastname</th>
                <th>Age</th>
                <th>Sex</th>
                <th>Civil Status</th>
                <th>Occupation</th>
                <th>Date of Birth</th>
                <td>Actions</td>
              </tr>
            </thead>

            <tbody className="text-white centered">
              <Loop repeat={data.length}>
                {(index) => (
                  <tr key={index}>
                    <td className="text-center">{data[index].fname}</td>
                    <td className="text-center">{data[index].mname}</td>
                    <td className="text-center">{data[index].lname}</td>
                    <td className="text-center">{data[index].age}</td>
                    <td className="text-center">{data[index].sex}</td>
                    <td className="text-center">{data[index].civilstatus}</td>
                    <td className="text-center">{data[index].occupation}</td>
                    <td className="text-center">{data[index].birthday}</td>
                    <td>
                      <button
                        className="btn bg-green-500 waves-effect mx-1 modal-trigger"
                        data-target="editPersonnel"
                        onClick={() =>
                          FillAccountForm(
                            data[index].fname,
                            data[index].mname,
                            data[index].lname,
                            data[index].age,
                            data[index].sex,
                            data[index].civilstatus,
                            data[index].occupation,
                            data[index].birthday,
                            data[index].id
                          )
                        }
                      >
                        <i className="material-icons text-white">edit</i>
                      </button>

                      <button
                        className="btn bg-red-500 waves-effect mx-1 modal-trigger"
                        data-target="deletePersonnel"
                        onClick={() =>
                          SetPersonnelInfo(data[index].id, data[index].fname)
                        }
                      >
                        <i className="material-icons text-white">delete</i>
                      </button>
                    </td>
                  </tr>
                )}
              </Loop>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
