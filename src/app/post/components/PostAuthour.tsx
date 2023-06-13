import { useSelector } from "react-redux";
import { selectAllUsers } from "@/app/users/usersSlice";
import Link from "next/link";
interface UserIdType {
  userId: number | string;
}
function PostAuthor({ userId }: UserIdType) {
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => user.id === userId);

  return (
    <div>
      <span>
        by{" "}
        {author ? (
          <Link href={`/users/${userId}`}>{author.name}</Link>
        ) : (
          "Unknown Author"
        )}
      </span>
    </div>
  );
}

export default PostAuthor;
