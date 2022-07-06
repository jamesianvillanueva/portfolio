import {  Wrapper, Container, Div1, Div2, Div3, Div4, SocialIcons } from './style'
import { DiNodejs } from 'react-icons/di';

import React, { useState } from 'react'

import { Link } from 'react-scroll/modules';

import { ScrollLinks } from './Links/links';

import 'twin.macro'

const Header = () => {
    let [open, setOpen] = useState(false);
    return(
        <Wrapper>
            <Container>
                <Div1>
                    <a className='flex items-center text-white'>
                        <DiNodejs size="3rem" /> <span>JIBV</span>
                    </a>
                </Div1>

                <Div2>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-10 pt-10 bg-black':'top-[-490px]'}`}>
                {   
                    ScrollLinks.map((link, i) => (                            
                        <Link key={i}
                            className='md:ml-8 md:my-0 my-7'
                            smooth={true}
                            to={link.link}
                            >
                            <h1 className='text-xs my-5 text-white font-roboto hover:text-stone-500 duration-500'>{link.name}</h1>
                        </Link>
                    ))
                }
                </ul>
                </Div2>

                <Div4 onClick={()=>setOpen(!open)}>
                    <ion-icon color='light' name={open ? 'close-outline':'menu-outline'}></ion-icon>
                </Div4>

            </Container>
        </Wrapper>
    )
}

export default Header