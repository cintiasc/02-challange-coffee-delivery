import styled from 'styled-components'

export const CkeckoutContainer = styled.main`
  display: flex;
  height: calc(100vh - 6.5rem);
  margin: calc(6.5rem + 2.5rem) 10rem 0 10rem;

  flex-grow: 1;
  form {
    display: flex;
    flex-direction: row;
  }
`
export const Frame1 = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
  }
`
export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 0.75rem;
  margin-top: 2rem;
`

export const Frame2 = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
  }

  width: 28rem;
  margin-left: 2rem;
`
export const BaseCard = styled.div`
  margin-top: 0.9375rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  border-radius: 6px 44px;
  padding: 2.5rem;
  gap: 1.5rem;

  background: ${(props) => props.theme['base-card']};
`
export const SubmitButton = styled.button`
  width: 23rem;
  height: 2.875rem;
  gap: 0.25rem;
  padding: 0.75rem 0.5rem;

  border-radius: 6px;
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  border: none;

  transition: 0.6s;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
  &:disabled {
    background: ${(props) => props.theme['base-button']};
  }
`
export const CoffeeList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.5rem 0.25rem;
  gap: 3.6875rem;

  width: 24rem;
  height: 6.5rem;
  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 130%;
  }

  border-bottom: 1px solid ${(props) => props.theme['base-button']};
`
