import React from "react";
import Head from 'next/head'
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>404 - ERROR</title>
      </Head>

      <div className="error_404">
        <h1>404</h1>
        <h2>This page does not exist</h2>
      </div>
    </>
  );
};

export default NotFoundPage;
