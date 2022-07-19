import { useQuery } from "@apollo/client";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import SingleBlog from "../components/SingleBlog";
import { BLOGS_QUERY } from "../graphqlcms/Query";

const Home: NextPage = () => {
  const { loading, error, data } = useQuery(BLOGS_QUERY);

  return (
    <div className="">
      <Header title="Home Page" />
      <main className="px-8 xl:px-0 py-6 pt-8 max-w-[1370px] mx-auto">
        {/* top section */}
        <div className="space-y-3 pb-5">
          <h1 className="text-6xl text-black font-extrabold">Latest</h1>
          <p className="text-gray-400 text-lg">Our latest Blog posts.</p>
        </div>

        {/* all post card */}
        <div className="border-t">
          {data?.posts?.map((item: any) => (
            <SingleBlog data={item} key={item.id} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;

// export const getStaticProps: GetStaticProps = async() => {
//   const
//   return {
//     props: {

//     },
//   };
// };
