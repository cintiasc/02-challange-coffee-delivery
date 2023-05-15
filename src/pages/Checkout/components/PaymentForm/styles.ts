import styled from 'styled-components'

export const PaymentContainer = styled.div`
  h6 {
    color: ${(props) => props.theme.purple};
    font-weight: lighter;
    margin-top: -0.8rem;
  }
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;

  margin-top: 0.75rem;
  width: 40rem;
  height: 12.9375rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 0.375rem;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`

export const BaseGroupTitle = styled.div`
  display: flex;
  flex-direction: row;

  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-text']};
  }

  div {
    margin-left: 0.5rem;
  }
`

export const PaymentGroupTitle = styled(BaseGroupTitle)`
  color: ${(props) => props.theme.purple};
`
