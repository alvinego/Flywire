import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import {FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaLinkedin} from 'react-icons/fa'
import {FooterContainer,
     FooterWrap, 
     FooterLinksContainer, 
     FooterLinksWrapper, 
     FooterLinkItems, 
     FooterLink, 
     FooterLinkTitle, 
     SocialMedia, 
     SocialMediaWrap, 
     SocialLogo, 
     WebsiteRights, 
     SocialIcons, 
     SocialIconLink} from './FooterElements';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                        <FooterLinkTitle> About Us </FooterLinkTitle>
                            <FooterLink to='/signin'>How it Works</FooterLink>
                            <FooterLink to='/signin'>Testimonials</FooterLink>
                            <FooterLink to='/signin'>Carreers</FooterLink>
                            <FooterLink to='/signin'>Investors</FooterLink>
                            <FooterLink to='/signin'>Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                        <FooterLinkTitle> Contact Us </FooterLinkTitle>
                            <FooterLink to='/signin'>Contact</FooterLink>
                            <FooterLink to='/signin'>Sales Support</FooterLink>
                            <FooterLink to='/signin'>Technical Support</FooterLink>
                            <FooterLink to='/signin'>Areas of Coverage</FooterLink>
                            <FooterLink to='/signin'>Sponsorship</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                        <FooterLinkTitle> Videos </FooterLinkTitle>
                             <FooterLink to='/signin'>Submit Videos</FooterLink>
                            <FooterLink to='/signin'>Ambassadors</FooterLink>
                            <FooterLink to='/signin'>Agency</FooterLink>
                            <FooterLink to='/signin'>Influencers</FooterLink>
                            <FooterLink to='/signin'>Technical Support</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                        <FooterLinkTitle> Social Media </FooterLinkTitle>
                            <FooterLink to='/signin'>Instagram</FooterLink>
                            <FooterLink to='/signin'>Facebook</FooterLink>
                            <FooterLink to='/signin'>LinkedIn</FooterLink>
                            <FooterLink to='/signin'>Twitter</FooterLink>
                            <FooterLink to='/signin'>Youtube</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Flywire
                        </SocialLogo>
                        <WebsiteRights> flywire © {new Date().getFullYear()} All rights reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram"> 
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-label='Facebook'> 
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-label='LinkedIn'>
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-label='Twitter'>
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-label='Youtube'>
                                <FaYoutube />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer
