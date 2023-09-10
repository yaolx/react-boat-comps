import React, { type FC } from 'react'

interface FooProps {
  /**
   * @description 属性描述
   * @default "默认值"
   */
  title?: string
}

const Foo: FC<FooProps> = (props) => {
  console.log(111)
  return (
    <h4>
      {props.title}
      <div>111</div>
    </h4>
  )
}

export default Foo
