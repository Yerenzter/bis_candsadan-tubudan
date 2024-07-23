export default function More() {
    return (
                <ul id='more' className="dropdown-content h-1/2 absolute z-50 top-0 left-1">
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
    );
}