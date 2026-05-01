import { Navbar } from "../components/Navbar";
import styles from "./Developer.module.css";
import miFoto from "../assets/perfil.jpg"; 

export function DeveloperPage() {
  return (
    <div className={styles.pageBackground}>
      <Navbar />
      
      <main className={styles.mainContainer}>
        <div className={styles.profileCard}>
          
          <div className={styles.banner}></div>

          <div className={styles.content}>
            <div className={styles.avatarWrapper}>
              <img 
                src={miFoto} 
                alt="Fabián Cisterna" 
                className={styles.avatar} 
                style={{ objectFit: "cover" }} 
              />
              
            </div>

            <h1 className={styles.name}>Fabián Cisterna</h1>
            <h2 className={styles.role}>Ingenieria Civil Informatica</h2>

            <div className={styles.location}>
              📍 San Fernando, O'Higgins, Chile
            </div>


            <a href="https://github.com/F-cisterna" target="_blank" rel="noreferrer" className={styles.githubButton}>
              Visitar GitHub
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}