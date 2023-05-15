import styled from 'styled-components'

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.9375rem;
  gap: 0.75rem;
  width: 40rem;
`
export const CoffeeCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  border-radius: 0.375rem;

  background-color: ${(props) => props.theme['base-card']};
  h6 {
    color: ${(props) => props.theme.purple};
    font-weight: lighter;
    margin: 0.5rem 0.5rem -0.2rem 0.5rem;
  }
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
export const AddressGroupTitle = styled(BaseGroupTitle)`
  color: ${(props) => props.theme['yellow-dark']};
`
export const PaymentGrpouTitle = styled(BaseGroupTitle)`
  color: ${(props) => props.theme.purple};
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const BaseInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.75rem;
  gap: 0.25rem;
  height: 2.625rem;
  margin-top: 1rem;

  border: 1px solid #e6e5e5;
  border-radius: 0.25rem;
  background: ${(props) => props.theme['base-button']};

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 130%;
`

export const MediumInput = styled(BaseInput)`
  width: 12.5rem;
`
export const ExtLargeInput = styled(BaseInput)`
  width: 100%;
`
export const LargeInput = styled(BaseInput)`
  width: 21.75rem;
`
export const NormalInput = styled(BaseInput)`
  width: 17.25rem;
`
export const LittleInput = styled(BaseInput)`
  width: 3.75rem;
`
