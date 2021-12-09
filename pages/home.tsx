import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import tw from "twin.macro";

import Hero from "../src/components/HomePage/Hero";

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;
  const StyledDiv = tw.div`min-h-screen text-secondary-500 p-8 overflow-hidden`;

  return (
    <>
      <Head>
        <title>Track Your Expenses - TraXpen$e</title>
      </Head>
      <StyledDiv>
        <Hero roundedHeaderButton={true} />
      </StyledDiv>
    </>
  );
};
