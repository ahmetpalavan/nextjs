import Link from 'next/link'
import { useEffect } from 'react';
import {useRouter} from 'next/router'
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
export default function NotFound() {
    const router=useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            // router.push('/')
            router.back()
        },100000000000000000)
    },[])
    return (
        <div className='not-found' >
            <h1> <ErrorOutlineRoundedIcon fontSize='large'/></h1>
            <h2>404 |  Sayfa Bulunamadı</h2>
            <p>Lütfen <Link href="/"><a>Anasayfa</a></Link> için tıklayınız</p>
        </div>
    )
}
