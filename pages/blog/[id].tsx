import React from "react";
import client from "../../apollo-client";
import Header from "../../components/Header";
import { SINGLE_BLOGS_QUERY } from "../../graphqlcms/Query";
import { Markup } from "interweave";
import Footer from "../../components/Fotter";

const Blog = ({ data }: any) => {
  const post: any = data?.data.post;
  return (
    <div>
      <Header title="Blog Page" />
      <main className="px-8 min-h-[84vh] xl:px-0 py-6 pt-8 max-w-[1370px] mx-auto">
        {/* markup */}

        {/* createror details */}
        <div className="text-center pb-4">
          {/* name */}
          <h1 className="text-3xl font-semibold">{post.author.name}</h1>
        </div>

        <Markup content={post.content.html} />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;

export async function getServerSideProps(context: any) {
  const result: any = await client.query({
    query: SINGLE_BLOGS_QUERY,
    variables: {
      slug: context.params.id,
    },
  });

  return {
    props: {
      data: result,
    },
  };
}
