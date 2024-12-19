import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { ImBlogger2 } from 'react-icons/im'
import { RiDiscordLine } from 'react-icons/ri'


const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/netbuster/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/nguyenvu1310" target="_blank"><FaGithub /></a>
            <a href="https://github.com/mohamedr5z9/mohamedtarek55github.io/" target="_blank"><ImBlogger2 /></a>
            <a href="" target="_blank"><RiDiscordLine /></a>
        </div>
    )
}

export default HeaderSocials
