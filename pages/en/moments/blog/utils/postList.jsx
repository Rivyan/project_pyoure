import React from "react";
import Link from "next/link";

export default function PostList({ posts = [] }) {
  return (
    <section className="blogSection">
      {posts.map((post) => (
        <article key={post.sys.id}>
          <header>
            <h1>
              <Link href={`/en/moments/blog/post/${post.fields.slug}`}>
                <a>{post.fields.title}</a>
              </Link>
            </h1>
            <small>
              <p>Published: {post.fields.publishDate.substring(0, 10)}</p>
            </small>
          </header>
          <p>{post.fields.description}</p>
          <p>
            <Link href={`/en/moments/blog/post/${post.fields.slug}`}>
              <a>Continue reading »</a>
            </Link>
          </p>
        </article>
      ))}
      <style jsx>{`
        h1 {
          margin: 0 0 0.75rem;
          font-size: 2.5rem;
          font-weight: 400;
        }
        h1 a {
          text-decoration: none;
        }
        p {
          line-height: 1.75rem;
        }
        article {
          margin: 2rem 0;
        }
      `}</style>
    </section>
  );
}
