import { Container, Header } from "@/styles/app"
import { globalStyles } from "@/styles/global"
import { AppProps } from "next/app"
import logoImg from '../assets/logo.svg'

globalStyles()

function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <img src={logoImg.src} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}

export default App