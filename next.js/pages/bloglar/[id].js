import styles from '../../styles/Home.module.css'

export default function Detay ({blog}) {
    return (
        <div>
            <h1 className={styles.title}>Detay Sayfası</h1>
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
        </div>
)
}

export const getServerSideProps= async (context)=>{
    const id=context.query.id;
    const res=await fetch('https://jsonplaceholder.typicode.com/posts/'+id);
    const data= await res.json();

    return{
        props:{
            blog:data
        }
    }
}