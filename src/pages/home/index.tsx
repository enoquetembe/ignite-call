import { Heading, Text } from '@enoque-ui/react'
import { Container, Hero, Preview } from './style'

import calendar from '@/assets/calendar.png'
import Image from 'next/image'
import { ClaimUserNameForm } from './components/ClaimUserNameForm'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl" as="h1">
          Simplified Scheduling
        </Heading>

        <Text size="lg">
          Connect your calendar and let people book appointments in their free
          time.
        </Text>

        <ClaimUserNameForm />
      </Hero>

      <Preview>
        <Image src={calendar} alt="" height={400} quality={100} priority />
      </Preview>
    </Container>
  )
}
