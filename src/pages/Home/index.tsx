import { useContext } from 'react'

import { DeliveryContext } from '../../contexts/DeliveryContext'
import { CoffeeCard } from './components/CoffeeCard'
import { Intro } from './components/Intro'
import { HomeContainer, CoffeeList, List } from './style'

export function Home() {
  const { productList } = useContext(DeliveryContext)

  return (
    <HomeContainer>
      <Intro />
      <CoffeeList>
        <h1>Nossos cafés</h1>

        <List>
          {productList.map((product) => {
            return (
              <CoffeeCard
                key={product.id}
                id={product.id}
                name={product.name}
                tags={product.tags}
                image={product.image}
                description={product.description}
                price={product.price}
              />
            )
          })}
        </List>
      </CoffeeList>
    </HomeContainer>
  )
}
