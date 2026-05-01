import styles from "./Card.module.css";

// 1. Agrega 'img' dentro de las llaves de las props
export function Card({ title, description, img }) {
  return (
    <div className={styles.card}>
      
     
      <img 
        src={img} 
        alt={title} 
        className={styles.imagePlaceholder} 
        style={{ objectFit: "contain", width: "100%", height: "250px", padding: "10px", backgroundColor: "#fff" }} 
      />
      
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}