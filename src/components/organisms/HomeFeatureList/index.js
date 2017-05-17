import React from 'react'
import styled from 'styled-components'

import { Feature, Heading, Paragraph } from 'components'

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  > * {
    width: calc(50% - 2rem);
    @media screen and (max-width: 640px) {
      width: 100%;
    }
  }
`

const StyledHeading = styled(Heading)`
  text-align: center;
`

const Description = styled(Paragraph)`
  text-align: center;
  margin: 2rem;
  @media screen and (max-width: 640px) {
    margin: 1rem;
  }
`

const StyledFeature = styled(Feature)`
  margin: 1rem;
  @media screen and (max-width: 640px) {
    margin: 0;
  }
`

const HomeFeatureList = ({ ...props }) => (
  <div {...props}>
    <StyledHeading>What to do to get involved</StyledHeading>
    <Description>
      SpoonSer has a number of ways different members of the community can get involved, as listed below.
    </Description>
    <Grid>
      <StyledFeature
        icon="spoon"
        title="Fund the community"
        link="/spoon"
      > {/* eslint-disable */}
        Use your money to directly make an impact on your local community today by sponsoring someone so that they can use their time to volunteer without worrying about not being able to support themselves at the same time.
      {/* eslint-enable */}</StyledFeature>
      <StyledFeature
        icon="account"
        title="Volunteer in the community"
        link="/ser"
      > {/* eslint-disable */}
        Have a place you want to volunteer at, but are limited by the fact that you cannot support yourself if you were to volunteer? Then SpoonSer was designed with you in mind!
      {/* eslint-enable */}</StyledFeature>
    </Grid>
    <StyledHeading>How to get started</StyledHeading>
    <Description>Want to get started? Below are are a few options that we offer.</Description>
    <Grid>
      <StyledFeature
        icon="spoon"
        title="Fund a location"
        link="/spoon"
      > {/* eslint-disable */}
        Become a Spoon to your local community by defining a location that you want someone to volunteer at. Any time a volunteer works here they will be placed into the pool based on the amount of time they spent volunteering, and at the end of your defined amount of time the fund will be split proportionally amongst all who worked there. You can also set minimum and maximum caps for a location.
      {/* eslint-enable */}</StyledFeature>
      <StyledFeature
        icon="account"
        title="Volunteer while being funded"
        link="/ser"
      > {/* eslint-disable */}
        Become a volunteer to your local community by signing up and attaching yourself to a location (or a few!). Volunteer and work at that location, and you'll get a fund based on how long you work there! We use location tracking on your phone, plus the requirement of a signed copy of your hours worked at the location from an official to track your time.
      {/* eslint-enable */}</StyledFeature>
      <StyledFeature
        icon="spoon"
        title="Fund a volunteer"
        link="/spoon"
      > {/* eslint-disable */}
        Become a sponsor to your local community by funding a volunteer directly. You will have a handful of defining options, such as a set of locations you'd like for them to volunteer at, how many volunteer hours you'd like for them to work within a defined time, a minimum or maximum cap, or you could just set an hourly rate. At the end of the pay period the calculated fund is allotted to the volunteer.
      {/* eslint-enable */}</StyledFeature>
      <StyledFeature
        icon="organization"
        title="Add your Organization"
        link="organization"
      > {/* eslint-disable */}
        Are you an organizer at a non-profit that takes volunteers and want to add your Org as a place you need volunteers at? Sign up today to put yourselves on the map!
      {/* eslint-enable */}</StyledFeature>
    </Grid>
  </div>
)

export default HomeFeatureList
