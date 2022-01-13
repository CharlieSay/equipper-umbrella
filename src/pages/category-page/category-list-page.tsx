import React from 'react'
import { ContainerConstrained } from '../../core/style/containers.styles'
import categories from '../../core/data/categories.json'
import {
  ALinkSmall,
  H2TitleLightRed,
  H1HeroTitle,
} from '../../core/style/typography.styles'

const CategoryListPage = () => {
  return (
    <ContainerConstrained>
      <H1HeroTitle>Categories</H1HeroTitle>
      {categories.categories.map((category) => (
        <H2TitleLightRed>
          <ALinkSmall primary href={category.stem}>
            {category.displayText}
          </ALinkSmall>
        </H2TitleLightRed>
      ))}
    </ContainerConstrained>
  )
}

export default CategoryListPage
