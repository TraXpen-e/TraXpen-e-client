import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "@styles/style";
import Image from "next/image";

import {
  IHome_FeatureWithSteps_MacImageProps,
  IHome_FeatureWithSteps_TextColumnProps,
  IHome_FeatureWithStepsProps,
} from "@interfaces";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)(
  (props: IHome_FeatureWithSteps_TextColumnProps) => [
    tw`md:w-6/12 mt-16 md:mt-0`,
    props.textOnLeft
      ? tw`md:mr-12 lg:mr-16 md:order-first`
      : tw`md:ml-12 lg:ml-16 md:order-last`,
  ]
);

const MacImageContainer = styled.div(
  (props: IHome_FeatureWithSteps_MacImageProps) => [
    props.imageRounded && tw`rounded`,
    props.imageBorder && tw`border`,
    props.imageShadow && tw`shadow`,
  ]
);
const MacImage = styled(Image)``;

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;

const Steps = tw.ul`mt-12`;
const Step = tw.li`mt-8 flex flex-col md:flex-row items-center md:items-start`;
const StepNumber = tw.div`font-semibold text-4xl leading-none text-gray-400`;
const StepText = tw.div`mt-3 md:mt-0 md:ml-6`;
const StepHeading = tw.h6`leading-none text-xl font-semibold`;
const StepDescription = tw.p`mt-3 max-w-xs leading-loose text-sm text-gray-600 font-medium`;

const FeatureWithSteps: React.FC<IHome_FeatureWithStepsProps> = ({
  subheading = "Our Expertise",
  heading = (
    <>
      Designed & Developed by <span tw="text-primary-500">Professionals.</span>
    </>
  ),
  imageSrc = "/assets/images/team-illustration-1.svg",
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  textOnLeft = true,
  steps = null,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  const defaultSteps = [
    {
      heading: "Register",
      description: "Create an account with us using Google or Facebook.",
    },
    {
      heading: "Download",
      description: "Browse and Download the app from the marketplace.",
    },
    {
      heading: "Run",
      description: "Follow the instructions to setup.",
    },
  ];

  if (!steps) steps = defaultSteps;

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <MacImageContainer
            imageBorder={imageBorder}
            imageShadow={imageShadow}
            imageRounded={imageRounded}
          >
            <MacImage src={imageSrc} width={743} height={424} />
          </MacImageContainer>
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Subheading>{subheading}</Subheading>
            <Heading>{heading}</Heading>
            <Steps>
              {steps.map((step, index) => (
                <Step key={index}>
                  <StepNumber>
                    {(index + 1).toString().padStart(2, "0")}
                  </StepNumber>
                  <StepText>
                    <StepHeading>{step.heading}</StepHeading>
                    <StepDescription>{step.description}</StepDescription>
                  </StepText>
                </Step>
              ))}
            </Steps>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};

export default FeatureWithSteps;
