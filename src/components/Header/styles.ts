import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2rem 10rem;

  position: fixed;
  height: 6.5rem;
  width: 100vw;
  left: 0px;
  right: 0px;
  top: 0px;
  background: ${(props) => props.theme['base-background']};
  nav {
    width: 90rem;
    gap: 51.25rem;
    display: flex;
    justify-content: space-between;

    img {
      width: 5.3rem;
      height: 2.5rem;
    }
    div > a {
      display: flex;
      align-items: center;
      padding: 0.5rem;
      gap: 0.25rem;
      background: ${(props) => props.theme['yellow-light']};
      border-radius: 0.375rem;

      color: ${(props) => props.theme['yellow-dark']};
    }
  }
`
export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.75rem;
`

export const City = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  border-radius: 0.375rem;
  padding: 0.5rem;
  gap: 0.25rem;

  flex: none;
  order: 0;
  flex-grow: 0;

  span {
    font-size: 0.875rem;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    flex: none;
    order: 1;
    flex-grow: 0;
  }
`
export const Counter = styled.span`
  height: 1.25rem;
  width: 1.25rem;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 130%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  position: relative;
  right: -0.5218rem;
  left: -1.4rem;
  top: -1rem;

  background: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};
  border-radius: 1000px;

  flex: none;
  order: 1;
  flex-grow: 0;
  z-index: 1;
`
