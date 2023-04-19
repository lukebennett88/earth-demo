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
      alignX="center"
      sx={{
        root: {
          "background-color": "surfaceSecondary",
          "justify-content": "center",
        },
      }}
      styles={{
        root: {
          minHeight: "100vh",
        },
      }}
    >
      <Stack
        as="form"
        alignX="stretch"
        gap="32"
        sx={{
          root: {
            "background-color": "scene",
            "padding-inline": "48",
            "padding-block": "32",
            "border-radius": "medium",
            width: "full",
          },
        }}
        styles={{
          root: {
            maxWidth: 400,
          },
        }}
      >
        <Stack gap="8" alignX="center">
          <Heading as="h1" typography="heading.3">
            Welcome back
          </Heading>
          <Text tone="secondary">Enter your account details</Text>
        </Stack>
        <Stack gap="16" alignX="stretch">
          <Field label="Email">
            <TextInput type="email" />
          </Field>
          <Field label="Password">
            <TextInput type="password" />
          </Field>
        </Stack>
        <Stack gap="12" alignX="stretch">
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
