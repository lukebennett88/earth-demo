import {
  Button,
  ButtonLink,
  Field,
  Heading,
  Stack,
  Text,
  TextInput,
} from "@adaptavant/core";

export default function Home() {
  return (
    <Stack
      as="main"
      className="
        bg-accent-secondary
        items-center
        justify-center
        min-h-screen
      "
    >
      <Stack
        as="form"
        className="max-w-[400px] bg-neutral px-12 py-8 rounded-6px w-full gap-8 items-stretch"
      >
        <Stack className="gap-2 items-center">
          <Heading as="h1" typography="heading.3">
            Welcome back
          </Heading>
          <Text tone="secondary">Enter your account details</Text>
        </Stack>
        <Stack className="items-stretch gap-4">
          <Field label="Email">
            <TextInput type="email" />
          </Field>
          <Field label="Password">
            <TextInput type="password" />
          </Field>
        </Stack>
        <Stack className="gap-3 items-stretch">
          <Button size="large" type="submit">
            Sign in
          </Button>
          <ButtonLink size="large" href="#" variant="neutralSecondary">
            Forgot password
          </ButtonLink>
        </Stack>
      </Stack>
    </Stack>
  );
}
