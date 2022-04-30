import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";

export default function about () {
    return (
        <Layout
        title="About"
        description="si">
            <h1>Quien Soy</h1>
            <section className={utilStyles.headingMd}>
        <p>yo solo se que no se nada</p>
        
       
      </section>
        </Layout>
    )
}