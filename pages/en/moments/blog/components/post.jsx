import React from "react";
import Markdown from "react-markdown";
import Layout from "../../layout";

export default function Post({ post }) {
  return (
    <article>
      <header>
        <h1>{post.fields.title}</h1>
        <small>
          <p>Published: {post.fields.publishDate.substring(0, 10)}</p>
        </small>
      </header>
      <section>
        <Markdown source={post.fields.body} escapeHtml={true} />
      </section>
      <style jsx>{`
        header {
          margin-top: 4rem;
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid #949499;
        }
        header h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        section :global(h1) {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        section :global(h2) {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        section :global(p) {
          line-height: 1.75rem;
          margin: 2rem 0;
        }
        section :global(img) {
          max-width: 100%;
        }
        section :global(blockquote) {
          border-left: 0.5rem solid #949499;
          margin-left: 0;
          padding: 0 2rem;
          color: #646469;
        }
        section :global(li) {
          margin: 1rem 0;
          line-height: 1.5rem;
        }
        section :global(hr) {
          border: none;
          background: #949499;
          height: 1px;
        }
      `}</style>
    </article>
  );
}
