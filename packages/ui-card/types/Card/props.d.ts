import type { ComponentStyle } from '@instructure/emotion'
import type {
  AsElementType,
  OtherHTMLAttributes
} from '@instructure/shared-types'
type CardSize = 'small' | 'medium' | 'large'
type CardContentType = 'content' | 'nestedContainer'
type CardOwnProps = {
  /**
   * The element type to render as the card root.
   */
  as?: AsElementType
  /**
   * Provide a reference to the underlying HTML element.
   */
  elementRef?: (element: HTMLElement | null) => void
  /**
   * Card contents.
   */
  children?: React.ReactNode
  /**
   * Controls internal padding via sharedTokens:
   * - small  -> spacing.padding.card.sm
   * - medium -> spacing.padding.card.md
   * - large  -> spacing.padding.card.lg
   */
  size?: CardSize
  /**
   * Content type of the Card.
   * Matches the Figma Card `contentType` prop.
   * - `content` – default surface Card
   * - `nestedContainer` – a lower-emphasis container used inside other Cards/layouts.
   */
  contentType?: CardContentType
}
type PropKeys = keyof CardOwnProps
type AllowedPropKeys = Readonly<Array<PropKeys>>
type CardProps = CardOwnProps & OtherHTMLAttributes<CardOwnProps>
type CardStyle = ComponentStyle<'card'>
declare const allowedProps: AllowedPropKeys
export type { CardProps, CardSize, CardContentType, CardStyle }
export { allowedProps }
//# sourceMappingURL=props.d.ts.map
