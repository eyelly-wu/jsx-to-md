import React, {
  OderList,
  ListItem,
  UnorderedList,
  render,
  List,
} from '../../src/lib'

describe('List', () => {
  it('Order List single', () => {
    const res = render(
      <>
        <OderList>
          <ListItem>item1</ListItem>
        </OderList>
      </>,
    )

    const expectRes = '\n' + '1. item1\n' + '\n'

    expect(res).toBe(expectRes)
  })

  it('Order List multiple', () => {
    const list = Array(3)
      .fill(0)
      .map((item, i) => `Item ${i + 1}`)

    const res = render(
      <>
        <OderList>
          {list.map((item) => (
            <ListItem>{item}</ListItem>
          ))}
        </OderList>
      </>,
    )

    const expectRes =
      '\n' + list.map((item, i) => `${i + 1}. ${item}\n`).join('') + '\n'

    expect(res).toBe(expectRes)
  })

  it('Unordered List', () => {
    const list = Array(3)
      .fill(0)
      .map((item, i) => `Item ${i + 1}`)

    const res = render(
      <>
        <UnorderedList>
          {list.map((item) => (
            <ListItem>{item}</ListItem>
          ))}
        </UnorderedList>
      </>,
    )

    const expectRes = '\n' + list.map((item) => `* ${item}\n`).join('') + '\n'

    expect(res).toBe(expectRes)
  })

  it('Unordered List single', () => {
    const res = render(
      <>
        <UnorderedList>
          <ListItem>item1</ListItem>
        </UnorderedList>
      </>,
    )

    const expectRes = '\n' + '* item1\n' + '\n'

    expect(res).toBe(expectRes)
  })

  it('Nested List', () => {
    const res = render(
      <>
        <UnorderedList>
          <ListItem>
            Unordered List 1
            <OderList level={2}>
              <ListItem>
                Nested Order List 1
                <UnorderedList level={3}>
                  <ListItem>
                    Nested Unordered List 1
                    <OderList level={4}>
                      <ListItem>Nested Order List 1</ListItem>
                    </OderList>
                  </ListItem>
                  <ListItem>Nested Unordered List 2</ListItem>
                  <ListItem>Nested Unordered List 3</ListItem>
                </UnorderedList>
              </ListItem>
              <ListItem>Nested Order List 2</ListItem>
              <ListItem>Nested Order List 3</ListItem>
            </OderList>
          </ListItem>
          <ListItem>Unordered List 2</ListItem>
          <ListItem>Unordered List 3</ListItem>
        </UnorderedList>
      </>,
    )

    const expectRes = `
* Unordered List 1
   1. Nested Order List 1
      * Nested Unordered List 1
         1. Nested Order List 1
      * Nested Unordered List 2
      * Nested Unordered List 3
   2. Nested Order List 2
   3. Nested Order List 3
* Unordered List 2
* Unordered List 3

`
    expect(res).toBe(expectRes)
  })
})

describe('Special List', () => {
  it('Order List', () => {
    const list = Array(3)
      .fill(0)
      .map((item, i) => `Item ${i + 1}`)

    const res = render(
      <>
        <List items={['O', ...list]}></List>
      </>,
    )

    const expectRes =
      '\n' + list.map((item, i) => `${i + 1}. ${item}\n`).join('') + '\n'

    expect(res).toBe(expectRes)
  })

  it('Unordered List', () => {
    const list = Array(3)
      .fill(0)
      .map((item, i) => `Item ${i + 1}`)

    const res = render(
      <>
        <List items={['U', ...list]} />
      </>,
    )

    const expectRes = '\n' + list.map((item) => `* ${item}\n`).join('') + '\n'

    expect(res).toBe(expectRes)
  })

  it('Nested List', () => {
    const res = render(
      <>
        <List
          items={[
            'U',
            [
              'Unordered List 1',
              [
                'O',
                [
                  'Nested Order List 1',
                  [
                    'U',
                    'Nested Unordered List 1',
                    'Nested Unordered List 2',
                    'Nested Unordered List 3',
                  ],
                ],
                'Nested Order List 2',
                'Nested Order List 3',
              ],
            ],
            'Unordered List 2',
            'Unordered List 3',
          ]}
        />
      </>,
    )

    const expectRes = `
* Unordered List 1
   1. Nested Order List 1
      * Nested Unordered List 1
      * Nested Unordered List 2
      * Nested Unordered List 3
   2. Nested Order List 2
   3. Nested Order List 3
* Unordered List 2
* Unordered List 3

`
    expect(res).toBe(expectRes)
  })
})
