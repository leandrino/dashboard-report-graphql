import CategoryType from '../../src/graphql/types/category-type'
// import { graphQLObjectType, graphQLString } from 'graphql'

describe('Category Type', () => {
  it('should to match snapshot', () => {
    expect(CategoryType).toMatchSnapshot()
  })
})
