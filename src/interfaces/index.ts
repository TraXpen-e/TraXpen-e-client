import React from "react";

export interface PropType {
  color?: string;
  center?: boolean;
  marginTopBtm?: boolean;
}

// Landing Page Interfaces start
export interface IHeaderProps {
  roundedHeaderButton?: boolean;
  logoLink?: React.ReactComponentElement<any>;
  links?: Array<React.ReactComponentElement<any>>;
  className?: string;
  collapseBreakpointClass?: string;
}

export interface IHome_FeatureProps {
  cards?:
    | {
        imageSrc?: string;
        title?: string;
        description?: string;
      }[];
  heading?: any;
  subheading?: any;
  description?: string;
}

export interface IHome_QualityWork_ImageProps {
  imageRounded?: boolean;
  imageBorder?: boolean;
  imageShadow?: boolean;
}

export interface IHome_QualityWork_TextColumnProps {
  textOnLeft?: boolean;
}
export interface IHome_QualityWork_PrimaryButtonProps {
  buttonRounded?: boolean;
}

export interface IHome_QualityWorkProps {
  subheading?: any;
  heading?: any;
  description?: string;
  primaryButtonText?: string;
  primaryButtonUrl?: string;
  imageSrc?: string;
  buttonRounded?: boolean;
  imageRounded?: boolean;
  imageBorder?: boolean;
  imageShadow?: boolean;
  imageCss?: any;
  textOnLeft?: boolean;
}

export interface IHome_FeatureWithSteps_MacImageProps {
  imageRounded?: boolean;
  imageBorder?: boolean;
  imageShadow?: boolean;
}

export interface IHome_FeatureWithSteps_TextColumnProps {
  textOnLeft?: boolean;
}

export interface IHome_FeatureWithStepsProps {
  subheading?: any;
  heading?: any;
  imageSrc?: string;
  imageRounded?: boolean;
  imageBorder?: boolean;
  imageShadow?: boolean;
  textOnLeft?: boolean;
  steps?: {
    heading?: string;
    description?: string;
  }[];
}

export interface IHome_Values_ImageContainerProps {
  imageRounded?: boolean;
  imageBorder?: boolean;
  imageShadow?: boolean;
}

export interface IHome_Values_TextColumnProps {
  textOnLeft?: boolean;
}

export interface IHome_Values_FeatureIconContainerProps {
  iconRoundedFull?: boolean;
  iconFilled?: boolean;
}

export interface IHome_Values_PrimaryButtonProps {
  buttonRounded?: boolean;
}

export interface IHome_ValuesProps {
  subheading?: any;
  heading?: any;
  description?: string;
  primaryButtonText?: string;
  primaryButtonUrl?: string;
  imageSrc?: string;
  buttonRounded?: boolean;
  imageRounded?: boolean;
  imageBorder?: boolean;
  imageShadow?: boolean;
  textOnLeft?: boolean;
  features?: {
    Icon?: any;
    title?: string;
    description?: string;
    iconContainerCss?: any;
  }[];
  iconRoundedFull?: boolean;
  iconFilled?: boolean;
  iconContainerCss?: any;
}

export interface IHome_Pricing_PlanProps {
  featured?: boolean;
}

export interface IHome_PricingProps {
  subheading?: any;
  heading?: any;
  description?: string;
  plans?: {
    name?: string;
    price?: string;
    duration?: string;
    mainFeature?: string;
    features?: string[];
    featured?: boolean;
  }[];
  primaryButtonText?: string;
}
// Landing Page Interfaces end

export interface IFormValue {
  username?: string;
  email?: string;
  password?: string;
}

export interface IPostData {
  url: string;
  data?: any;
  options?: object;
}
