import React from 'react'
import '../css/contact.css';
import GitLogo from '../images/iconmonstr-github-1.svg';
import LinkedinLogo from '../images/iconmonstr-linkedin-4.svg';
import EmailLogo from '../images/iconmonstr-email-10.svg';
import * as Info from '../info';

const Contact = () => {
  return (
    <div class="contact-links">
      <a target="_blank" rel="noopener noreferrer" href= {Info.GithubLink} id="github-link"><img src={GitLogo} width="64" height="64"/></a>
      <a target="_blank" rel="noopener noreferrer" href= {Info.LinkedinLink} id="linkedin-link"><img src={LinkedinLogo} width="64" height="64"/></a>
      <a target="_blank" rel="noopener noreferrer" href= {Info.Email} id="email-link"><img src={EmailLogo} width="64" height="64"/></a>
    </div>
  )
}

export default Contact
