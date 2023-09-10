import React, { type FC } from 'react'

const Header: FC<{ title: string }> = (props) => {
  console.log(111)
  return (
    <h4>
      {props.title}
      <div>我是头部</div>
    </h4>
  )
}

export default Header
