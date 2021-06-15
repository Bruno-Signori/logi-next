import MyFooter from "../components/Footer";
import MyHeader from "../components/Header";
import ThemeContainer from "../contexts/theme/ThemeContainer";
import "tailwindcss/tailwind.css";
import NewComponet from "../components/NewComponet";



function MyApp({ Component, pageProps }) {
  return (
    <ThemeContainer> 
         <MyHeader/>
            <Component {...pageProps} />
         <MyFooter /> 
    </ThemeContainer>
  )
}

export default MyApp;
