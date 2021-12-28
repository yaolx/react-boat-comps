import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from './index'

describe('<Button />', () => {
  it('render Foo with dumi', () => {
    const msg = 'dumi'

    render(<Button>按钮</Button>)
    expect(screen.queryByText(msg)).toBeInTheDocument()
  })
})
