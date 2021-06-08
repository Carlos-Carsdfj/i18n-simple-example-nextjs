import LenguageSelector from '../components/LenguageSelector' 
import Link from 'next/link'
import  { useRouter} from 'next/router'



export default function Contact(props){

    const router = useRouter()
    const {contact} = props 
    return(<div>
        <h1>{contact.title}</h1>
        <LenguageSelector></LenguageSelector>
        <br></br>
        <Link href='/' locale={router.locale}>
            <a>
              {contact.link}
            </a>
          </Link>
    </div>)
}


export async function getStaticProps({locale}){
    


    //example if we work with a server for search the languages
    // const response = await fetch("URL")
    // const result = await response.json()

    // it show you this in your terminal or cmd
    // console.log(locale)
    
    const response = await import(`../lang/${locale}.json`) 

    

    return {
        props: {
            contact: response.default.contact
        }
    }

}