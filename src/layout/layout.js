import Footer from "../components/Footer/footer"
import Header from "../components/Header/header"
import { Container } from "./style"
import Head from 'next/head'


const Layout = ({children}) => {
    return(
        <Container>
            <Head>
                <title>James Ian | Software Engineer</title>               
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header />
            <main>{ children }</main>
            <Footer />
        </Container>
    )
}

export default Layout