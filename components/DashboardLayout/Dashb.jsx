import { Footer } from "../Footer"
import { Header } from "../Header"
import { Main } from "../Main"

export const Dashb = ({ children }) => {
    return (
        <>
            <Header />
            <Main>{children}</Main>
            <Footer />
        </>
    )
}
