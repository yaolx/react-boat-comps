import React from 'react'
import styled from 'styled-components'
import clsx from 'clsx'

type Props = {
  children: React.ReactNode
  /**
   * @description       样式类型
   * @default           'default'
   */
  type?: 'primary' | 'default'
  className?: string
}
const StyledButton = styled.button`
  color: inherit;
  cursor: pointer;
  margin: 0;
  display: inline-flex;
  box-sizing: border-box;
  outline: 0;
  position: relative;
  align-items: center;
  user-select: none;
  vertical-align: middle;
  -moz-appearance: none;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  font-weight: 400;
  white-space: nowrap;
  background-image: none;
  transition: all 0.3s ease;
  user-select: none;
  touch-action: manipulation;
  padding: 4px 16px;
  font-size: 14px;
  border-radius: 2px;
  border: 1px solid transparent;
  height: 32px;
  &.default {
    background-color: #fff;
    border-color: #eee;
    &.mobile:active {
      background-color: rgba(0, 0, 0, 0.1);
    }
    &.danger,
    &.danger:hover,
    &.danger:active {
      color: #ff4d4f;
      border-color: #ff4d4f;
    }
  }
  &.primary {
    color: #fff;
    background-color: #004bcc;
    border-color: #004bcc;
    &.ghost,
    &.ghost:hover,
    &.ghost:active {
      background-color: transparent !important;
      &.danger {
        color: #ff4d4f;
      }
    }
    &.danger,
    &.danger:hover,
    &.danger:active {
      background-color: #ff4d4f;
      border-color: #ff4d4f;
    }
  }
  &.block {
    width: 100%;
  }
  &.circle {
    min-width: 32px;
    padding: 0;
    border-radius: 50%;
  }
  &.dashed {
    border-style: dashed;
  }
  &.disabled,
  &.disabled:hover,
  &.disabled:active {
    cursor: not-allowed;
    opacity: 0.6;
    pointer-events: none;
  }
  &.ghost,
  &.ghost:hover {
    color: #eee;
    background-color: transparent;
    border-color: #eee;
  }
`
export default (props: Props) => {
  const { children, className, type = 'default' } = props
  return <StyledButton className={clsx(className, type)}>{children}</StyledButton>
}
