import { items } from "../constant/items"
import { Wrapper, Container, Title, GridContainer, Boxes, ImageContainer, Name } from "./style"
import Image from 'next/image'

const MediumScreen = () => {
    return (
        <Wrapper>
            <Container>
                <Title>
                    Skills
                </Title>
                <GridContainer>
                {
                    items.map((key, i) => {
                        return (
                            <Boxes key={i}>
                                 <ImageContainer>
                                    <Image src={key.image} width='100' height='100' className='block rounded-full'/>    
                                </ImageContainer>
                                <Name>{key.name}</Name>    
                            </Boxes>
                        )
                    })
                }
                </GridContainer>
            </Container>
        </Wrapper>
    )
}

export default MediumScreen