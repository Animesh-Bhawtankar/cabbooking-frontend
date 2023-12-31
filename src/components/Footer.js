import React from "react";
// import { func, string } from "prop-types";
import styled from "styled-components";
// import Link from "next/link";
import {
    AiOutlineMedium,
    AiOutlineInstagram,
    AiOutlineTwitter,
    AiOutlineGithub
} from "react-icons/ai";

import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterHead = styled.h5`
	font-family: Sen;
	font-weight: 700;
	color: #222222;
`;

const Paragraph = styled.p`
	font-family: Sen;
	font-size: 16px;
	color: #626262;
	margin-bottom: 0;
`;

const CopyrightWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const FooterWrapper = styled.div`
	font-family: Sen;
	ul,
	li {
		list-style: none;
		padding-left: 0;
	}
	li {
		color: #626262;
	}
`;

const SocialWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const SocialMedia = styled.a`
	text-decoration: none;
	cursor: pointer;
	svg {
		&:hover {
			transition: 0.2s all ease;
			color: #424242;
		}
		color: #4285f4;
		font-size: 28px;
		transition: 0.2s all ease;
	}
`;

const CardOutline = styled.div`
	margin-bottom: 40px;
	border: 1.2px solid #0f9d58;
	box-sizing: border-box;
	border-bottom-width: 4px;
	border-radius: 8px;
	z-index: 99;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16);
`;

const Iframe = styled.iframe`
	z-index: -99;
	height: 240px;
	border-radius: 8px;
	border: 0;
	width: 100% !important;
`;

const Atag = styled.a`
	text-decoration: none !important;
	color: inherit !important;
	cursor: pointer;
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <div className="container pt-4 pb-4">
                <FooterHead className="mb-2">Explore</FooterHead>
                <div className="row">
                    <div className="col-lg-4">
                        <ul>
                            <li>
                                <Atag
                                    href="#"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    The Cab Booking Company
                                </Atag>
                            </li>
                            
                            
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <ul>
                            <li>
                                <Link href="#">
                                    <Atag>Community Guidelines</Atag>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <Atag>Meet the team</Atag>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <Atag to="/faqs">FAQs</Atag>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <SocialWrapper>
                            <SocialMedia
                                href="#"
                                target="_blank"
                                rel="noopener"
                            >
                                <AiOutlineInstagram />
                            </SocialMedia>{" "}
                            <SocialMedia
                                href="#"
                                target="_blank"
                                rel="noopener"
                            >
                                <AiOutlineTwitter />
                            </SocialMedia>
                            <SocialMedia
                                href="#"
                                target="_blank"
                                rel="noopener"
                            >
                                <AiOutlineGithub />
                            </SocialMedia>{" "}
                            <SocialMedia
                                href="#"
                                target="_blank"
                                rel="noopener"
                            >
                                <AiOutlineMedium />
                            </SocialMedia>
                            <SocialMedia
                                href="#"
                                target="_blank"
                                rel="noopener"
                            >
                                <FaTelegramPlane />
                            </SocialMedia>{" "}
                        </SocialWrapper>
                        <Paragraph className="mt-3">
                            Write to us at:{" "}
                            <Atag
                                href="#"
                                target="_blank"
                                rel="noopener"
                            >
                                <b>cabbooking@gmail.com</b>
                            </Atag>
                        </Paragraph>
                    </div>
                </div>

                <CardOutline className="mt-4">
                    <Iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60503.76481541026!2d73.65751507910153!3d18.597229300000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb0599c036eb%3A0xe9c3fd97dabdd061!2sCapgemini%20India!5e0!3m2!1sen!2sin!4v1635422401264!5m2!1sen!2sin" 
                        allowfullscreen=""
                        aria-hidden="false"
                        tabindex="0"
                        title="Cab Booking Company"
                    ></Iframe>
                </CardOutline>

                <CopyrightWrapper className="mt-4">
                    <div>
                        <Paragraph>
                            &copy; copyright 2021 CabBooking - Developed by{" "}
                            <Atag href="#">
                                <b>Cab Booking App</b>
                            </Atag>
                        </Paragraph>
                    </div>
                </CopyrightWrapper>
            </div>
        </FooterWrapper>
    );
};

export default Footer;