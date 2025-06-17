import React, { Break, HorizontalRule } from '@lib'

export default function () {
  return (
    <>
      abc
      <Break />
      efg
      <Break />
      hij
      <Break lines={3} />
      klm
      <HorizontalRule />
      <HorizontalRule mark="*" />
      <HorizontalRule mark="-" />
      new line
    </>
  )
}
