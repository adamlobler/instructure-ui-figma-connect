/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 - present Instructure, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { forwardRef } from 'react'

import { useStyle } from '@instructure/emotion'
import { passthroughProps } from '@instructure/ui-react-utils'

import type { CardProps, CardSize, CardContentType } from './props'
import { allowedProps } from './props'
import generateStyle from './styles'

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
const Card = forwardRef<HTMLElement, CardProps>((props, ref) => {
  const {
    as: ElementType = 'div',
    children,
    elementRef,
    size = 'medium',
    contentType = 'content',
    ...rest
  } = props

  const styles = useStyle({
    generateStyle,
    themeOverride: undefined,
    params: {
      size,
      contentType
    } as {
      size: CardSize
      contentType: CardContentType
    },
    componentId: 'Card',
    displayName: 'Card'
  })

  const handleElementRef = (el: HTMLElement | null) => {
    if (typeof elementRef === 'function') {
      elementRef(el)
    }

    if (typeof ref === 'function') {
      ref(el)
    }
  }

  return (
    <ElementType
      {...passthroughProps(rest)}
      css={styles?.card}
      ref={handleElementRef as React.RefCallback<HTMLElement>}
      data-cid="Card"
    >
      {children}
    </ElementType>
  )
})

Card.displayName = 'Card'

// attach metadata in the same way as class-based components
;(Card as unknown as { allowedProps: typeof allowedProps }).allowedProps =
  allowedProps
;(Card as unknown as { componentId: string }).componentId = 'Card'

export default Card
export { Card }
