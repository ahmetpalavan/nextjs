import Link from 'next/link'
export default function Navbar() {
    return (
        <nav>
            <div className='main'>
            <div classname='logo'>
                <h1>AHMET</h1>
            </div>
            <div className='li'>
            <Link href='/'><a>Anasayfa</a></Link>
            <Link href='hakkimizda'><a>Hakkımızda</a></Link>
            <Link href='bloglar'><a className='ahmet'>Blog Listesi</a></Link>
            </div>  
            </div>
        </nav>
)
}
