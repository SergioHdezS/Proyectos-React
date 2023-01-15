import './App.css'
import { TwitterFollowCard } from './components/TwitterFollowCard';

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Angel Duran',
    isFollowing: true
  },
  {
    userName: 'ChechoO',
    name: 'Sergio Hernandez',
    isFollowing: false
  },
  {
    userName: 'PacoHdezs',
    name: 'Francisco Hernandez',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
  }
]

export function App() {
  return (
    <section className='App'>
      {
        users.map(({userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  );
}