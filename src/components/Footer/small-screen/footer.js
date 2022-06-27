import {  AiOutlineGitlab, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Container, Wrapper, EmailContainer, Text, SocialIcons } from "./style"


const SmallScreen = () =>{
    return(
        <Wrapper>
            <Container>
                <EmailContainer>
                    <Text>
                        Email • jamesvillanueva1201@gmail.com
                    </Text>
                </EmailContainer>
                <SocialIcons href="https://gitlab.com/JamesIan.Villanueva">
                    <AiOutlineGitlab size="2rem" color='white'/>
                </SocialIcons>
                
                <SocialIcons href="https://github.com/jamesianvillanueva">
                    <AiFillGithub size="2rem" color='white'/>
                </SocialIcons>
                <SocialIcons href="https://www.linkedin.com/in/jamesvillanueva1201/">
                    <AiFillLinkedin size="2rem" color='white'/>
                </SocialIcons>

            </Container>
        </Wrapper>
    )
}

export default SmallScreen