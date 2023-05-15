import styled from 'styled-components'

export const SuccessContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;

  margin-top: calc(6.5rem + 5rem);
  padding-left: 16rem;
  padding-right: 16rem;
`
export const Message = styled.div`
  margin-top: 10rem;
  align-self: center;
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 2rem;
  line-height: 130%;

  /* Brand / Yellow Dark */
  color: ${(props) => props.theme['yellow-dark']};
`
export const TitleContainer = styled.div`
  h1 {
    /* Title/Title L */

    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;

    /* Brand / Yellow Dark */
    color: ${(props) => props.theme['yellow-dark']};
  }
  p {
    /* Text/Regular L */
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
    font-stretch: 100;

    /* Base/Subtitle */
    color: ${(props) => props.theme['base-title']};
  }
`

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  img {
    width: 30.75rem;
    height: 18.3125rem;
  }
`

export const OrderInfo = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;

  width: 32.875rem;
  height: 16.875rem;

  position: relative;
  border-radius: 0.6rem 3.6rem;
  background-color: ${(props) => props.theme['base-background']};

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 0.7rem 3.7rem 0.7rem 3.7rem;
    background: linear-gradient(105deg, #dbac2c 3.2%, #8047f8 98.25%);
  }
`
export const Info = styled.div`
  display: flex;
  gap: 0.75rem;

  color: ${(props) => props.theme['base-text']};

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;

  span {
    font-weight: bold;
  }
`

const ITEM_COLOR = {
  yellowDark: 'yellow-dark',
  yellowLight: 'yellow',
  purple: 'purple',
} as const

interface ItemsProps {
  itemColor: keyof typeof ITEM_COLOR
}

export const Icon = styled.div<ItemsProps>`
  display: flex;
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
  gap: 0.5rem;

  color: ${(props) => props.theme['base-background']};
  border-radius: 1000px;

  background-color: ${(props) => props.theme[ITEM_COLOR[props.itemColor]]};
`
