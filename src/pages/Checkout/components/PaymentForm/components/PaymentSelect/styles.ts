import styled from 'styled-components'

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: none;
  gap: 0.75rem;
`
export const Button = styled.div`
  input {
    display: flex;
    appearance: none;
    visibility: hidden;
  }
  input[type='radio']:checked + label {
    border: 1px solid ${(props) => props.theme.purple};
    box-sizing: border-box;
    background: ${(props) => props.theme['purple-light']};
    &:hover {
      background: ${(props) => props.theme['base-hover']};
    }
  }

  label {
    display: flex;
    border: none;
    border-radius: 0.375rem;
    width: 11.677rem;
    height: 3.1875rem;

    background: ${(props) => props.theme['base-button']};

    transition: 0.5s;
  }
`
export const ButtonTag = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  gap: 0.75rem;

  border: none;
  border-radius: 0.375rem;
  width: 11.677rem;
  height: 3.1875rem;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 160%;

  text-transform: uppercase;
  color: ${(props) => props.theme['base-text']};
  transition: 0.6s;

  &&:hover {
    background: ${(props) => props.theme['base-hover']};
  }
  svg {
    color: ${(props) => props.theme.purple};
  }
`
