import React from 'react'
import styled from 'styled-components'
import { palette, size } from 'styled-theme'

import {
  Block,
  Paragraph,
  IconLink,
  IconButton,
  LogoImage,
  Tooltip,
} from 'components'

const Wrapper = styled(Block)`
  display: flex;
  justify-content: center;
  padding: 2rem;
  box-sizing: border-box;
  @media screen and (max-width: 640px) {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }
`

const InnerWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: ${size('maxWidth')};
  @media screen and (max-width: 640px) {
    flex-wrap: wrap;
  }
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;
  &:first-child {
    flex: none;
  }
  @media screen and (max-width: 640px) {
    padding: 0.25rem;
    width: 100%;
  }
`

const Text = styled(Paragraph)`
  color: ${palette('grayscale', 3, true)};
  font-weight: 300;
  font-size: 1.35rem;
  line-height: 1.35em;
  width: 100%;
  letter-spacing: 0.05em;
  @media screen and (max-width: 640px) {
    text-align: center;
    font-size: 1rem;
  }
`

const ButtonGroup = styled.div`
  margin-top: 2rem;
  display: flex;
  > :not(:first-child) {
    margin-left: 0.5rem;
  }
`

const Instructions = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  margin-top: 2rem;
  @media screen and (max-width: 640px) {
    margin-top: 1rem;
  }
`

const Hero = (props) => {
  return (
    <Wrapper opaque reverse {...props}>
      <InnerWrapper>
        <Section>
          <LogoImage height={265} />
          <ButtonGroup>
            <Tooltip reverse data-title="Sponsor" position="bottom">
              <IconButton icon="spoon" transparent to="/spoon">Spoon</IconButton>
            </Tooltip>
            <Tooltip reverse data-title="Volunteer" position="bottom">
              <IconButton icon="account" transparent to="/ser" right>Ser</IconButton>
            </Tooltip>
          </ButtonGroup>
        </Section>
        <Section>
          <Text>
            <strong>Spoonser</strong> is a not-for-profit Asheville start-up focused on breathing life into volunteer based efforts by giving people a way to fund volunteering. This allows you to help your community even if you cannot afford the time to volunteer, or want to volunteer but cannot afford the cost of giving up valuable time.
          </Text>
          <Instructions>
            <IconLink
              icon="docs"
              right
              reverse
              href="/about"
            >
              Learn more
            </IconLink>
          </Instructions>
        </Section>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Hero
