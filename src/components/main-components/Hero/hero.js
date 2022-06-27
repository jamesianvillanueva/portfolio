import SmallScreen from "./small-screen/hero"

import 'twin.macro'
import MediumScreen from "./medium-screen/hero"
import ShowParticles from "./particles/particles"

const Hero = () => {

    return (
        <>
            <ShowParticles/>   
            <SmallScreen />
            <MediumScreen />
        </>
    )
}


export default Hero