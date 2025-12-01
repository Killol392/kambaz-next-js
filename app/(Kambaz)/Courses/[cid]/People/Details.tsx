"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";
import { FaCheck, FaUserCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { FaPencil } from "react-icons/fa6";
import { FormControl, Form } from "react-bootstrap";
import * as client from "../../../Account/client";
import { useSelector } from "react-redux";

export default function PeopleDetails({
  uid,
  onClose,
}: {
  uid: string | null;
  onClose: () => void;
}) {
  const [user, setUser] = useState<any>(null);

  // get logged-in user
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isAdmin = currentUser?.role === "ADMIN";

  // Controlled fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  // Editing states
  const [editingName, setEditingName] = useState(false);
  const [editingEmail, setEditingEmail] = useState(false);
  const [editingRole, setEditingRole] = useState(false);

  // Fetch User
  const fetchUser = async () => {
    if (!uid) return;
    const data = await client.findUserById(uid);
    setUser(data);
    setName(`${data.firstName} ${data.lastName}`);
    setEmail(data.email || "");
    setRole(data.role || "");
  };

  useEffect(() => {
    if (uid) {
      fetchUser();
      setEditingName(false);
      setEditingEmail(false);
      setEditingRole(false);
    }
  }, [uid]);

  if (!uid || !user) return null;

  // SAVE HANDLERS
  const saveName = async () => {
    if (!isAdmin) return;

    const trimmed = name.trim();
    if (!trimmed) {
      setEditingName(false);
      return;
    }

    const parts = trimmed.split(" ");
    const firstName = parts[0];
    const lastName = parts.slice(1).join(" ") || user.lastName;

    const updatedUser = { ...user, firstName, lastName };
    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setEditingName(false);
    onClose();
  };

  const saveEmail = async () => {
    if (!isAdmin) return;

    const updatedUser = { ...user, email };
    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setEditingEmail(false);
    onClose();
  };

  const saveRole = async () => {
    if (!isAdmin) return;

    const updatedUser = { ...user, role };
    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setEditingRole(false);
    onClose();
  };

  const deleteUser = async () => {
    if (!isAdmin) return;

    await client.deleteUser(uid);
    onClose();
  };

  return (
    <div
      className="wd-people-details position-fixed bg-white p-4 shadow"
      style={{
        zIndex: 9999,
        top: 0,
        right: 0,
        bottom: 0,
        width: "350px",
        maxWidth: "90vw",
        overflowY: "auto",
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="btn position-absolute end-0 top-0 wd-close-details"
        style={{ border: "none", background: "transparent" }}
      >
        <IoCloseSharp className="fs-1" />
      </button>

      {/* User Icon */}
      <div className="text-center mt-2">
        <FaUserCircle className="text-secondary fs-1" />
      </div>

      <hr />

      {/* NAME FIELD */}
      <div className="text-danger fs-4 fw-bold mb-3">
        {!editingName ? (
          <>
            {isAdmin && (
              <FaPencil
                className="float-end fs-5 mt-2 wd-edit"
                style={{ cursor: "pointer" }}
                onClick={() => setEditingName(true)}
              />
            )}
            <div className="wd-name">
              {user.firstName} {user.lastName}
            </div>
          </>
        ) : (
          isAdmin && (
            <>
              <FaCheck
                onClick={saveName}
                className="float-end fs-5 mt-2 me-2 wd-save"
                style={{ cursor: "pointer" }}
              />
              <FormControl
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && saveName()}
                className="w-75"
                style={{ color: "black" }}
              />
            </>
          )
        )}
      </div>

      {/* ROLE FIELD */}
      <div className="mb-3">
        <b>Roles:</b>
        {!editingRole ? (
          <>
            <span className="wd-role ms-2">{user.role}</span>
            {isAdmin && (
              <FaPencil
                onClick={() => setEditingRole(true)}
                className="float-end fs-5 wd-edit-role"
                style={{ cursor: "pointer" }}
              />
            )}
          </>
        ) : (
          isAdmin && (
            <>
              <FaCheck
                onClick={saveRole}
                className="float-end fs-5 me-2 wd-save-role"
                style={{ cursor: "pointer" }}
              />
              <Form.Select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="mt-1 w-50"
              >
                <option value="STUDENT">STUDENT</option>
                <option value="TA">TA</option>
                <option value="FACULTY">FACULTY</option>
                <option value="ADMIN">ADMIN</option>
              </Form.Select>
            </>
          )
        )}
      </div>

      {/* EMAIL FIELD */}
      <div className="mb-3">
        <b>Email:</b>
        {!editingEmail ? (
          <>
            <span className="wd-email ms-2">{user.email}</span>
            {isAdmin && (
              <FaPencil
                onClick={() => setEditingEmail(true)}
                className="float-end fs-5 wd-edit-email"
                style={{ cursor: "pointer" }}
              />
            )}
          </>
        ) : (
          isAdmin && (
            <>
              <FaCheck
                onClick={saveEmail}
                className="float-end fs-5 me-2 wd-save-email"
                style={{ cursor: "pointer" }}
              />
              <FormControl
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && saveEmail()}
                className="mt-1 w-75"
              />
            </>
          )
        )}
      </div>

      {/* STATIC FIELDS */}
      <div className="mb-3">
        <b>Login ID:</b> <span className="ms-2">{user.loginId}</span>
      </div>
      <div className="mb-3">
        <b>Section:</b> <span className="ms-2">{user.section}</span>
      </div>
      <div className="mb-4">
        <b>Total Activity:</b>{" "}
        <span className="ms-2">{user.totalActivity}</span>
      </div>

      <hr />

      {/* BUTTONS */}
      <div className="d-flex justify-content-end gap-2">
        <button className="btn btn-secondary" onClick={onClose}>
          Cancel
        </button>

        {isAdmin && (
          <button className="btn btn-danger" onClick={deleteUser}>
            Delete
          </button>
        )}
      </div>
    </div>
  );
}
