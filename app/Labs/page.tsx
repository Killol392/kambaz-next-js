import Link from "next/link";
export default function Labs() {
  return (
    <div id="wd-labs">
      <div>
        <b>Name:</b> Killol Rajgor <br />
        <b>Course:</b> CS5610 - Web Development <br />
        <b>Semester:</b> Fall 2025 <br />
        <b>Section:</b> 04 <br />
        <b>Source Code:</b>{" "}
        <a href="https://github.com/Killol392/kambaz-next-js" target="_blank">
          GitHub Repository
        </a>
      </div>
      <h1>Labs</h1>
      <ul>
        <li>
          <Link href="/Labs/Lab1" id="wd-lab1-link">
            Lab 1: HTML Examples
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab2" id="wd-lab2-link">
            Lab 2: CSS Basics
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab3" id="wd-lab3-link">
            Lab 3: JavaScript Fundamentals
          </Link>
        </li>
        <li>
        <Link href="/" id="wd-kambaz-link">
          Kambaz
        </Link>
      </li>
      </ul>
    </div>
  );
}