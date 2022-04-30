import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout
      home
      title="Inicio"
      description="Descripción de la página de inicio"
    >
      <section className={utilStyles.headingMd}>
        <p>Fan de las monas chinas</p>
        <p>
          Este es el inicio de mi pagina de monas chinas jder!
         Aprendiendo Next.js
        </p>
      </section>
    </Layout>
  );
}