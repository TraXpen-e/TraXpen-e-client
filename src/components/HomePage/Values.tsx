import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import "styled-components/macro";
import {
  SectionHeading,
  Subheading as SubheadingBase,
  PrimaryButton as PrimaryButtonBase,
} from "@styles/style";
import Image from "next/image";

import {
  FiBriefcase as BriefcaseIcon,
  FiDollarSign as MoneyIcon,
} from "react-icons/fi";
import {
  IHome_Values_TextColumnProps,
  IHome_Values_ImageContainerProps,
  IHome_Values_FeatureIconContainerProps,
  IHome_Values_PrimaryButtonProps,
  IHome_ValuesProps,
} from "@interfaces";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)((props: IHome_Values_TextColumnProps) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const ImageContainer = styled.div((props: IHome_Values_ImageContainerProps) => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-8 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Features = tw.div`mx-auto md:mx-0 flex flex-col lg:flex-row max-w-xs lg:max-w-none`;
const Feature = tw.div`mt-10 lg:mt-8 flex items-center md:items-start flex-col md:mr-8 last:mr-0`;

const FeatureHeadingContainer = tw.div`flex items-center`;
const FeatureIconContainer = styled.div`
  ${tw`mx-auto inline-block border border-primary-500 text-primary-500 text-center rounded p-2 flex-shrink-0`}
  ${(props: IHome_Values_FeatureIconContainerProps) => [
    props.iconRoundedFull && tw`rounded-full`,
    props.iconFilled && tw`border-0 bg-primary-500 text-gray-100`,
  ]}
  svg {
    ${tw`w-5 h-5`}
  }
`;
const FeatureHeading = tw.div`ml-3 font-bold text-xl`;

const FeatureDescription = tw.div`mt-4 text-center md:text-left text-gray-600 leading-relaxed`;

const PrimaryButton = styled(PrimaryButtonBase)(
  (props: IHome_Values_PrimaryButtonProps) => [
    tw`mt-12 text-sm inline-block mx-auto md:mx-0`,
    props.buttonRounded && tw`rounded-full`,
  ]
);

const Values: React.FC<IHome_ValuesProps> = ({
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
  textOnLeft = true,
  features = null,
  iconRoundedFull = true,
  iconFilled = true,
  iconContainerCss = null,
}) => {
  const defaultFeatures = [
    {
      Icon: BriefcaseIcon,
      title: "Professionalism",
      description:
        "We have the best services for you. We are always ready to help you with tracking your expenses.",
      iconContainerCss: tw`bg-teal-300 text-teal-800`,
    },
    {
      Icon: MoneyIcon,
      title: "Affordable",
      description:
        "We promise to offer you the best rate we can - at par with the industry standard.",
      iconContainerCss: tw`bg-red-300 text-red-800`,
    },
  ];

  if (!features) features = defaultFeatures;

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <ImageContainer
            imageRounded={imageRounded}
            imageBorder={imageBorder}
            imageShadow={imageShadow}
          >
            <Image src={imageSrc} height={613} width={835} />
          </ImageContainer>
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Subheading>{subheading}</Subheading>
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <Features>
              {features.map((feature, index) => (
                <Feature key={index}>
                  <FeatureHeadingContainer>
                    <FeatureIconContainer
                      iconFilled={iconFilled}
                      iconRoundedFull={iconRoundedFull}
                      css={feature.iconContainerCss || iconContainerCss}
                    >
                      {<feature.Icon />}
                    </FeatureIconContainer>
                    <FeatureHeading>{feature.title}</FeatureHeading>
                  </FeatureHeadingContainer>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </Feature>
              ))}
            </Features>

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

export default Values;
