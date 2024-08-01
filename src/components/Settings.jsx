export default function Settings() {
  return (
    <ul id="settings" className="dropdown-content fixed top-0 left-1 mt-12">
      <li>
        <a href="#">Back</a>
      </li>

      <div className="divider"></div>

      <li onClick={() => (window.location.href = "/login")}>
        <a href="#">Logout</a>
      </li>
    </ul>
  );
}
