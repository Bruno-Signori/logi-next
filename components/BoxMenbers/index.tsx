import React from 'react'
import Image from  'next/image';
import { motion } from 'framer-motion';

const PropsDivImage = ['block justify-items-center justify-center h-52 bg-gray-light rounded-xl'];
const PropsDivText = ['flex justify-items-center justify-center '];

export const BoxMenbers: React.FC = () => {
  return (
    <div className="hidden md:flex space-x-4 w-full h-48 justify-center tracking-wider justify-items-center">
  
        <div className={`${PropsDivImage}`}>
        <motion.div
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"]
              }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                loop: Infinity,
                repeatDelay: 6
              }}
          >
        <Image src="/electros.png" width={290} height={160}></Image>
       </motion.div>
        <div className={`${PropsDivText}`}>
          <text>Electros Software</text>
          </div>
         
        </div>

       
             
        <div className={`${PropsDivImage}`}>
        <motion.div
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"]
              }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                loop: Infinity,
                repeatDelay: 7.5
              }}
          >
        <Image src="/terabyte.png" width={290} height={160}></Image>
        </motion.div>

        <div className={`${PropsDivText}`}>
          <text>Tera Tech Lab</text>
          </div>
        </div>

    
        <div className={`${PropsDivImage}`}>
        <motion.div
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"]
              }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                loop: Infinity,
                repeatDelay: 9
              }}
          >
        <Image src="/predator.png" width={290} height={160}></Image>
        </motion.div>
        <div className={`${PropsDivText}`}>
          <text>TC Predator Gaming</text>
          </div>
        </div>

            
        <div className={`${PropsDivImage}`}>
          
<motion.div
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"]
              }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                loop: Infinity,
                repeatDelay: 10.5
              }}
          >
        <Image src="/spaceplay.png" width={290} height={160}></Image>
        </motion.div>
        <div className={`${PropsDivText}`}>
          <text>SpacePlay</text>
          </div>
        </div>

 </div>
 
  )
}
