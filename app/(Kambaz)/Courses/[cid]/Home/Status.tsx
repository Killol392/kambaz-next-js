import { Button } from "react-bootstrap";
import { BiImport } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import { FaChartColumn } from "react-icons/fa6";
import { FiTarget } from "react-icons/fi";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import {
  IoBarChart,
  IoNotificationsOutline,
  IoCalendarOutline,
} from "react-icons/io5";
import { LiaFileImportSolid } from "react-icons/lia";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaChartLine } from "react-icons/fa";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "350px" }}>
      <h2>Course Status</h2>

      {/* Publish/Unpublish Row */}
      <div className="d-flex">
        <div className="w-50 pe-1">
          <Button
            variant="secondary"
            size="lg"
            className="w-100 text-nowrap"
            id="wd-unpublish"
          >
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish
          </Button>
        </div>
        <div className="w-50">
          <Button variant="success" size="lg" className="w-100" id="wd-publish">
            <FaCheckCircle className="me-2 fs-5" /> Publish
          </Button>
        </div>
      </div>

      <br />

      {/* Action Buttons */}
      <Button
        variant="secondary"
        size="lg"
        className="w-100 mt-1 text-start"
        id="wd-import-exisiting-content"
      >
        <BiImport className="me-2 fs-5" /> Import Existing Content
      </Button>

      <Button
        variant="secondary"
        size="lg"
        className="w-100 mt-1 text-start"
        id="wd-import-from-commons"
      >
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons
      </Button>

      <Button
        variant="secondary"
        size="lg"
        className="w-100 mt-1 text-start"
        id="wd-choose-home-page"
      >
        <FiTarget className="me-2 fs-5" /> Choose Home Page
      </Button>

      <Button
        variant="secondary"
        size="lg"
        className="w-100 mt-1 text-start"
        id="wd-view-course-stream"
      >
        <IoBarChart className="me-2 fs-5" /> View Course Stream
      </Button>

      <Button
        variant="secondary"
        size="lg"
        className="w-100 mt-1 text-start"
        id="wd-new-announcement"
      >
        <HiOutlineSpeakerphone className="me-2 fs-5" /> New Announcement
      </Button>

      <Button
        variant="secondary"
        size="lg"
        className="w-100 mt-1 text-start"
        id="wd-new-analytics"
      >
        <FaChartColumn className="me-2 fs-5" /> New Analytics
      </Button>

      <Button
        variant="secondary"
        size="lg"
        className="w-100 mt-1 text-start"
        id="wd-course-analytics"
      >
        <FaChartLine className="me-2 fs-5" /> Course Analytics
      </Button>

      <Button
        variant="secondary"
        size="lg"
        className="w-100 mt-1 text-start"
        id="wd-view-course-calendar"
      >
        <IoCalendarOutline className="me-2 fs-5" /> View Course Calendar
      </Button>

      <Button
        variant="secondary"
        size="lg"
        className="w-100 mt-1 text-start"
        id="wd-view-course-notification"
      >
        <IoNotificationsOutline className="me-2 fs-5" /> View Course
        Notifications
      </Button>
    </div>
  );
}
