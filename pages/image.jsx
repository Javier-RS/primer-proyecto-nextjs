import Image from "next/image";

export default function ArticuloUno() {
  return (
    <div>
      <h1>Articulo 1</h1>

      <Image
        src="../public/sexa.jpg"
        height={400}
        width={400}
        alt="mi imagen de perfil"
      ></Image>
      
    </div>
  );
}