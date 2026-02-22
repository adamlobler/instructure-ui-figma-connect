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

import { boxShadowObjectsToCSSString } from '@instructure/ui-themes'
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
const generateStyle = (_componentTheme, params, sharedTokens) => {
  const size = params.size || 'medium'
  const contentType = params.contentType || 'content'

  // Base card padding (used by nestedContainer). Content adds inner-frame padding per Figma (two frames).
  const paddingCardBySize = {
    small: sharedTokens.spacing.padding.card.sm,
    medium: sharedTokens.spacing.padding.card.md,
    large: sharedTokens.spacing.padding.card.lg
  }
  const gapCardsBySize = {
    small: sharedTokens.spacing.general.spaceXs,
    medium: sharedTokens.spacing.general.spaceMd,
    large: sharedTokens.spacing.general.spaceLg
  }
  const paddingByContentTypeAndSize = {
    content: {
      small: `calc(${paddingCardBySize.small} + ${gapCardsBySize.small})`,
      medium: `calc(${paddingCardBySize.medium} + ${gapCardsBySize.medium})`,
      large: `calc(${paddingCardBySize.large} + ${gapCardsBySize.large})`
    },
    nestedContainer: {
      small: paddingCardBySize.small,
      medium: paddingCardBySize.medium,
      large: paddingCardBySize.large
    }
  }
  const backgroundByContentType = {
    content: sharedTokens.background.containerColor,
    nestedContainer: sharedTokens.background.containerColor
  }
  const boxShadow = boxShadowObjectsToCSSString(
    sharedTokens.boxShadow.elevation1
  )

  // Card border radius by size only (borderRadius.card.nestedContainer is for content inside the card).
  const radiusBySize = {
    small: sharedTokens.borderRadius.sm,
    medium: sharedTokens.borderRadius.md,
    large: sharedTokens.borderRadius.lg
  }

  // Min/max width by size (matches Figma Card component).
  const minWidthBySize = {
    small: '15rem',
    medium: '20rem',
    large: '30rem'
  }
  const maxWidthBySize = {
    small: '25rem',
    medium: '40rem',
    large: '60rem'
  }
  return {
    card: {
      label: 'card',
      boxSizing: 'border-box',
      display: 'block',
      minWidth: minWidthBySize[size],
      maxWidth: maxWidthBySize[size],
      borderRadius: radiusBySize[size],
      padding: paddingByContentTypeAndSize[contentType][size],
      backgroundColor: backgroundByContentType[contentType],
      boxShadow
    }
  }
}
export default generateStyle
