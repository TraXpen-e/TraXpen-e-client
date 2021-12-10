export interface PropType {
  color?: string
  center?: boolean
  marginTopBtm?: boolean
}


export interface IHeaderProps {
  roundedHeaderButton?: boolean,
  logoLink?: React.ReactComponentElement<any>,
  links?: Array<React.ReactComponentElement<any>>,
  className?: string,
  collapseBreakpointClass?: string
}

export interface IHomeFeatureProps{
  cards: string[],
  heading: string,
  subheading : string,
  description : string,
}
export interface IFormValue {
  username?: string
  email?: string
  password?: string
}

export interface IPostData {
  url: string
  data?: any
  options?: object
}
