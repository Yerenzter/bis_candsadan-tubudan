import { Loop } from "../lib"

export default function Personnel() {
    return(
        <>
            <div className="col-span-12 flex bg-white justify-end items-end fixed z-10 left-0 right-1 top-10 px-4 py-4 ">
                <button className="btn bg-blue-500 waves-effect mx-1">
                    <i className="material-icons text-white">add</i>
                </button>

                <button className="btn bg-green-500 waves-effect mx-1">
                    <i className="material-icons text-white">edit</i>
                </button>

                <button className="btn bg-red-500 waves-effect mx-1">
                    <i className="material-icons text-white">delete</i>
                </button>
            </div>

            <div className="col-span-12">
                <table className="centered">
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Middlename</th>
                            <th>Lastname</th>
                            <th>Age</th>
                            <th>Sex</th>
                            <th>Civil Status</th>
                            <th>Occupation</th>
                            <th>Date of Birth</th>
                        </tr>
                    </thead>

                    <Loop repeat={10}>
                        {(index) => <tr key={index}>
                            <td className="text-center">Yuuki</td>
                            <td className="text-center">Yuuki</td>
                            <td className="text-center">Yuuki</td>
                            <td className="text-center">Yuuki</td>
                            <td className="text-center">Yuuki</td>
                            <td className="text-center">Yuuki</td>
                            <td className="text-center">Yuuki</td>
                            <td className="text-center">Yuuki</td>
                        </tr>}
                    </Loop>
                </table>
            </div>
        </>
    )
}