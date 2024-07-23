export default function Login() {
    return (
        <div className="row h-screen items-center bg-login">
            <div className="col-span-4"></div>
            <div className="col-span-4">
                <form>
                    <div className="input-field outlined mb-3">
                        <input id='username' placeholder=" " />
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="input-field outlined mb-3">
                        <input id='password' type='password' placeholder=" " />
                        <label htmlFor="password">Password</label>
                    </div>
                    <center>
                        <button className="btn bg-green-500 waves-effect w-5/12 justify-center text-white" type="submit">Login</button>
                    </center>
                </form>
            </div>
            <div className="col-span-4"></div>
        </div>
    );
}