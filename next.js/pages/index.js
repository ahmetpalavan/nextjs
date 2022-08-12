
import styles from '../styles/Blog.module.css'

export default function Bloglar() {
  // console.log(bloglar);
  return (
    <div>
      <h1 className={styles.title}>AHMET</h1>
      {/* {bloglar.map(b=>{
        <div key={b.id}>
          <a className={styles.single}>
            <h3>{b.title}</h3>
          </a>
        </div>
      })} */}
    </div>
  )
}

// export const getStaticProps= async()=>{         //async olması sebebi dışarıdan bir veri kaynağı çekmek istiyorum.//
//   const res=await fetch('https://jsonplaceholder.typicode.com/posts')
//   const data= await res.json()
//   // console.log(data);
//   return{
//     props:{
//       bloglar:data.slice(0,10)
//     }
//   }
// }

