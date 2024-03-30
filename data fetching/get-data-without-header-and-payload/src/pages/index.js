// import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";

// const inter = Inter({ subsets: ["latin"] });
export const getStaticProps = async () => {
  // const res = await fetch("https://jsonplaceholder.typicode.com/users",{ cache: 'no-store' });
  // const data = await res.json();

  const resInCache = await fetch("https://jsonplaceholder.typicode.com/users");
  const cachedata = await resInCache.json();
  return {
    props: {
      // people: data,
      isCached: cachedata
    },
  };
};
export default function Home({people,isCached}) {
  return (
    <>
      {/* <ul>
        {
          people.map((user)=>{
            return(<li key={user.id}>{user.name}</li>)
          })
        }
      </ul> */}
      <dl >
        {
          isCached.map((user)=>{
            return(<li key={user.id}>{user.name}</li>)
          })
        }
      </dl>
    </>
  );
}
