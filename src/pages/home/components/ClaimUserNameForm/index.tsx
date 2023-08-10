import { Button, TextInput, Text } from '@enoque-ui/react'
import { Form, FormAnnotation } from './style'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const claimUserNameFormSchema = z.object({
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters long')
    .regex(/^([a-z\\-]+)$/i, 'Username must only contain letters and hyphens')
    .transform((username) => username.toLocaleLowerCase()),
})

type ClaimUserNameFormData = z.infer<typeof claimUserNameFormSchema>

export function ClaimUserNameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClaimUserNameFormData>({
    resolver: zodResolver(claimUserNameFormSchema),
  })

  async function handleClaimUserName(data: ClaimUserNameFormData) {
    console.log(data)
  }

  return (
    <>
      <Form as="form" onSubmit={handleSubmit(handleClaimUserName)}>
        <TextInput
          size="sm"
          prefix="enoque.com/"
          placeholder="your-username"
          {...register('username')}
        />

        <Button type="submit" size="md">
          Book
          <ArrowRight />
        </Button>
      </Form>
      <FormAnnotation>
        <Text size="sm">
          {errors.username ? errors.username.message : 'Username  is required'}
        </Text>
      </FormAnnotation>
    </>
  )
}