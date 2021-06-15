import React from "react";
import { GetServerSideProps } from "next"
import Head from "next/head";
import { RichText } from "prismic-dom";
//import { getPrismicClient } from "../../services/prismic";
import { client } from "../../lib/prismic";
import {Image } from "@chakra-ui/core"


interface ProductProps {
  product: {
    uid: string;
    title: string;
    image_one: string;
    image_two?: string;
    content: string;
    updateAt: string;
  }
}



export default function product({product}: ProductProps){
  
  return (
    <>
    <Head>
      <title>{product.title} | IgNews</title>
    </Head>

    <main >
      <article >
        <h1>{product.title}</h1>
        <time>{product.updateAt}</time>
        <Image  className="bg-auto md:bg-contain max-h-50 align-top
                    w-44" src={product.image_one}  alt='mouse g502'/>
         <Image  className="bg-auto md:bg-contain max-h-50 align-top
                    w-44" src={product.image_two ? product.image_two : product.image_one }  alt='mouse g502'/>
        {/*<div 
        dangerouslySetInnerHTML={{__html: product.content}} />
        {/* dangerouslySetInnerHTML serve para setar a formatação das tags html diretamente como vem do servidor */}
        <div id="inject-comments-for-uterances"></div>

      </article>
    </main>
    </>
  )
}



export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const { uid } = params;
  const prismic = client(req)

  const response = await prismic.getByUID('products', String(uid), {})
  console.log(response)
 
  const product = {
    uid,
    title: RichText.asText(response.data.title),
    image_one: response.data.thumbnail.url,
    image_two: response.data.thumbnail2.url ? response.data.thumbnail2.url : null
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