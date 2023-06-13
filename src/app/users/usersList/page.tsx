"use client";
import React from "react";
import { useSelector } from "react-redux";

import { selectAllUsers } from "../usersSlice";
import Link from "next/link";
import { User } from "@/types";
const UsersList = () => {
  const users = useSelector(selectAllUsers);
  console.log(users);
  const renderedUsers = users.map((user: User) => (
    <li key={user.id}>
      <Link href={`/users/${user.id}`}>{user.name}</Link>
    </li>
  ));

  return (
    <section>
      <h2>Users</h2>

      <ul>{renderedUsers}</ul>
    </section>
  );
};

export default UsersList;
