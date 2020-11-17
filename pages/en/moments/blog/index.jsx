import Layout from "../layout";
import PostList from "./utils/postList";
import Styles from "./index.module.scss";

export default function Blog({ posts }) {
  return (
    <Layout>
      <PostList posts={posts} />
    </Layout>
  );
}

export async function getStaticProps() {
  const client = require("contentful").createClient({
    space: "k3lzzeje7lbt",
    accessToken: "aNQ8pPs6CvG0rsd9TsQTY7Z2Now0DoOFazPM67UIaNU",
  });

  const posts = await client
    .getEntries({ content_type: "pYoUreBlogPostsEn" })
    .then((response) => response.items);

  return {
    props: {
      posts,
    },
  };
}
