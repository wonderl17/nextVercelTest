import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import { useEffect, useState } from "react";
import axios from "axios";

export default function FirstPost(props) {
  console.log(props);
  const [age, setAge] = useState(0);
  const [info, setInfo] = useState("");

  useEffect(() => {
    setInfo(props.info);
  }, []);

  return (
    <Layout>
      <Head>
        <title>first post</title>
      </Head>
      <h1>First Post</h1>
      <h2>age: {age}</h2>
      <h2>info: {props.info.toString()}</h2>
      <p>Hello this is wonderl's personal website ! </p>
      <p>Welcome !</p>
    </Layout>
  );
}

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = await axios.get("http://localhost:4000");

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      info: data.data,
    },
  };
}
