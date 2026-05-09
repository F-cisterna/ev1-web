import { Navbar } from "../components/Navbar";
import styles from "./Developer.module.css";
import miFoto from "../assets/perfil.jpg"; 


export function DeveloperPage({ nombre, rol, ubicacion, bio, linkGithub }) {
  return (
    <div className={styles.pageBackground}>
      <Navbar />
      
      <main className={styles.mainContainer}>
        <div className={styles.profileCard}>
          <div className={styles.banner}></div>

          <div className={styles.content}>
            <div className={styles.avatarWrapper}>
              <img src={miFoto} alt={nombre} className={styles.avatar} style={{ objectFit: "cover" }} />
            </div>

            {/* 2. Usamos las variables en vez del texto fijo */}
            <h1 className={styles.name}>{nombre}</h1>
            <h2 className={styles.role}>{rol}</h2>

            <div className={styles.location}>
              📍 {ubicacion}
            </div>

            <p className={styles.bio}>
              {bio}
            </p>

            <a href={linkGithub} target="_blank" rel="noreferrer" className={styles.githubButton}>
              Visitar GitHub
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}