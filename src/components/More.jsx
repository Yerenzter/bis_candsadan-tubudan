export default function More() {
    return (
        <>
            <ul id='more' className="dropdown-content fixed top-0 left-1 mt-12">
                <li>
                    <a href="#">
                        <i className="material-icons">schedule</i>
                        Barangay History
                    </a>
                </li>

                <li>
                    <a href="#">
                        <i className="material-icons">group</i>
                        Barangay Officials
                    </a>
                </li>

                <li>
                    <a href="#">
                        <i className="material-icons">file</i>
                        Document Format
                    </a>
                </li>
            </ul>
        </>
    );
}