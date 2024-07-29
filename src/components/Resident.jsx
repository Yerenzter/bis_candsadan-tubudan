import { useEffect, useState } from "react";
import { Loop, M, Tick } from "../lib";
import axios from "axios";
import AddResident from "./Actions/AddResident";

export default function Resident() {
    useEffect(() => {
        MInit();
    }, []);

    useEffect(() => {
        Tick(RecognizeFilteringMethod)
    }, []);

    const [data, sendData] = useState({});

    const MInit = async () => {
        await M.Modal.init(document.querySelectorAll('.modal'));
    }

    const SearchResidents = async (keyword) => {
        const search = {
            id: keyword,
            fname: keyword,
            mname: keyword,
            lname: keyword
        };

        const res = await axios.post('http://localhost:4435/residents/search', search);
        sendData(res.data);
    }

    const OrderById = async () => {
        const res = await axios.get('http://localhost:4435/residents/order/id');
        sendData(res.data);
    }

    const RecognizeFilteringMethod = () => {
        let search = document.querySelector('#searchResidents');

        if (search.value !== "") return SearchResidents(search.value);

        return OrderById();
    }

    return (
        <>
            <AddResident />
            <div className="row h-screen">
                <div className="col s6 flex justify-start bg-white sticky z-10 left-0  top-10 py-4 bg-transparent">
                    <div className="input-field outlined">
                        <input id="searchResidents" placeholder="Search residents" />
                    </div>
                </div>

                <div className="col s6 flex justify-end bg-white sticky z-10 left-0  top-10 py-4 bg-transparent">
                    <button className="btn bg-blue-500 waves-effect mx-1 modal-trigger" data-target='addResident'>
                        <i className="material-icons text-white">add</i>
                    </button>

                    <button className="btn bg-green-500 waves-effect mx-1">
                        <i className="material-icons text-white">edit</i>
                    </button>

                    <button className="btn bg-red-500 waves-effect mx-1">
                        <i className="material-icons text-white">delete</i>
                    </button>
                </div>

                <div className="col s12">
                    <table className="centered">
                        <thead className="text-white">
                            <th>Firstname</th>
                            <th>Middlename</th>
                            <th>Lastname</th>
                            <th>Age</th>
                            <th>Sex</th>
                            <th>Civil Status</th>
                            <th>Occupation</th>
                            <th>Date of Birth</th>
                        </thead>

                        <tbody className="text-white">
                            <Loop repeat={data.length}>
                                {(index) => <tr key={index}>
                                    <td className="text-center">{data[index].fname}</td>
                                    <td className="text-center">{data[index].mname}</td>
                                    <td className="text-center">{data[index].lname}</td>
                                    <td className="text-center">{data[index].age}</td>
                                    <td className="text-center">{data[index].sex}</td>
                                    <td className="text-center">{data[index].civilstatus}</td>
                                    <td className="text-center">{data[index].occupation}</td>
                                    <td className="text-center">{data[index].birthday}</td>
                                </tr>}
                            </Loop>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}