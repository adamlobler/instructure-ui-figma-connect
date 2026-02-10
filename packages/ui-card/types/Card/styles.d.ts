import type { SharedTokens } from '@instructure/ui-themes'
import type { CardProps, CardStyle } from './props'
type StyleParams = {
  size: CardProps['size']
  contentType: CardProps['contentType']
}
/**
 * ---
 * private: true
 * ---
 * Generates the style object from sharedTokens and provided props.
 *
 * Card does not have its own component theme entry – it composes
 * the sharedTokens that are also used by the Figma Card component
 * (spacing, radius, shadows, surface colors).
 */
declare const generateStyle: (
  _componentTheme: unknown,
  params: StyleParams,
  sharedTokens: SharedTokens
) => CardStyle
export default generateStyle
//# sourceMappingURL=styles.d.ts.map
