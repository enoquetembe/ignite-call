import { Button, Heading, MultiStep, Text, TextInput } from '@enoque-ui/react'
import { Container, Header } from '../styles'
import { ArrowRight } from 'phosphor-react'
import { useRouter } from 'next/router'
import { ConnectBox, ConnectItem } from './styles'

export default function ConnectCalendar() {
  const router = useRouter()

  return (
    <Container>
      <Header>
        <Heading> Connect Your Schedule! </Heading>
        <Text>
          Link your calendar to automatically check busy times and new events as
          they are scheduled.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>

      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>
          <Button variant="secondary" siz="sm">
            Connect
            <ArrowRight />
          </Button>
        </ConnectItem>
        <Button type="submit">
          Next step
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
