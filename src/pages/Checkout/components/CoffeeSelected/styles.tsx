import styled from 'styled-components'

export const CoffeeSelectedContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0rem;
  gap: 1.25rem;

  width: 15.9375rem;
  height: 4rem;
  img {
    height: 4rem;
    width: 4rem;
  }

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;
`
export const ButtonRemove = styled.button`
  width: 5.6875rem;
  height: 2.2375rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: 0.375rem;
  border: none;
  margin-left: 0.5rem;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 160%;

  text-transform: uppercase;

  transition: 0.6s;
  &&:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
  padding: 0rem 0.25rem;
  background: ${(props) => props.theme['base-button']};
`
export const Controller = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
`
