import styles from "./Propuesta.module.css";
// 1. Importa una imagen general de guitarras o de una tienda desde tus assets
import imgTienda from "../assets/tienda.png"; 

export function Propuesta({ titulo, texto }) {
  return (
    <div className={styles.propuestaContainer}>
      <div className={styles.texto}>
        <h2>{titulo}</h2>
        <p>{texto}</p>
      </div>
      <div className={styles.imagenContainer} style={{ textAlign: "center" }}>
        
        
        <img 
          src={imgTienda} 
          alt="Nuestra tienda" 
          style={{ width: "100%", maxWidth: "300px", height: "250px", objectFit: "contain" }} 
        />
        
      </div>
    </div>
  );
}