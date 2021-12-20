import tw from "twin.macro";
import styled from "styled-components";
import { PropType } from "@interfaces";

export const Anchor = tw.a`text-xs`;
export const BoldText = styled.h2(({ color }: PropType) => [
  color === "green" && tw`text-green-500`,
  tw`text-3xl font-bold  mb-2`,
]);

export const Text = styled.p(({ color, marginTopBtm }: PropType) => [
  color === "gray" && tw`text-gray-500`,
  marginTopBtm && tw`my-2`,
  tw`text-base`,
]);

export const MainDiv = styled.div(({ center }: PropType) => [
  center && tw`justify-center`,
  tw`flex flex-col  min-h-screen py-2 bg-gray-100 `,
]);

export const LogoText = styled.div`
  ${tw`text-left font-bold`};

  span {
    ${tw`text-primary-500`}
  }
`;

export const Underline = tw.div`border-2 w-10 border-green-500 inline-block mb-2`;

export const SectionHeading = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center`;
export const Subheading = tw.h5`font-bold text-primary-500`;

export const SectionDescription = tw.p`mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 max-w-xl`;

export const PrimaryButton = tw.button`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`;

export const Container = tw.div`relative`;
export const ContentWithPaddingXl = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
export const ContentWithPaddingLg = tw.div`max-w-screen-lg mx-auto py-20 lg:py-24`;
export const ContentWithVerticalPadding = tw.div`py-20 lg:py-24`;
export const Content2Xl = tw.div`max-w-screen-2xl mx-auto`;
