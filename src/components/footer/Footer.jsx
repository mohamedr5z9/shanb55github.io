import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithubAlt } from 'react-icons/fa'
import { AiOutlineYoutube } from 'react-icons/ai'
import { AiOutlineSkype } from 'react-icons/ai'
import { RiDiscordLine } from 'react-icons/ri'
import { ImBlogger2 } from 'react-icons/im'
/**
 * Thêm link tại footer dòng 26
 * <li><a href="#testimonials">Testimonials</a></li>
 */

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>NGUYENVU</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>

                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.facebook.com/profile.php?id=100028255297546"><FaFacebookF /></a>
                <a href=""><AiOutlineYoutube /></a >
                <a href="https://www.linkedin.com/in/netbuster/"><FaLinkedinIn /></a>
                <a href="https://github.com/mohamedr5z9"><FaGithubAlt /></a>
                <a href="https://github.com/mohamedr5z9/mohamedtarek55github.io/"><ImBlogger2 /></a >
                <a href="https://discord.gg/JCRHvtD7"><RiDiscordLine /></a >
            </div >

            <div className="footer__copyright">
                <small>&copy; <b><a href="https://www.linkedin.com/in/netbuster/">mohamed tarek</a></b>. All rights reserved.</small>
            </div>
        </footer >
    )
}

export default Footer
