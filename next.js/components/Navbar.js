import Link from 'next/link'
import Image from 'next/image'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ListIcon from '@mui/icons-material/List';
export default function Navbar() {
    return (
        <nav>
            <div className='main'>
            <div className='logo'>
                <Image src="/duvar-resimleri-sevimli-kurbaga.jpg.jpg" width={128} height={95} />
            </div>
            <div className='li' style={{marginTop:20}}>
            <Link href='/'><a><HomeIcon />Anasayfa</a></Link>
            <Link href='hakkimizda'><a><InfoIcon />Hakkımızda</a></Link>
            <Link href='bloglar'><a><ListIcon />Blog Listesi</a></Link>
            </div>  
            </div>
        </nav>
)
}
