import Layout from "../../components/Layout";
import utilStyles from "../../styles/utils.module.css";
import Link from 'next/link'

export default function index({data}) {
    return (
        <Layout
     
      title="Blog"
      description="Descripción de la página de inicio">
            <h1>Lista de blog</h1>
            <section className={utilStyles.headingMd}>
        
      {/* Pintar Datos */}
          
      </section>
      
  
      {data.map(({ id, title, body }) => (
        <div key={id}>
              <h3>
              <Link href={`/blog/${id}`}>
                 <a>
                  {id} - {title}
                 </a> 
                </Link>
              </h3>
              <p>{body}</p>
            </div>
          ))
        }
        </Layout>
    );
}
 //obtener los datos de la API
export async function getStaticProps() {
  try{
    const res=await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return {
      props: {
        data
      }
    }
  } catch(error){
    console.log(error)
  } 
}

