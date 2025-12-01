// "use client";

// import { useEffect } from "react";
// import { useRouter, useParams } from "next/navigation";

// export default function PeoplePage() {
//   const router = useRouter();
//   const { cid } = useParams();

//   useEffect(() => {
//     router.replace(`/Courses/${cid}/People/Table`);
//   }, [cid, router]);

//   return null;
// }

"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import PeopleTable from "./Table/page";
import * as client from "../../client";

export default function PeoplePage() {
  const { cid } = useParams();
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const data = await client.findUsersForCourse(cid as string);
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, [cid]);

  return <PeopleTable users={users} fetchUsers={fetchUsers} />;
}
