import Head from "next/head";
import React, { FC } from "react";

interface Props {
  title?: string;
  pageDescription?: string;
  children?: React.ReactNode;
}
const origin = typeof window === "undefined" ? "" : window.location.origin;

export const BaseLayout: FC<Props> = ({
  title = "Frontend Mentor - Intro component with sign up form solution",
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="og:title" content={title} />
        <meta
          property="og:image"
          content={`${origin}/img/desktop-preview.jpg`}
        />
      </Head>

      <main
        style={{
          height: "101vh",
          width: "100vw",
          position: "absolute",
          top: "0",
          left: "0",
          letterSpacing: 0,
          wordSpacing: 0,
          fontSize: 0,

          zIndex: "-1",
        }}
      >
        {children}
      </main>
    </>
  );
};
