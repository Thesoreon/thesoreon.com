import React from "react"
import styled from "~/utils/styled"

// TODO: Extract properties values to constants

export const Paragraph = styled.p`
  line-height: 1.5;
`

export const Heading: React.FC<{
  heading: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  fontSize: number
}> = ({ heading, children }) => {
  const HeadingComponent = styled(heading)`
    margin: 16px 0;
  `

  return <HeadingComponent>{children}</HeadingComponent>
}

export const UnorderedList = styled.ul`
  list-style-type: disc;
  padding-left: 24px;
  margin: 8px 0;

  & li {
    margin: 4px 0;
  }
`

export const OrderedList = styled.ol`
  list-style-type: decimal;
  padding-left: 24px;
  margin: 8px 0;

  & li {
    margin: 4px 0;
  }
`

export const Blockquote = styled.blockquote`
  background-color: ${props => props.theme.bg.primary};
  color: ${props => props.theme.fg.primary};
  transition: ${props => props.theme.transitionTheme};

  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

  padding: 8px;
  padding-left: 12px;
  margin: 24px 0;
  border-radius: 4px;
  border-left: 4px solid blue;
  font-style: italic;
`
