import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;
  background: ${(props) => props.theme['base-card']};

  border-radius: 0.375rem 2rem;

  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: center;
  img {
    margin-top: -1.25rem;
    width: 7.5rem;
    height: 7.5rem;
  }
`
export const TagContainer = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  span {
    display: flex;
    justify-content: center;
    background: ${(props) => props.theme['yellow-light']};
    width: 5.0625rem;
    height: 1.3125rem;
    padding: 0.25rem 0.5rem;
    border-radius: 100px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 0.625rem;
    line-height: 130%;
    text-transform: uppercase;
    color: ${(props) => props.theme['yellow-dark']};
  }
`
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-label']};

  padding: 0 1.25rem 2.625rem 1.25rem;

  span {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    padding: 1rem 0.5rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const BuyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1.8125rem;
  width: 13rem;
  height: 1.5rem;
  margin: 0 1.5rem 1.25rem 1.5rem;

  form {
    display: inherit;
    align-items: baseline;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;

    span {
      line-height: 130%;
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 800;
      font-size: 1.5rem;
    }
  }

  div[id='amount'] {
    display: inherit;
  }
`

export const ShoppingCartButton = styled.button`
  display: inherit;
  justify-content: center;
  align-items: center;
  width: 2.375rem;
  height: 2.375rem;
  background: ${(props) => props.theme.purple};
  border: none;
  border-radius: 0.375rem;
  margin-left: 0.5rem;

  color: ${(props) => props.theme['base-card']};
  * &:hover {
    background: ${(props) => props.theme['purple-dark']};
  }
`
