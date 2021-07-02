import React from "react";
import { GetServerSideProps } from "next"
import Head from "next/head";
import { RichText } from "prismic-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel  } from 'react-responsive-carousel';
import { client } from "../../lib/prismic";
import {Image } from "@chakra-ui/core"


interface ProductProps {
  product: {
    uid: string;
    title: string;
    image_one: string;
    image_two?: string;
    image_thre?: string;
    content: string;
    updateAt: string;
  }
}



export default function product({product}: ProductProps){
  
  return (
    <>
    <Head>
      <title>{product.title} | Logitech</title>
    </Head>

    <main style={{width: '250px', height: '200px'}} > 
      <article >
        <h1>{product.title}</h1>
        <time>{product.updateAt}</time>
        <Carousel showStatus={false} showThumbs={false}>
          <div>
            <Image width={250} height={200} src={product.image_one}  alt='mouse g502'/>
            </div>
            <div>
            <Image width={250} height={200} src={product.image_two ? product.image_two : product.image_one }  alt='mouse g502'/>
            </div>
           
       </Carousel>

      </article>
    </main>
    </>
  )
}



export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const { uid } = params;
  const prismic = client(req)

  const response = await prismic.getByUID('products', String(uid), {})
 
  const product = {
    uid,
    title: RichText.asText(response.data.title),
    image_one: response.data.thumbnail.url,
    image_two: response.data.thumbnail2.url ? response.data.thumbnail2.url : null,

  }
  return {
    props: {
      product,
    }
  }
}

{/*const recommendedProducts = await client().query([
  Prismic.Predicates.at('document.type', 'products')
]);

   return {
    
    props:{

      recommendedProducts: recommendedProducts.results,
    

    },
      revalidate: 1,
          
    }
   }*/}