export default function Start() {
    return(
        <div className="row px-20">
            <div className="col-span-12 h-screen content-center center-align justify-center">
                <h1 className="text-6xl mb-24">BARANGAY INFORMATION SYSTEM OF BARANGAY CANSADAN-TUBUDAN, SAN JOSE, ANTIQUE</h1>
                <button className="btn-large bg-green-500 waves-effect text-white px-12 mb-3 w-1/4 justify-center">
                    RESIDENT
                </button>
                <br />
                <button className="btn-large bg-green-500 waves-effect text-white px-12 w-1/4 justify-center"
                    onClick={() => window.location.href = '/login' }>
                    PERSONNEL
                </button>
            </div>
        </div>
    );
}