import React from '../'
import { AsyncNode } from 'src/types'
import { renderAsync } from '.'

export default async function renderAsyncElement(
  asyncNodesProp: AsyncNode[],
  contentsProp: string,
) {
  let resContents = contentsProp

  for (const node of asyncNodesProp) {
    const { tag, data: promiseData, renderer: Component } = node

    const data = await promiseData

    const contens = await renderAsync(<Component {...data} />)

    resContents = resContents.replace(tag, contens)
  }

  return resContents
}
