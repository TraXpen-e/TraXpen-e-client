import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import "styled-components/macro";
import {
  SectionHeading,
  Subheading as SubheadingBase,
  PrimaryButton as PrimaryButtonBase,
} from "../../../styles/style";

import Image from "next/image";

import {
  IHome_QualityWorkProps,
  IHome_QualityWork_ImageProps,
  IHome_QualityWork_TextColumnProps,
  IHome_QualityWork_PrimaryButtonProps,
} from "@interfaces";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)(
  (props: IHome_QualityWork_TextColumnProps) => [
    tw`md:w-6/12 mt-16 md:mt-0`,
    props.textOnLeft
      ? tw`md:mr-12 lg:mr-16 md:order-first`
      : tw`md:ml-12 lg:ml-16 md:order-last`,
  ]
);

const DemoImageContainer = styled.div((props: IHome_QualityWork_ImageProps) => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const DemoImage = styled(Image)``;

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const PrimaryButton = styled(PrimaryButtonBase)(
  (props: IHome_QualityWork_PrimaryButtonProps) => [
    tw`mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`,
    props.buttonRounded && tw`rounded-full`,
  ]
);

const QualityWork: React.FC<IHome_QualityWorkProps> = ({
  subheading = "Our Expertise",
  heading = (
    <>
      Designed & Developed by <span tw="text-primary-500">Professionals.</span>
    </>
  ),
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  primaryButtonText = "Learn More",
  primaryButtonUrl = "https://timerse.com",
  imageSrc = "/assets/images/team-illustration-1.svg",
  buttonRounded = true,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  imageCss = null,
  textOnLeft = true,
}) => {
  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <DemoImageContainer
            imageBorder={imageBorder}
            imageShadow={imageShadow}
            imageRounded={imageRounded}
            css={imageCss}
          >
            <DemoImage src={imageSrc} width={574} height={368} />
          </DemoImageContainer>
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Subheading>{subheading}</Subheading>
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <PrimaryButton
              buttonRounded={buttonRounded}
              as="a"
              href={primaryButtonUrl}
            >
              {primaryButtonText}
            </PrimaryButton>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};

export default QualityWork;
