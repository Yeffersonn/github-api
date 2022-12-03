import { Container } from '@mui/material'
import { useEffect } from 'react'
import { useState } from 'react'
import { Searcher } from './components/Searcher'
import { UserCard } from './containers/userCard'
import { getGitHubUser } from './services/users'


function App() {

  const ContainerStyles = {
    background: 'rgb(0, 0, 0, .3)',
    width: '90vw',
    height: '80vh',
    borderRadius: '16px',
    marginTop: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }


  const [inputUser, setInputUser] = useState('octocat')
  const [userState, setUserState] = useState(inputUser)
  const [notFound, setNotFound] = useState(false)

  const gettingUser = async (user) =>{
    const userResponse = await getGitHubUser(user);

    if(userState === 'octocat'){
      setUserState(userResponse)
    }else if(userResponse.message){
      const {octocat} = localStorage;
      setInputUser(octocat);
      setNotFound(true)
    }else{
      setUserState(userResponse)
    }
    console.log(userResponse)
  }
  
  useEffect(()=>{
    gettingUser(inputUser)
  },[inputUser])

  return (
    <Container sx={ContainerStyles}>
      <Searcher inputUser={inputUser} setInputUser={setInputUser} />
      <UserCard userState={userState} />
    </Container>
  )
}

export default App
