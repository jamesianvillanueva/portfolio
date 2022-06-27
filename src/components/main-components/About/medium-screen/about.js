import { items } from "../constant/items"
import { Wrapper, Container, Title, Name, Section, Main, Journey, Boxes, Year, Details } from "./style"

const MediumScreen = () => {
    return (
        <Wrapper>
            <Container>
                <Title className="underline underline-offset-8">
                    About Me
                </Title>
                <Name>
                    I&apos;m James Ian Villanueva
                </Name>
                <Section>
                    <Main>
                    As an amateur in the field of information technology, 
                    I seek to associate with an organization that will allow me to utilize my abilities optimally, 
                    and will also allow me to improve the organization while filling in my professional venture.
                    </Main>
                    <Journey>
                    {
                        items.map((key, i)=> {
                            return(
                                <Boxes key={i}>
                                    <Year>{key.year}</Year>
                                    <Details>{key.details}</Details>
                                </Boxes>
                            )
                        })
                    }
                    </Journey>
                </Section>
            </Container>
        </Wrapper>
    )
}   

export default MediumScreen