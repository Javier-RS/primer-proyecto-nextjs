import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";

export default function contact () {
    return (
        <Layout
        title="Contact"
        description="si">
            <h1>Contacto</h1>
            <section className={utilStyles.headingMd}>
        <p>por el feis</p>
        <p>
          hoy no fio mañana si
        </p>
      </section>
        </Layout>
        
    );
}