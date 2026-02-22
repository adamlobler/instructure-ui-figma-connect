---
describes: Card
---

### What is a Card?

Card is a self-contained UI container that groups related content and actions into a visually distinct surface. It uses the same shared design tokens as the Figma Card component (spacing, radius, shadows, and surface colors), so designs and code stay in sync.

Use Card to:

- Group form sections (e.g. login form, settings)
- Create content blocks on dashboards or detail pages
- Nest lower-emphasis containers inside other cards

### Size

Controls internal padding via shared spacing tokens: `paddingCardSmall`, `paddingCardMedium`, `paddingCardLarge`.

```js
---
type: example
---
<View as="div">
<View as="div" padding="small">
    <Card size="small">
      <Text as="p">Small card – less padding</Text>
    </Card>
  </View>
<View as="div" padding="small">
    <Card size="medium">
      <Text as="p">Medium card (default)</Text>
    </Card>
  </View>
<View as="div" padding="small">
    <Card size="large">
      <Text as="p">Large card – more padding</Text>
    </Card>
  </View>
</View>
```

### Content type

- **content** (default) – Primary card surface with elevation. Use for main content blocks.
- **nestedContainer** – Secondary surface, no shadow. Use for nested sections or lower-emphasis containers.

```js
---
type: example
---
<View as="div"  display="flex" gap="large">
<View as="div" padding="small">
  <Card size="medium" contentType="content">
    <Heading level="h3" as="h3">Primary card</Heading>
    <Text as="p">This card uses the primary surface and has a light shadow.</Text>
  </Card>
  </View>
  <View as="div" padding="small">
  <Card size="medium" contentType="nestedContainer">
  <View
    background="secondary"
    padding="small"
    borderRadius="small"
    as="div"
  >
    <Heading level="h3" as="h3">Nested container</Heading>
    <Text as="p">This card uses the secondary surface and no shadow.</Text>
    <Text color="secondary" size="small">
      The dashed border is for demo only to show the boundaries of the nested container's background.
    </Text>
  </View>
  </Card>
    </View>
</View>
```

### Example: Login form in a card

```js
---
type: example
---
<View as="div" maxWidth="400px">
  <Card size="medium" contentType="content">
    <Heading level="h2" as="h2">Log in</Heading>
    <Text as="p" size="small" color="secondary">
      Enter your credentials to access your account.
    </Text>
    <View margin="medium 0 0 0">
      <TextInput
        renderLabel="Email address"
        placeholder="you@example.com"
      />
    </View>
    <View margin="small 0 0 0">
      <TextInput
        renderLabel="Password"
        type="password"
        placeholder="Enter your password"
      />
    </View>
    <View margin="medium 0 0 0">
      <Button color="primary">Log in</Button>
    </View>
  </Card>
</View>
```
