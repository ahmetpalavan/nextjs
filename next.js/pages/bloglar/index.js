import styles from '../../styles/Blog.module.css'
import Link from 'next/link';
export default function Bloglar({bloglar}) {
  return (
    <div>
      <h1 className={styles.title}>Bloglar</h1>
      {bloglar.map(b=>(
        <Link href={`/bloglar/${b.id}`} key={b.id}>
          <div key={b.id}>
          <a className={styles.single}>
            <h3>{b.title}</h3>
          </a>
          </div>
        </Link>
      ))}
    </div>
  )
}

export const getStaticProps= async()=>{
  const res= await fetch('https://jsonplaceholder.typicode.com/posts');
  const data=await res.json();

  return{
    props:{
      bloglar:data
    }
  }
}
