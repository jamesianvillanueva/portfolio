import Footer from "../components/Footer/footer"
import Header from "../components/Header/header"
import { Container } from "./style"



const Layout = ({children}) => {
    return(
        <Container>
            <Header />
            <main>{ children }</main>
            <Footer />
        </Container>
    )
}

export default Layout