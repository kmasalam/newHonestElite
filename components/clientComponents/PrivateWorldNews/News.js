import React from 'react'
// next js
import Link from "next/link";
import Image from "next/image";
import SectionTitle from '../SectionTitle';
import { Grid } from '@mui/material';

export default function News() {
  const ImageLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <>
    <div className='news-header'>
          <SectionTitle
            title="News"
            size={`text-24`}
            fullWidth={false}
            />
        
        <p className=' pb-7 pr-28'>In a now-classic study, Barbara and Gene Eakins recorded seven university faculty meetings. 
          They found that, with one exception, the men at the meeting spoke more often and, 
          without exception, spoke longer. </p>
    </div>
    <Image loader={ImageLoader}
          src='images/party_news.png'
          alt='Party_news'
          width={536}
          height={176}
           />
      <h2 className=' pb-4 font-bold uppercase' 
      style={{
        fontSize:64,
        'WebkitBackgroundClip': 'text',
        '-webkitTextFillColor': 'transparent',
        background: 'url(images/party_news.png) no-repeat',
        '-webkit-background-clip':'text'
        }}>DRAG HEALS</h2>
      <div>
        <Grid container spacing={2} className='m-0'>
          <Grid item md={6}>
            <Image loader={ImageLoader}
                src='images/party_news2.png'
                alt='Party_news'
                width={252}
                height={322}
              />
          </Grid>
          <Grid item md={6}>
            <Image loader={ImageLoader}
                src='images/party_news3.png'
                alt='Party_news'
                width={252}
                height={322}
              />
          </Grid>
        </Grid>
      </div>
    </>
  )
}
