import Link from "next/link";
export default function Labs() {
  return (
    <div id="wd-labs">
      <div>
        <b>Name:</b> Killol Rajgor <br />
        <b>Course:</b> CS5610 - Web Development <br />
        <b>Semester:</b> Fall 2025 <br />
        <b>Section:</b> 04 <br />
        <b>Client Code (Next.Js):</b>
        <a href="https://github.com/Killol392/kambaz-next-js" target="_blank">
          GitHub Repository
        </a><br />
        <b>Server Code (Node.js / Express):</b>
        <a href="https://github.com/Killol392/kambaz-node-server-app" target="_blank">
          GitHub Repository
        </a>
        <b> Server (Render):</b>
        <a href="https://kambaz-node-server-app-xzoq.onrender.com" target="_blank">
          Root
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
          <Link href="/Labs/Lab4" id="wd-lab4-link">
            Lab 4: Maintaining State in React Applications
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab5" id="wd-lab5-link">
            Lab 5: Building REST API with Node.js and Express
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