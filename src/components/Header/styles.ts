import styled from 'styled-components'

import coverPNG from '../../assets/cover.png'

export const HeaderContainer = styled.header`
  width: 100%;

  padding: 4rem 0 8.375rem;

  background-image: url(${coverPNG});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 9.25rem;
    height: 6.125rem;
  }
`
