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
                <Image src="/duvar-resimleri-sevimli-kurbaga.jpg.jpg" width={128} height={77} />
            </div>
            <div className='li'>
            <Link href='/'><a><HomeIcon fontSize='large'/>Anasayfa</a></Link>
            <Link href='hakkimizda'><a><InfoIcon fontSize='large'/>Hakkımızda</a></Link>
            <Link href='bloglar'><a><ListIcon fontSize='large'/>Blog Listesi</a></Link>
            </div>  
            </div>
        </nav>
)
}
