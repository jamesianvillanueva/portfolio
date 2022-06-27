import { items } from "../constant/items"
import { Container, Wrapper, Title, AchievementList, Boxes, Year, Details } from "./style"



const MediumScreen = () => {
    return(
        <Wrapper>
            <Container>
                <Title className="underline underline-offset-8">
                    Achievements
                </Title>
                <AchievementList>
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
                </AchievementList>
            </Container>
        </Wrapper>
    )
}   

export default MediumScreen