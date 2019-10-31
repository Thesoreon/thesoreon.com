import Img from "gatsby-image"

import styled from "~/utils/styled"
import { getGoldenRatio } from "~/utils/golden-ratio-calculator"
import { LAYOUT_MEDIA_QUERY_TABLET, NAVIGATION_PADDING } from "~/css/constants"

export const NavigationWrapper = styled.div`
  position: fixed;
  right: 0;

  background-color: ${props => props.theme.bg.primary};
  color: ${props => props.theme.fg.primary};
  transition: ${props => props.theme.transitionTheme};

  width: ${getGoldenRatio(100, "B")}%;
  height: 100%;

  padding: ${NAVIGATION_PADDING};

  @media (max-width: ${LAYOUT_MEDIA_QUERY_TABLET}) {
    position: static;
    width: 100%;
    height: auto;
  }
`

export const Avatar = styled(Img)`
  border-radius: 100%;
`
