import React from 'react'
import { GetStaticProps, NextPageContext } from 'next'
import { Flex, Image, Link } from '@chakra-ui/core'

import SEO from '../../components/SEO'
import ScrollMembers from '../../components/BoxMObileteste'
import { Slider } from '../../components/BoxMenbersMob'
import BoxServicesContainer from '../../components/BoxServicesContainer'


interface Props {
  stars?: string;
  full_name?: string;
  description?: string;
  stargazers_count?: string;
  forks?: string;
  owner?: {
    login?: string;
    avatar_url?: string;
  };
}


export default function git({ user }) {
  return (
    
    <div>
    <SEO 
    title="Github Repos" shouldExcludeTitleSuffix
    />
 
  <div className="ms:hidden">
      <Slider/>
      </div>
      <BoxServicesContainer/>
 

  </div>

  )}





export const getStaticProps: GetStaticProps = async ({}) => {

  const response = await fetch(`https://api.github.com/repos/vercel/next.js`);
  const data = await response.json();
  return {
    props: {
      user: data,
      
    },
    revalidate: 1
  }
}
  
