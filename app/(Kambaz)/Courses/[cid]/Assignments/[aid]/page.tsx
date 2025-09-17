export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">
        <b>Assignment Name</b>
      </label>
      <br />
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />

      <textarea
        id="wd-description"
        defaultValue="The assignment is available online Submit a link to the landing page of"
      />
      <br />
      <br />

      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" type="number" defaultValue={100} />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group" defaultValue="ASSIGNMENTS">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as" defaultValue="percentage">
                <option value="percentage">Percentage</option>
                <option value="points">Points</option>
                <option value="complete-incomplete">Complete/Incomplete</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type" defaultValue="online">
                <option value="online">Online</option>
                <option value="on-paper">On Paper</option>
                <option value="external-tool">External Tool</option>
              </select>
              <br />
              <br />
              Online Entry Options:
              <br />
              <label>
                <input id="wd-text-entry" type="checkbox" defaultChecked /> Text
                Entry
              </label>
              <br />
              <label>
                <input id="wd-website-url" type="checkbox" /> Website URL
              </label>
              <br />
              <label>
                <input id="wd-media-recordings" type="checkbox" /> Media
                Recordings
              </label>
              <br />
              <label>
                <input id="wd-student-annotation" type="checkbox" /> Student
                Annotation
              </label>
              <br />
              <label>
                <input id="wd-file-upload" type="checkbox" /> File Upload
              </label>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign to</label>
            </td>
            <td>
              <select id="wd-assign-to" defaultValue="Everyone">
                <option value="Everyone">Everyone</option>
                <option value="Section-1">Section 1</option>
                <option value="Section-2">Section 2</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due Date</label>
            </td>
            <td>
              <input id="wd-due-date" type="date" defaultValue="2023-10-20" />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available From</label>
            </td>
            <td>
              <input
                id="wd-available-from"
                type="date"
                defaultValue="2023-10-01"
              />
              &nbsp;
              <label htmlFor="wd-available-until">Until</label>&nbsp;
              <input
                id="wd-available-until"
                type="date"
                defaultValue="2023-10-21"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <br />
      <button id="wd-cancel-edit">Cancel</button>
      <button id="wd-save-assignment">Save</button>
    </div>
  );
}
