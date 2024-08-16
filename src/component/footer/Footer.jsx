import React from 'react';
import styled from 'styled-components';
import { FaFacebookF,FaTwitter, FaLinkedinIn  } from "react-icons/fa";
import Medjeex_Logo from "../../asset/images/Medjeex_Logo.png"
const Footer = () => {
  return (
    <FooterWrapper>
      <div className=" container_footer grid grid-four-column">
      
        <div className="footer_about">
          <img src={Medjeex_Logo} alt="logo"/>
          
          <a href="mailto:support@servecircle.com" className="footer_nounderline">support@medjeex.com</a>
          <br/>
          <p className="footer_copyright">Copyright &copy; {new Date().getFullYear()} <a href="https://www.servecircle.com/ " className="footera_nocolor">ServeCircle.</a> All rights reserved.</p>
        </div>
        <div className="footer_products">
          <h3>Services</h3>
          <ul>
            <li>Courses</li>
            <li>Test Series</li>
            
          </ul>
        </div>
        <div className="footer_company">
          <h3>COMPANY</h3>
          <ul>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer_socialIcon">
          <a href="https://www.facebook.com/servecircle/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://x.com/Serve_Circle?mx=2" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.linkedin.com/company/servecircle-solutions-private-limited" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
        </div>
        </div>
      
    </FooterWrapper>
  );
};
const FooterWrapper = styled.footer`
width:100vw;
padding: 2rem;
font-family:"Open-Sans", Sans-serif;
  font-size:15px;
  line-height:24.7px;
    background-color: #DEDEDE;
    color:#535353;
  .container_footer {
  width:80%;
  margin:auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    }
  .footer_copyright{
    font-size:14px;
    line-height:22.8px;
    color:#788394;
    margin-top:-30px;

  }
  
  .footer_about img {
  display: inline-block;
  vertical-align: middle;
  width:60%;
 position:relative;
 bottom:30px;
}

.footer_about, .footer_products, .footer_company {
    display: flex;
    flex-direction: column;
    margin-top:10px;
    
  }
 .footer_socialIcon{
    display:flex;
    gap:2rem;
    position:relative;
    top:1rem;
    right:3rem;
   }
  .footera_nocolor{
    color:inherit;
    text-decoration:none;
  }
  .footer_nounderline{
  color:#0FACF0;
  text-decoration:none;
  margin-top:-50px;
  }
.footer_products ul, .footer_company ul {
    list-style: none;
    padding: 0;
    margin-top:-0.1rem;
  }
.footer_products li, .footer_company li {
    margin-bottom: 0.5rem;
  }
.footer_socialIcon a {
    display: block;
    margin-bottom: 0.5rem;
    color: inherit;
    text-decoration: none;
  }
.footer_socialIcon a:hover {
    text-decoration: underline;
  }
`;
export default Footer;
