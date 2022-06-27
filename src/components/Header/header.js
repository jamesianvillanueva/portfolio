import {  Wrapper, Container, Div1, Div2, Div3, Div4, SocialIcons } from './style'
import {  AiOutlineGitlab, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiNodejs } from 'react-icons/di';

import React, { useState } from 'react'
import Link from 'next/link';

import { Links } from './Links/links';

import 'twin.macro'

const Header = () => {
    let [open, setOpen] = useState(false);
    return(
        <Wrapper>
            <Container>
                <Div1>
                    <Link href="/">
                        <a className='flex items-center text-white'>
                            <DiNodejs size="3rem" /> <span>JIBV</span>
                        </a>
                    </Link>
                </Div1>

                <Div2>
                <ul className={`md:hidden md:items-center md:pb-0 pb-3 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-10 p-8 bg-stone-900':'top-[-490px]'}`}>
                    {   
                        Links.map((link) => (
                            <li key={link.name} className='md:ml-8 md:my-0 my-7'>
                                <a href={link.link} className='text-xs text-white font-roboto hover:text-stone-500 duration-500'>{link.name}</a>
                            </li>
                        ))
                    }
                    </ul>
                </Div2>
              
                <SocialIcons href="https://gitlab.com/JamesIan.Villanueva">
                    <AiOutlineGitlab size="2rem" color='white'/>
                </SocialIcons>
                
                <SocialIcons href="https://github.com/jamesianvillanueva">
                    <AiFillGithub size="2rem" color='white'/>
                </SocialIcons>
                <SocialIcons href="https://www.linkedin.com/in/jamesvillanueva1201/">
                    <AiFillLinkedin size="2rem" color='white'/>
                </SocialIcons>

                <Div4 onClick={()=>setOpen(!open)}>
                    <ion-icon color='light' name={open ? 'close-outline':'menu-outline'}></ion-icon>
                </Div4>

            </Container>
        </Wrapper>
    )
}

export default Header