import React from 'react'
import styled from 'styled-components'

import { Feature, Link, Heading, Paragraph } from 'components'

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

const FeatureList = ({ ...props }) => (
  <div {...props}>
    <StyledHeading>What is SpoonSer</StyledHeading>
    <Description>
      SpoonSer is a not-for-profit Asheville start-up focused on breathing life into volunteer based efforts by giving people a way to fund volunteering. This allows you to help your community even if you cannot afford the time to volunteer, or want to volunteer but cannot afford the cost of giving up valuable time.
    </Description>
    <Grid>
      <StyledFeature
        icon="react"
        title="Support your local community"
      >
        Use your money to directly make an impact on your local community today by sponsoring someone so that they can use their time to volunteer without worrying about not being able to support themselves at the same time.
      </StyledFeature>
      <StyledFeature
        icon="react"
        title="Volunteer"
      >
        Have a place you want to volunteer at, but are limited by the fact that you cannot support yourself if you were to volunteer? Then SpoonSer was designed with you in mind!
      </StyledFeature>
      <StyledFeature
        icon="react"
        title="Add your Organization"
      >
        Are you an organizer at a non-profit that takes volunteers and want to add your Org as a place you need volunteers at? Sign up today to put yourselves on the map!
      </StyledFeature>
    </Grid>
    <StyledHeading>How to get started</StyledHeading>
    <Description>Want to get started? Below are are a few options that we offer.</Description>
    <Grid>
      <StyledFeature
        icon="react"
        title="Fund a location"
      >
        Become a Spoon to your local community by defining a location that you want someone to volunteer at. Any time a volunteer works here they will be placed into the pool based on the amount of time they spent volunteering, and at the end of your defined amount of time the fund will be split proportionally amongst all who worked there. You can also set minimum and maximum caps for a location.
      </StyledFeature>
      <StyledFeature
        icon="react"
        title="Volunteer while being funded"
      >
        Become a Ser to your local community signing up and attaching yourself to a location (or a few!). Volunteer and work at that location, and you'll get a fund based on how long you work there! We use location trackin gon your phone, plus the requirement of a signed copy of your hours worked at the location from an official to track your time.
      </StyledFeature>
      <StyledFeature
        icon="react"
        title="Fund a volunteer"
      >
        Become a Spoon to your local community by funding a volunteer directly. You will have a handful of defining options, such as a set of locations you'd like for them to volunteer at, how many volunteer hours you'd like for them to work within a defined time, a minimum or maximum cap, or you could just set an hourly rate. At the end of the pay period the calculated fund is allotted to the volunteer.
      </StyledFeature>
    </Grid>
  </div>
)

export default FeatureList
