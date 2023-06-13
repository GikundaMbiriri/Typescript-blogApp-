"use client";
import { useSelector } from "react-redux";
import { selectPostIds } from "../postSlice";
import PostsExcerpt from "../components/PostsExcerpt";
import { useGetPostsQuery } from "../postSlice";

function PostsList() {
  const { isLoading, isSuccess, isError, error } = useGetPostsQuery();
  const orderedPostIds = useSelector(selectPostIds);

  let content;
  if (isLoading) {
    content = <p>Loading</p>;
  } else if (isSuccess) {
    content = orderedPostIds.map((postId) => (
      <PostsExcerpt key={postId} postId={postId} />
    ));
  } else if (isError) {
    content = <p>{`${error}`}</p>;
  }
  return (
    <div>
      <section>
        <h2>Posts</h2>
        {content}
      </section>
    </div>
  );
}

export default PostsList;
