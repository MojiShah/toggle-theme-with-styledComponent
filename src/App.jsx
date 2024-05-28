import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Desc, StyledDiv, Title, darkTheme, lightTheme } from './StyledApp'
import MoonIcon from './components/Icons/MoonIcon'
import SunIcon from './components/Icons/SunIcon'
import Swicth from './components/Switch'

function App() {

  const [theme , setTheme] = useState('light');

  const toggleTheme = () => setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  
  return (
    <ThemeProvider theme={theme==="light" ? lightTheme : darkTheme}>
      <StyledDiv>
        <SunIcon />
        <Swicth toggleTheme={toggleTheme} />
        <MoonIcon />
        <Title>Toggle Theme</Title>
        <Desc>Author : Moji</Desc>
        <Desc>Library : Styled Component</Desc>
        <br /><br />
        <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fuga nemo ratione non veritatis impedit fugiat quibusdam sequi nobis, eos labore recusandae temporibus necessitatibus facere animi pariatur ad modi quaerat quia voluptatem? Nemo nisi aperiam aspernatur quisquam aliquid vero veniam nihil, maxime qui in possimus, fugit, totam laudantium distinctio impedit beatae iure aliquam reiciendis corrupti dicta? Impedit rerum autem pariatur? Temporibus ratione labore aliquid, expedita delectus nesciunt doloribus dolore fugit. Quidem corrupti beatae sint accusantium nisi cum? Vero explicabo aperiam quisquam fugit iure ipsum animi quas eligendi, molestiae atque alias at maxime id porro in quo voluptas quod reiciendis rerum?</Desc>
      </StyledDiv>
    </ThemeProvider>
  )
}

export default App;
