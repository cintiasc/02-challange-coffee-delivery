import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import introImage from '../../../../assets/Capa.png'
import { Icon, IntroContainer, Item, Items, TitleContainer } from './styles'
export function Intro() {
  return (
    <IntroContainer>
      <TitleContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
      </TitleContainer>
      <Items>
        <Item>
          <Icon itemColor="yellowDark">
            <ShoppingCart size={22} weight="fill" />
          </Icon>
          Compra simples e segura
        </Item>

        <Item>
          <Icon itemColor="baseText">
            <Package size={22} weight="fill" />
          </Icon>
          Embalagem mantém o café intacto
        </Item>

        <Item>
          <Icon itemColor="yellowLight">
            <Timer size={22} weight="fill" />
          </Icon>
          Entrega rápida e rastreada
        </Item>

        <Item>
          <Icon itemColor="purple">
            <Coffee size={22} weight="fill" />
          </Icon>
          O café chega fresquinho até você
        </Item>
      </Items>
      <img src={introImage} alt="Copo de café" />
    </IntroContainer>
  )
}
