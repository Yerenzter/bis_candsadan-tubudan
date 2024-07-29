export default function Request() {
    return (
        <>
            <div className="row p-5">
                <div className="col s6 text-left">
                    <div className="input-field outlined">
                        <input id="requestFullname" placeholder="Fullname" />
                    </div>
                </div>

                <div className="col s6">
                    <p className="mb-5 text-2xl">Date: </p>
                    <p className="mb-5 text-2xl">Age: </p>
                    <p className="mb-5 text-2xl">Date of Birth: </p>
                </div>

                <div className="col s12 center-align">
                    <p className="text-4xl mb-5">What To Request</p>

                    <form>
                        <div className="flex w-100 justify-center gap-10 align-middle">
                            <p>
                                <label htmlFor="indigency" className="text-white">
                                    <input type="checkbox" name="indigency" id="indigency" />
                                    INDIGENCY
                                </label>
                            </p>

                            <p>
                                <label htmlFor="residency" className="text-white">
                                    <input type="checkbox" name="residency" id="residency" />
                                    RESIDENCY
                                </label>
                            </p>

                            <p>
                                <label htmlFor="residency" className="text-white">
                                    <input type="checkbox" name="clearance" id="clearance" />
                                    CLEARANCE
                                </label>
                            </p>
                        </div>

                        <button className="btn-large bg-green-500 waves-effect mt-10" type="submit">SUBMIT</button>
                    </form>
                </div>
            </div>
        </>
    );
}