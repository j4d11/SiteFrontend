import Image from "next/image";
import styles from "../app/page.module.css"; // Arquivo CSS vinculado

export default function Page() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image
            src="/images/logo.png" // Substitua pelo caminho da imagem
            alt="Logo"
            width={50}
            height={50}
          />
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><a href="#arte-e-estetica">Arte e Estética</a></li>
            <li><a href="#pontos-turisticos">Pontos Turísticos</a></li>
            <li><a href="#tradicoes-festivais">Tradições e Festivais</a></li>
            <li><a href="#culinaria">Culinária</a></li>
            <li><a href="#cultura-pop">Cultura Pop</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </nav>
      </header>

      {/* Conteúdo principal */}
      <main className={styles.main}>
        <h1>Conteúdo da Página</h1>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2024 Sakura Journey. Todos os direitos reservados.</p>
        <div className={styles.social}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </div>
      </footer>
    </div>
  );
}

