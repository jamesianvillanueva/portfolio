import { ProjList } from "../constant/projects"
import { Wrapper, Container, ProjectList, Title, Box, ImageContainer, GridContainer, Button, Tools } from "./style"

import Image from 'next/image'


const MediumScreen = () => {
    return(
        <Wrapper>
            <Container>
                <Title className="underline underline-offset-8">
                    Projects
                </Title>
                <ProjectList>
                {
                    ProjList.map((key, i) => {
                        return(
                            <Box key={i}>
                                <ImageContainer>
                                    <Image src={key.image} width='300' height='250' layout="responsive" alt=""/> 
                                </ImageContainer>
                                <div className="text-base text-center text-white font-medium m-3">
                                Static Web Page
                                </div>
                                <GridContainer>
                                    <Tools>
                                    {   
                                        key.t.map((key, i) =>{
                                            return(
                                                <a className="m-1" key={i}>{key.name}</a>
                                            )
                                        })
                                    }
                                    </Tools>
                                    <div className="flex flex-row m-auto">
                                        <Button>
                                            <a href={key.link} target="_blank">View Me</a>
                                        </Button>
                                        <Button>
                                           <a href={key.gitlink} target="_blank">Github</a>
                                        </Button>
                                    </div>
                                </GridContainer>
                            </Box>
                        )
                    })
                }
                </ProjectList>
            </Container>
        </Wrapper>
    )
}

export default MediumScreen