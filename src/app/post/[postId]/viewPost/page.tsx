"use client";
import Head from "next/head";
import { useSelector } from "react-redux";
import { selectPostById } from "../../postSlice";
import { useParams } from "next/navigation";
import PostAuthor from "../../components/PostAuthour";
import TimeAgo from "../../components/TimeAgo";
import ReactionButtons from "../../components/ReactionButton";
import Link from "next/link";
import { RootState } from "@/store";

function SinglePostPage() {
  const { postId } = useParams();

  const post = useSelector((state: RootState) =>
    selectPostById(state, Number(postId))
  );

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }
  return (
    <>
      <Head>
        <title>My page title</title>
      </Head>
      <article>
        <Link href="/post/postsList">
          <h3>{post?.title}</h3>
        </Link>
        <p>{post.body}</p>
        <p>
          <Link href={`/post/${post.id}/editPost`}>Edit Post</Link>
          <PostAuthor userId={post.userId} />
          <TimeAgo timeStamp={post.date} />
          <ReactionButtons post={post} />
        </p>
      </article>
    </>
  );
}

export default SinglePostPage;
