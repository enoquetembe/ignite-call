import { Button, Heading, MultiStep, Text } from '@enoque-ui/react'
import { Container, Header } from '../styles'
import { ArrowRight, Check } from 'phosphor-react'
import { useRouter } from 'next/router'
import { AuthError, ConnectBox, ConnectItem } from './styles'
import { signIn, useSession } from 'next-auth/react'

export default function ConnectCalendar() {
  const router = useRouter()
  const session = useSession()

  const isSignedIn = session.status === 'authenticated'

  console.log(session)

  const hasAuthError = !!router.query.error
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
          {isSignedIn ? (
            <Button size="sm" disabled>
              Connected
              <Check />
            </Button>
          ) : (
            <Button
              variant="secondary"
              siz="sm"
              onClick={() => signIn('google')}
            >
              Connect
              <ArrowRight />
            </Button>
          )}
        </ConnectItem>

        {hasAuthError && (
          <AuthError size="sm">
            Failed to connect to Google, make sure you enable Google Calendar
            access permissions.
          </AuthError>
        )}

        <Button type="submit" disabled>
          Next step
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
