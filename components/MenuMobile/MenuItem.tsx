import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "@chakra-ui/core";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -200 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#19B5FE", "#19B5FE", "#19B5FE", "#19B5FE", "#19B5FE", "#19B5FE" ];
const link = ["/", "/products/allproducts", "/services/", "/", "/", "/" ];
const text = ["Home", "Products", "Services", "Members", "Contact", "Sign in"];

export const MenuItem = ({ i }) => {
  const style = { color: `${colors[i]}` };
 
  return (
    <motion.li className="mt-6 flex-1 z-50 text-lg cursor-pointer items-center top-6 w-15 h-8 list-none last:border-white  "
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95}}
    >
      <Link 
        _hover={{ color:"gray.300" }}
       _focus={{
        outline: "none",
        opacity: 0.4,
       
       }}
      href={link[i]}  style={style} >
       {text[i]}
      </Link>
     
    </motion.li>
  );
};
