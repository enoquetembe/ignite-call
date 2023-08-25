import { Avatar, Heading, Text } from '@enoque-ui/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { prisma } from '@/lib/prisma'
import { Container, UserHeader } from './styles'
import { ScheduleForm } from './ScheduleForm'

export default function Schedule() {
  return (
    <>
      <Container>
        <UserHeader>
          <Avatar src="https://github.com/enoquetembe.png" alt="enoquetembe" />
          <Heading>Enoque Tembe</Heading>
          <Text>CEO @Room</Text>
        </UserHeader>

        <ScheduleForm />
      </Container>
    </>
  )
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [],
//     fallback: 'blocking',
//   }
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const username = String(params?.username)

//   const user = await prisma.user.findUnique({
//     where: {
//       username,
//     },
//   })

//   if (!user) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     props: {
//       user: {
//         name: user.name,
//         bio: user.bio,
//         avatarUrl: user.avatar_url,
//       },
//     },
//     revalidate: 60 * 60 * 24, // 1 day
//   }
// }
