import React from 'react'
import { GetStaticProps, NextPageContext } from 'next'
import { Flex, Image, Link } from '@chakra-ui/core'

import SEO from '../../components/SEO'
import ScrollMembers from '../../components/BoxMObileteste'
import { Slider } from '../../components/BoxMenbersMob'


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
     <Image 
   rounded="full"
   size="150px"
   src={user.owner.avatar_url} />

  <Flex>Next stars: {user.full_name},{user.forks},  {user.full_name} ,{user.stargazers_count}, {user.description}, {user.owner.login} 
  <div className="ms:hidden">
      <Slider/>
      </div>
  </Flex>

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
  
