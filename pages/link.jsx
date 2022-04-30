import Link from "next/link";

export default function contacto() {
  return (
    <div>
      <h1>Contacto</h1>
      <button>
        <Link href="/">
          <a>Inicio</a>
        </Link>
      </button>
    </div>
  );
}