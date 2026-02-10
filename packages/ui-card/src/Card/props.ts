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

const allowedProps: AllowedPropKeys = [
  'as',
  'children',
  'elementRef',
  'size',
  'contentType'
]

export type { CardProps, CardSize, CardContentType, CardStyle }
export { allowedProps }
