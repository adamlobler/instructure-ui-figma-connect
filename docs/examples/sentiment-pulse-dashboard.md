---
describes: SentimentPulseDashboard
---

# Sentiment Pulse Dashboard

This page demonstrates a complete instructor dashboard built with Instructure UI components, converted from an HTML prototype. The dashboard includes:

- Sidebar navigation
- Real-time student sentiment visualization
- Actionable insights
- Course announcements and quick links
- Modal for detailed sentiment post views

## Example

```js
---
type: example
---
const Example = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Open Dashboard in Fullscreen Modal
      </Button>
      <Modal
        open={isOpen}
        onDismiss={() => setIsOpen(false)}
        size="fullscreen"
        label="Sentiment Pulse Dashboard"
        shouldCloseOnDocumentClick
      >
        <Modal.Body>
          <SentimentPulseDashboard />
        </Modal.Body>
      </Modal>
    </>
  )
}

render(<Example />)
```

## Components Used

- **View** - Layout containers and spacing
- **Card** - Content containers with proper padding and shadows
- **Button** - Primary and secondary actions
- **Link** - Navigation links
- **Select** - Filter dropdowns
- **DateInput** - Date range filters
- **Modal** - Detailed sentiment post views
- **Grid** - Responsive layout
- **Flex** - Flexible layouts
- **Text** & **Heading** - Typography
- **List** - Assignment and announcement lists
- **Badge** - Confidence indicators
- **IconButton** - Action buttons with icons
- **Tooltip** - Helpful hints

## Custom Components

The **SentimentBarChart** component is a custom visualization built using:

- **View** components for layout
- **sharedTokens** for spacing, borders, and border radius
- Custom colors for sentiment types (green for positive, red for negative, etc.)

This demonstrates how to create custom components when no suitable instui component exists, while still using sharedTokens for consistent styling.
