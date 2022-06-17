import React from 'react';
// Material
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
// Next
import Link from 'next/link'
import Image from 'next/image'
// 
import {useStyles} from './FooterStyle'

function Footer(props) {

    const classes = useStyles();
    const ImageLoader = ({ src, width, quality }) => {
        return `/${src}?w=${width}&q=${quality || 75}`
    }
    
    return (
        <>
            <div className=' pb-32'>
            <Container maxWidth="1720px" className='he_container border-b border-zinc-200   pb-10'>
                <Grid container>
                    <Grid item md={4} >
                        <Box className=" bg-c2121 pt-4 pl-8 pr-8 pb-10">
                            <div className="footer_widget__top pb-4">
                                <Grid container>
                                    <Grid item md={6}>
                                        <span>
                                        <Link href="/" >
                                            <a>
                                            <Image
                                        loader={ImageLoader}
                                        src="images/footer-logo.svg"
                                        alt="Footer logo"
                                        width={89}
                                        height={52}
                                        />
                                            </a>
                                        </Link>
                                    </span>
                                    </Grid>
                                    <Grid item md={6}>
                                    <span className=' text-xs text-cd6d5'>
                                Exploring Love, Romans, Relationship issues, Drama, Sensual world, Comedy, 
Healing & Erotic Shows, 
                                </span>
                                    </Grid>
                                </Grid>
                                
                                
                            </div>
                            <div className="footer_widget__middle flex flex-wrap  items-center">
                                <div className="footer_widget__middle_left w-1/2">
                                    <div className='rubik text-base text-cd6d5'>
                                        2013 - 2021 All rights reserved
                                    </div>
                                    <div className='rubik text-base text-cd6d5'> DMCA Notice of copyright infringement</div>
                                    <div className='rubik text-base text-cd6d5'>
                                        Terms and conditions</div>
                                    <div className='rubik text-base text-cd6d5'>
                                        Privacy Policy</div>
                                    <div className='rubik text-base text-cd6d5'>
                                        18 U.S.C 2257 Record keeping</div>

                                </div>
                                <div className="footer_widget__middle_right w-1/2 text-right">
                                    <Box className="social_widget__bar inline-flex items-center justify-start">
                                        <Link href="/" >
                                            <a className={`${classes.socialIcon} bg-cc4c4 h-8 w-8 inline-flex rounded-full shadow-xl items-center justify-center`}>
                                                <Image
                                                loader={ImageLoader}
                                                src="images/facebook-1.svg"
                                                alt="Footer logo"
                                                width={12}
                                                height={12}
                                                />
                                            </a>
                                        </Link>
                                        <Link href="/">
                                        <a className={` ${classes.socialIcon} bg-cc4c4 ml-3 h-8 w-8 inline-flex rounded-full shadow-xl items-center justify-center`}>
                                                <Image
                                                loader={ImageLoader}
                                                src="images/instagram-1.svg"
                                                alt="Footer logo"
                                                width={12}
                                                height={12}
                                                />
                                            </a>
                                        </Link>
                                        <Link href="/">
                                        <a className={` ${classes.socialIcon} bg-cc4c4 ml-3  h-8 w-8 inline-flex rounded-full shadow-xl items-center justify-center`}>
                                                <Image
                                                loader={ImageLoader}
                                                src="images/twitter-1.svg"
                                                alt="Footer logo"
                                                width={12}
                                                height={12}
                                                />
                                            </a>
                                        </Link>
                                    </Box>
                                </div>
                            </div>
                            <div className="footer_widget__bottom mt-8">
                                <Box className='rubik text-lg text-cd6d5 font-medium'>
                                    Records compliance statement 
                                </Box>
                                <Box className='rubik text-base text-cd6d5'>
                                © T.H.E Entertainment
                                </Box>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item md={3} >
                        <Box className=' pl-12 border-l-2 border-l-slate-200'>
                            <h5 className=' rubik font-medium text-2xl mb-7'>
                                Element
                            </h5>
                            <ul>
                                <li className='mb-8'>
                                    <Link href='/'>
                                        <a>
                                            <span className="font-medium rubik text-lg">Honest</span> 
                                            <span className=' bg-primary text-white ml-2 mr-3 inline-flex uppercase font-medium text-lg px-1'>ELLITE</span> 
                                            <span className=' text-c6f6f font-normal  rubik text-lg'>Social Interaction</span>
                                        </a>
                                    </Link>
                                </li>
                                <li className='mb-8'>
                                    <Link href='/'>
                                        <a>
                                            <span className="font-medium rubik text-lg">Honest</span> 
                                            <span className=' bg-cec1a text-white ml-2 mr-3 inline-flex uppercase font-medium text-lg px-1'>ELLITE</span> 
                                            <span className=' text-c6f6f font-normal  rubik text-lg'>Social Interaction</span>
                                        </a>
                                    </Link>
                                </li>
                                <li className='mb-8'>
                                    <Link href='/'>
                                        <a>
                                            <span className="font-medium rubik text-lg">Honest</span> 
                                            <span className=' bg-cf081 text-white ml-2 mr-3 inline-flex uppercase font-medium text-lg px-1'>ELLITE</span> 
                                            <span className=' text-c6f6f font-normal  rubik text-lg'>Social Interaction</span>
                                        </a>
                                    </Link>
                                </li>
                                <li className='mb-8'>
                                    <Link href='/'>
                                        <a>
                                            <span className="font-medium rubik text-lg">Honest</span> 
                                            <span className=' bg-c982a text-white ml-2 mr-3 inline-flex uppercase font-medium text-lg px-1'>ELLITE</span> 
                                            <span className=' text-c6f6f font-normal  rubik text-lg'>Social Interaction</span>
                                        </a>
                                    </Link>
                                </li>
                                <li className='mb-8'>
                                    <Link href='/'>
                                        <a>
                                            <span className="font-medium rubik text-lg">Honest</span> 
                                            <span className=' bg-c6b1a text-white ml-2 mr-3 inline-flex uppercase font-medium text-lg px-1'>ELLITE</span> 
                                            <span className=' text-c6f6f font-normal  rubik text-lg'>Social Interaction</span>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </Box>
                    </Grid>
                    <Grid item md={2} >
                    <Box className=' pl-12 border-l-2 border-l-slate-200 h-full'>
                            <h5 className=' rubik font-medium text-2xl mb-7'>
                                Jobs
                            </h5>
                            <ul>
                                <li>
                                    <Link href="/">
                                        <a className=' leading-8 text-base text-c6f6f rubik font-normal capitalize tracking-wide  hover:text-black hover:font-medium transition '>
                                            Now Hiring
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                    <a className=' leading-8 text-base text-c6f6f rubik font-normal capitalize tracking-wide hover:text-black hover:font-medium transition'>
                                        Models
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                    <a className=' leading-8 text-base text-c6f6f rubik font-normal capitalize tracking-wide hover:text-black hover:font-medium transition'>
                                        Programmers
Graphic Designers
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                    <a className=' leading-8 text-base text-c6f6f rubik font-normal capitalize tracking-wide hover:text-black hover:font-medium transition'>
                                        Broadway managers
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                    <a className=' leading-8 text-base text-c6f6f rubik font-normal capitalize tracking-wide hover:text-black hover:font-medium transition'>
                                        Video TV editors
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                    <a className=' leading-8 text-base text-c6f6f rubik font-normal capitalize tracking-wide hover:text-black hover:font-medium transition'>
                                        Producers 
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                    <a className=' leading-8 text-base text-c6f6f rubik font-normal capitalize tracking-wide hover:text-black hover:font-medium transition'>
                                        Program managers
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                    <a className=' leading-8 text-base text-c6f6f rubik font-normal capitalize tracking-wide hover:text-black hover:font-medium transition'>
                                        Marketing executive
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </Box>
                    </Grid>
                    <Grid item md={3} >
                    <Box className=' pl-12 border-l-2  border-l-slate-200 h-full'>
                            <h5 className=' rubik font-medium text-2xl mb-7'>
                                Social links
                            </h5>
                            <Box className="social_widget__bar inline-flex items-center justify-start">
                                <Link href="/" >
                                    <a className={`${classes.socialIcon} h-8 w-8 inline-flex rounded-full shadow-xl items-center justify-center`}>
                                        <Image
                                        loader={ImageLoader}
                                        src="images/facebook-1.svg"
                                        alt="Footer logo"
                                        width={12}
                                        height={12}
                                        />
                                    </a>
                                </Link>
                                <Link href="/">
                                <a className={` ${classes.socialIcon} ml-3 h-8 w-8 inline-flex rounded-full shadow-xl items-center justify-center`}>
                                        <Image
                                        loader={ImageLoader}
                                        src="images/instagram-1.svg"
                                        alt="Footer logo"
                                        width={12}
                                        height={12}
                                        />
                                    </a>
                                </Link>
                                <Link href="/">
                                <a className={` ${classes.socialIcon} ml-3  h-8 w-8 inline-flex rounded-full shadow-xl items-center justify-center`}>
                                        <Image
                                        loader={ImageLoader}
                                        src="images/twitter-1.svg"
                                        alt="Footer logo"
                                        width={12}
                                        height={12}
                                        />
                                    </a>
                                </Link>
                                <Link href="/">
                                <a className={` ${classes.socialIcon} ml-3 h-8 w-8 inline-flex rounded-full  items-center justify-center`}>
                                        <Image
                                        loader={ImageLoader}
                                        src="images/linkedin-1.svg"
                                        alt="Footer logo"
                                        width={12}
                                        height={12}
                                        />
                                    </a>
                                </Link>
                            </Box>
                            <Box className=" mt-6 bg-primary p-8">
                                <p className=' text-white rubik font-normal leading-6 text-md'>
                                Zero Prostitution,
All Humans are by product of 
Sex, This Platform is meant for 
singles & couples that need 
Education, Information & 
Entertainment in the Sensual 
Industry
                                </p>
                                <h6 className='text-white uppercase text-base pt-6'>
                                    © T.H.E Entertainment
                                    </h6>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

            </Container> 
            </div>   
        </>
    );
}

export default React.memo(Footer);