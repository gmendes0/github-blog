import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 896px;
  margin: -5.3125rem auto 0;
  background-color: ${(props) => props.theme['gray-700']};
  padding: 2rem 2.5rem;
  border-radius: 8px;

  display: flex;
  gap: 1rem;

  font-size: 1rem;
`

export const ProfileAvatar = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
`

export const ProfileAboutContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProfileNameRow = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  strong {
    font-weight: 700;
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-50']};
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.blue};
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.75rem;

    border-style: solid;
    border-width: 1px 0;
    border-color: transparent;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      border-bottom-color: ${(props) => props.theme.blue};
    }

    svg {
      width: 0.75rem;
      height: 0.75rem;
    }
  }
`

export const ProfileBio = styled.span`
  font-weight: 400;
  font-size: 1rem;
  color: ${(props) => props.theme['gray-200']};
  margin-bottom: 1.5rem;
  width: 100%;
  max-height: 64px;
  overflow: hidden;
`

export const ProfileInfo = styled.span`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme['gray-100']};

    svg {
      width: 1.125rem;
      height: 1.125rem;
      color: ${(props) => props.theme['gray-400']};
    }
  }
`
