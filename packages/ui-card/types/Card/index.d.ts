import type { CardSize, CardContentType } from './props'
/**
---
category: components
---

`Card` is a thin wrapper around `View` that applies the
same spacing and surface tokens used by the Figma Card
component. It does **not** introduce its own component
theme; instead it composes sharedTokens via the `View`
API (padding, borderRadius, shadow, background).
**/
declare const Card: import('react').ForwardRefExoticComponent<
  {
    as?: import('@instructure/shared-types').AsElementType
    elementRef?: (element: HTMLElement | null) => void
    children?: React.ReactNode
    size?: CardSize
    contentType?: CardContentType
  } & Omit<
    import('react').AllHTMLAttributes<
      {
        as?: import('@instructure/shared-types').AsElementType
        elementRef?: (element: HTMLElement | null) => void
        children?: React.ReactNode
        size?: CardSize
        contentType?: CardContentType
      } & Element
    >,
    | keyof {
        as?: import('@instructure/shared-types').AsElementType
        elementRef?: (element: HTMLElement | null) => void
        children?: React.ReactNode
        size?: CardSize
        contentType?: CardContentType
      }
    | 'dir'
  > & {
      dir?: 'ltr' | 'rtl'
    } & import('react').RefAttributes<HTMLElement>
>
export default Card
export { Card }
//# sourceMappingURL=index.d.ts.map
