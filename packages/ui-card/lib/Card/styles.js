'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
var _uiThemes = require('@instructure/ui-themes')
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
  const paddingBySize = {
    small: sharedTokens.spacing.padding.card.sm,
    medium: sharedTokens.spacing.padding.card.md,
    large: sharedTokens.spacing.padding.card.lg
  }
  const backgroundByContentType = {
    content: sharedTokens.background.containerColor,
    nestedContainer: sharedTokens.background.containerColor
  }
  const boxShadowByContentType = {
    // Match Figma card elevation: full cards have shadow, nested containers are flat
    content: (0, _uiThemes.boxShadowObjectsToCSSString)(
      sharedTokens.boxShadow.elevation1
    ),
    nestedContainer: 'none'
  }
  return {
    card: {
      label: 'card',
      boxSizing: 'border-box',
      display: 'block',
      maxWidth: '100%',
      borderRadius: sharedTokens.legacy.radiusMedium,
      padding: paddingBySize[size],
      backgroundColor: backgroundByContentType[contentType],
      boxShadow: boxShadowByContentType[contentType]
    }
  }
}
var _default = (exports.default = generateStyle)
