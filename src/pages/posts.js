import { MainLayout } from "@/layouts/MainLayout";
import Link from "next/link";
import { posts } from "@/data/posts";
export async function getStaticProps() {
 

  return {
    props: {
      posts,
    },
  };
}

export default function postsRender({posts}) {
  
  return (
    <>
      <h1>Posts Page</h1>
      {posts.map((each, idx) => {
        return (
          <div key={idx.toString()}>
            <h2>{each.title}</h2>
            <p>{each.body}</p>
            <Link href={`/posts/${each.id}`}>Comments</Link>
          </div>
        );
      })}
    </>
  );
}

posts.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
