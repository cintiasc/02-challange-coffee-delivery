import styled from 'styled-components'

export const IntroContainer = styled.div`
  border: solid 1px #000000;

  display: flex;
  width: 100vw;
  height: 34rem;

  position: absolute;
  left: 0px;
  right: 0px;
  top: 6.5rem;
  z-index: -1;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;

  filter: drop-shadow(0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25));
  img {
    position: absolute;
    width: 29.75rem;
    height: 22.5rem;
    left: calc(50% - 29.75rem / 2 + 20.125rem);
    top: calc(50% - 22.5rem / 2);
  }
`
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 1rem;

  width: 36.75rem;
  height: 12rem;

  position: absolute;
  left: calc(50% - 36.75rem / 2 - 16.63rem);
  top: calc(50% - 12rem / 2 - 5.125rem);

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    font-size: 1.25rem;
    font-stretch: 100;
    color: ${(props) => props.theme['base-subtitle']};

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
  }
`

export const Items = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-auto-columns: min-content;

  grid-row-gap: 1.25rem;

  position: absolute;
  left: calc(50% - 35.4375rem / 2 - 17.28125rem);
  top: calc(50% - 5.25rem / 2 + 7.625rem);
`
export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`
const ITEM_COLOR = {
  yellowDark: 'yellow-dark',
  yellowLight: 'yellow',
  baseText: 'base-text',
  purple: 'purple',
} as const

interface ItemsProps {
  itemColor: keyof typeof ITEM_COLOR
}

export const Icon = styled.div<ItemsProps>`
  display: flex;
  padding: 0.5rem;
  gap: 0.5rem;

  color: ${(props) => props.theme['base-background']};
  border-radius: 1000px;

  background-color: ${(props) => props.theme[ITEM_COLOR[props.itemColor]]};
`
