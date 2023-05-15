import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  width: 4.5rem;
  height: 2.2375rem;
  border: none;
  border-radius: 0.375rem;
  background: ${(props) => props.theme['base-button']};
`

export const InputCustom = styled.input`
  width: 1.25rem;
  height: 1.3125rem;
  border: none;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;
  text-align: center;
  color: ${(props) => props.theme['base-title']};

  background: ${(props) => props.theme['base-button']};

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
export const ButtonCustom = styled.button`
  border: none;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme.purple};
`
