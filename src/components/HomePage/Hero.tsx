import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import "styled-components/macro";

import Image from "next/image";

import Navbar from "./Navbar";
import { IHeaderProps } from "../../interfaces";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;

const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;

const Actions = styled.div`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-primary-500 hover:border-gray-500`}
  }
  button {
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-primary-500 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300`}
  }
`;

const DesignIllustration = styled(Image)``;

const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;

const DecoratorBlob1 = styled(Image)``;
const DecoratorBlob1Container = styled.div`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3`} z-index: 10;
  svg {
    fill: "red";
  }
`;

const Hero: React.FC<IHeaderProps> = ({ roundedHeaderButton }) => {
  return (
    <>
      <Navbar roundedHeaderButton={roundedHeaderButton} />
      <Container>
        <TwoColumn>
          <LeftColumn>
            <Heading>
              We will help{" "}
              <span tw="text-primary-500">track your expenses.</span>
            </Heading>
            <Paragraph>
              An application designed to reduce busywork so you can focus on the
              things that matter. Sign in and start managing your expenses.
            </Paragraph>
            <Actions>
              <input type="text" placeholder="Your E-mail Address" />
              <button>Get Started</button>
            </Actions>
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <DesignIllustration
                src="/assets/images/design-illustration-2.svg"
                alt="Design Illustration"
                width={512}
                height={"368.39"}
              />
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
        <DecoratorBlob1Container>
          <DecoratorBlob1
            src="/assets/images/blob-1.svg"
            width={500}
            height={500}
          />
        </DecoratorBlob1Container>
      </Container>
    </>
  );
};

export default Hero;
