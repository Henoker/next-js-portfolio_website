import Theme from '../styles/theme';
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
   
   
      <Theme>
      
      <AnimatePresence exitBeforeEnter >
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
       
        
     
      </Theme>
      
    
  );
}
 