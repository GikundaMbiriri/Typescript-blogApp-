"use client";
import { useSelector } from "react-redux";
import { selectUserById } from "../usersSlice";
import { useGetPostsByUserIdQuery } from "@/app/post/postSlice";
import { useParams } from "next/navigation";
import Link from "next/link";
const UserPage = () => {
  const { userId } = useParams();
  const user = useSelector((state) => selectUserById(state, Number(userId)));

  const {
    data: postsForUser,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsByUserIdQuery(userId);

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    const { ids, entities } = postsForUser;
    content = ids.map((id: number) => (
      <li key={id}>
        <Link href={`/post/${id}/viewPost`}>{entities[id].title}</Link>
      </li>
    ));
  } else if (isError) {
    content = <p>{`${error}`}</p>;
  }

  return (
    <section>
      <h2>{user?.name}</h2>

      <ol>{content}</ol>
    </section>
  );
};

export default UserPage;
