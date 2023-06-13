import PostAuthor from "./PostAuthour";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButton";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectPostById } from "../postSlice";
import { Post } from "@/types";
import { RootState } from "@/store";
interface postIdType {
  postId: string | number;
}
function PostsExcerpt({ postId }: { postId: any }) {
  const post = useSelector((state: RootState) => selectPostById(state, postId));
  return (
    <article>
      <h3>{post?.title}</h3>
      <p>{post?.body.substring(0, 75)}</p>
      <p>
        <Link href={`/post/${post?.id}/viewPost`}>View Post</Link>
        {post && <PostAuthor userId={post?.userId} />}
        <TimeAgo timeStamp={post?.date} />
        {post && <ReactionButtons post={post} />}
      </p>
    </article>
  );
}

export default PostsExcerpt;
