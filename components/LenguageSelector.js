import React from 'react'
import  { useRouter} from 'next/router'


export default function LenguageSelector() {
    
    const router = useRouter()
    // console.log(router)

    const changelang = (ev)=>{
    router.push(router.pathname, router.pathname, {
        locale: ev.target.value
    })
    }
    return (
      <select onChange={changelang}>
      <option value='es'>Español</option>
      <option value='en'>Ingles</option>
      </select>
    )
}
