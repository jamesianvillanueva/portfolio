import SmallScreen from "./small-screen/hero"

import 'twin.macro'
import MediumScreen from "./medium-screen/hero"
import ShowParticles from "./particles/particles"

const Hero = () => {

    return (
        <div name="hero">
            <ShowParticles/>   
            <SmallScreen />
            <MediumScreen />
        </div>
    )
}


export default Hero