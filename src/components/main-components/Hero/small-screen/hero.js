import ShowParticles from "../particles/particles"
import { Wrapper, Container, Section, Center, Text, TypeAnim, TextSlider, SocialIcons } from "./style"
import {  AiOutlineGitlab, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import TypedAnim from '../typed-anim/typed-anim'

const SmallScreen = () => {
    return (
        <Wrapper>  
                  
            <Container> 
                <Text>
                    Welcome!
                </Text>
                <TypeAnim>
                    <TypedAnim strings={[
                        'Im <strong>Software Engineer</strong>',
                        'Im <strong>James Ian Villanueva</strong>',
                    ]}/>
                </TypeAnim>  
                <Text>
                    Specialized in Server-Side Development
                </Text>
                <Section>
                    <SocialIcons href="https://gitlab.com/JamesIan.Villanueva" target="_blank">
                        <AiOutlineGitlab size="2rem" color='white'/>
                    </SocialIcons>
                    
                    <SocialIcons href="https://github.com/jamesianvillanueva" target="_blank">
                        <AiFillGithub size="2rem" color='white'/>
                    </SocialIcons>
                    <SocialIcons href="https://www.linkedin.com/in/jamesvillanueva1201/" target="_blank">
                        <AiFillLinkedin size="2rem" color='white'/>
                    </SocialIcons>

                </Section>
            </Container>
        </Wrapper>
    )
}


export default SmallScreen