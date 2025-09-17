import Link from "next/link";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>

      <div>
      <label htmlFor="wd-username">Username: </label>
      <input
        defaultValue="alice"
        placeholder="username"
        className="wd-username"
      />
      </div>
      <br />

      <div>
      <label htmlFor="wd-password">Password: </label>
      <input
        defaultValue="123"
        placeholder="password"
        type="password"
        className="wd-password"
      />
      </div>
      <br />
      
      <div>
      <label htmlFor="wd-first-name">First Name: </label>
      <input defaultValue="Alice" placeholder="First Name" id="wd-firstname" />
      </div>
      <br />

      <div>
      <label htmlFor="wd-last-name">Last Name: </label>
      <input
        defaultValue="Wonderland"
        placeholder="Last Name"
        id="wd-lastname"
      />
      </div>
      <br />

      <div>
        <label htmlFor="wd-dob">Date of Birth: </label>
      <input defaultValue="2000-01-01" type="date" id="wd-dob" />
      </div>
      <br />

      <div>
      <label htmlFor="wd-email">Email: </label>
      <input defaultValue="alice@wonderland" type="email" id="wd-email" />
      </div>
      <br />
      
      <div>
        <label htmlFor="wd-role">Role: </label>
      <select defaultValue="FACULTY" id="wd-role">
        <option value="USER">User</option> <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>{" "}
        <option value="STUDENT">Student</option>
      </select>
      </div>
      <br />
      
      <Link href="Signin"> Sign out </Link>
    </div>
  );
}
