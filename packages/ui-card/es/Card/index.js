import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties'
const _excluded = ['as', 'children', 'elementRef', 'size', 'contentType']
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
import { allowedProps } from './props.js'
import generateStyle from './styles.js'
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
import { jsx as _jsx } from '@emotion/react/jsx-runtime'
const Card = /*#__PURE__*/ forwardRef((props, ref) => {
  const _props$as = props.as,
    ElementType = _props$as === void 0 ? 'div' : _props$as,
    children = props.children,
    elementRef = props.elementRef,
    _props$size = props.size,
    size = _props$size === void 0 ? 'medium' : _props$size,
    _props$contentType = props.contentType,
    contentType =
      _props$contentType === void 0 ? 'content' : _props$contentType,
    rest = _objectWithoutProperties(props, _excluded)
  const styles = useStyle({
    generateStyle,
    themeOverride: void 0,
    params: {
      size,
      contentType
    },
    componentId: 'Card',
    displayName: 'Card'
  })
  const handleElementRef = (el) => {
    if (typeof elementRef === 'function') {
      elementRef(el)
    }
    if (typeof ref === 'function') {
      ref(el)
    }
  }
  return _jsx(ElementType, {
    ...passthroughProps(rest),
    css: styles === null || styles === void 0 ? void 0 : styles.card,
    ref: handleElementRef,
    'data-cid': 'Card',
    children: children
  })
})
Card.displayName = 'Card'

// attach metadata in the same way as class-based components
Card.allowedProps = allowedProps
Card.componentId = 'Card'
export default Card
export { Card }
