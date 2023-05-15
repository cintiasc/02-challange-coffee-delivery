import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 6.5rem);
  margin-top: 6.5rem;

  flex-grow: 1;
`
export const CoffeeList = styled.div`
  position: absolute;
  height: 102.125rem;
  left: 0px;
  right: 0px;
  top: 40.5rem;
  z-index: -1;

  margin: 2rem 10rem;

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const List = styled.div`
  position: absolute;
  width: 70rem;
  height: 85rem;
  left: calc(50% - 70rem / 2);
  top: 8rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 0.625rem;
`
