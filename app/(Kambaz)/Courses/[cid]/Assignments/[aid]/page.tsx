export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">
        <strong>Assignment Name</strong>
      </label>
      <br />
      <br />

      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />

      <textarea
        id="wd-description"
        rows={4}
        cols={50}
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
                <option value="in-person">In-Person</option>
                <option value="in-person">External Tool</option>
              </select>

              <br />
              <br />
              Online Entry Options:
              <br />
              <input type="checkbox" id="wd-text-entry" />
              <label htmlFor="wd-text-entry"> Text Entry</label>
              <br />
              <input type="checkbox" id="wd-website-url" />
              <label htmlFor="wd-website-url"> Website URL</label>
              <br />
              <input type="checkbox" id="wd-media-recordings" />
              <label htmlFor="wd-media-recordings"> Media Recordings</label>
              <br />
              <input type="checkbox" id="wd-student-annotation" />
              <label htmlFor="wd-student-annotation"> Student Annotation</label>
              <br />
              <input type="checkbox" id="wd-file-upload" />
              <label htmlFor="wd-file-upload"> File Upload</label>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              Assign
            </td>
            <td>
              <label htmlFor="wd-assign-to">Assign to:</label>
              <br />
              <select id="wd-assign-to" defaultValue="Everyone">
                <option value="Everyone">Everyone</option>
                <option value="Group 1">Section 1</option>
                <option value="Group 2">Section 2</option>
                <option value="Group 2">Section 3</option>
                <option value="Group 2">Section 4</option>
                <option value="Group 2">Section 5</option>
              </select>

              <br />
              <br />
              <label htmlFor="wd-due-date">Due Date</label>
              <br />
              <input type="date" id="wd-due-date" defaultValue="2023-10-20" />

              <br />
              <br />
              <table>
                <tbody>
                  <tr>
                    <td>
                      <label htmlFor="wd-available-from">Available From</label>
                      <br />
                      <input
                        type="date"
                        id="wd-available-from"
                        defaultValue="2023-10-01"
                      />
                    </td>
                    <td>
                      <label htmlFor="wd-available-until">Until</label>
                      <br />
                      <input
                        type="date"
                        id="wd-available-until"
                        defaultValue="2023-10-21"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr>
            <td colSpan={2}>
              <hr />
            </td>
          </tr>

          <tr>
            <td colSpan={2} align="right" valign="top">
              <button id="wd-cancel-assignment">Cancel</button>
              &nbsp;
              <button id="wd-save-assignment">Save</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
