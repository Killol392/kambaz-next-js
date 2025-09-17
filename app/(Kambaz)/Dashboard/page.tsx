import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (10)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <img src="/images/reactjs.jpg" width={200} height={150} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/4567" className="wd-dashboard-course-link">
            <img src="/images/cs5800.jpg" width={200} height={150} />
            <div>
              <h5>CS5800 Algorithms</h5>
              <p className="wd-dashboard-course-title">
                Design and analysis of algorithms
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/7890" className="wd-dashboard-course-link">
            <img src="/images/cs5400.jpg" width={200} height={150} />
            <div>
              <h5>CS5400 Principles of Programming Languages</h5>
              <p className="wd-dashboard-course-title">
                Study of programming language design & semantics
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/0123" className="wd-dashboard-course-link">
            <img src="/images/cs5500.jpg" width={200} height={150} />
            <div>
              <h5>CS5500 Foundations of Software Engineering</h5>
              <p className="wd-dashboard-course-title">
                Principles and practices of software engineering
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/3456" className="wd-dashboard-course-link">
            <img src="/images/cs5520.jpg" width={200} height={150} />
            <div>
              <h5>CS5520 Mobile Application Development</h5>
              <p className="wd-dashboard-course-title">
                Building mobile apps with modern frameworks
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/6789" className="wd-dashboard-course-link">
            <img src="/images/cs5600.jpg" width={200} height={150} />
            <div>
              <h5>CS5600 Computer Systems</h5>
              <p className="wd-dashboard-course-title">
                Operating systems and systems programming
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/9012" className="wd-dashboard-course-link">
            <img src="/images/cs6120.jpg" width={200} height={150} />
            <div>
              <h5>CS6120 Natural Language Processing</h5>
              <p className="wd-dashboard-course-title">
                Language models and text processing
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/2345" className="wd-dashboard-course-link">
            <img src="/images/cs6140.jpg" width={200} height={150} />
            <div>
              <h5>CS6140 Machine Learning</h5>
              <p className="wd-dashboard-course-title">
                Supervised, unsupervised, and deep learning
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/5678" className="wd-dashboard-course-link">
            <img src="/images/cs6200.jpg" width={200} height={150} />
            <div>
              <h5>CS6200 Information Retrieval</h5>
              <p className="wd-dashboard-course-title">
                Search engines and retrieval models
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/8901" className="wd-dashboard-course-link">
            <img src="/images/cs6760.jpg" width={200} height={150} />
            <div>
              <h5>CS6760 Privacy, Security, and Usability</h5>
              <p className="wd-dashboard-course-title">
                Secure and user-centered system design
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
