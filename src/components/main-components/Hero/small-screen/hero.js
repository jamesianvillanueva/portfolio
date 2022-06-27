import ShowParticles from "../particles/particles"
import { Wrapper, Container, Section, Center, Text, TypeAnim, TextSlider } from "./style"

import TypedAnim from '../typed-anim/typed-anim'

const SmallScreen = () => {
    return (
        <Wrapper>  
                  
            <Container> 
                <Text>
                    Welcome!
                </Text>
                <TypeAnim>
                    <TypedAnim  strings={[
                        'Im <strong>Software Engineer</strong>',
                        'Im <strong>James Ian Villanueva</strong>',
                    ]}/>
                </TypeAnim>  
                <Text>
                    Specialized in Server-Side Development
                </Text>
                   
            </Container>
        </Wrapper>
    )
}


export default SmallScreen