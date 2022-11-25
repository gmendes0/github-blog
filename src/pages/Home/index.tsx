import { Profile } from './components/Profile'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile
        user={{
          name: 'Gabriel Mendes',
          url: 'https://github.com/gmendes0',
          username: 'gmendes0',
          company: 'Vugnaes sreo',
          bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora odio perferendis assumenda obcaecati, nulla quam accusamus consectetur delectus culpa corporis. In dolorum vitae maiores iure sunt ipsam provident temporibus architecto?',
          avatar_url: 'https://avatars.githubusercontent.com/u/44452222?v=4',
          followers: 8,
        }}
      />

      <div>
        <h1>Publicações</h1>
        <span>6 publicações</span>
      </div>

      <main></main>
    </HomeContainer>
  )
}
