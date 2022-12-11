/* eslint-disable @typescript-eslint/no-unused-vars */
import React from '../'

export interface AsyncWrapperProps<T> {
  data: Promise<T>
  children: (props: T) => JSX.Element
}

export default function AsyncWrapper<T>(props: AsyncWrapperProps<T>) {
  return <></>
}
