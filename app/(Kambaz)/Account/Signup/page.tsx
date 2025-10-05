"use client";

import Link from "next/link";
import { Container, FormControl } from "react-bootstrap";

export default function Signup() {
  return (
    <Container id="wd-signup-screen" style={{ width: "270px" }}>
      <h1>Sign up</h1>

      <FormControl
        id="wd-signup-username"
        placeholder="username"
        className="mb-2"
      />

      <FormControl
        id="wd-signup-password"
        placeholder="password"
        type="password"
        className="mb-2"
      />

      <FormControl
        id="wd-signup-verify-password"
        placeholder="verify password"
        type="password"
        className="mb-2"
      />

      <Link
        id="wd-signup-btn"
        href="/Account/Profile"
        className="btn btn-primary w-100 mb-2"
      >
        Sign up
      </Link>

      <Link id="wd-signin-link" href="/Account/Signin">
        Sign in
      </Link>
    </Container>
  );
}
