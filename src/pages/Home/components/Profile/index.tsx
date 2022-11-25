import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  ProfileAboutContainer,
  ProfileAvatar,
  ProfileBio,
  ProfileContainer,
  ProfileInfo,
  ProfileNameRow,
} from './styles'

interface User {
  avatar_url: string
  bio?: string
  company?: string
  followers: number
  name: string
  url: string
  username: string
}

interface ProfileProps {
  user: User
}

export function Profile({ user }: ProfileProps) {
  return (
    <ProfileContainer>
      <ProfileAvatar src={user.avatar_url} alt="" />

      <ProfileAboutContainer>
        <ProfileNameRow>
          <strong>{user.name}</strong>

          <a href={user.url} target="_blank" rel="noopener noreferrer">
            github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </ProfileNameRow>

        {/* limitar o tamanho do texto */}
        <ProfileBio>{user.bio}</ProfileBio>
        <ProfileInfo>
          <span>
            <FontAwesomeIcon icon={faGithub} /> {user.username}
          </span>
          {user.company && (
            <span>
              <FontAwesomeIcon icon={faBuilding} /> {user.company}
            </span>
          )}
          <span>
            <FontAwesomeIcon icon={faUserGroup} /> {user.followers} seguidores
          </span>
        </ProfileInfo>
      </ProfileAboutContainer>
    </ProfileContainer>
  )
}
