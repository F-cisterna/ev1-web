import { Navbar } from "../components/Navbar";
import { Card } from "../components/Card";
import { Propuesta } from "../components/Propuesta";
import { productos } from "../data/dummy";

export function HomePage() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: "40px 5vw" }}>
        
        {/* Propuesta enfocada solo en guitarras */}
        <Propuesta 
          titulo="Tu próxima guitarra te espera" 
          texto="Somos especialistas exclusivos en guitarras eléctricas. Encuentra el instrumento perfecto para tu estilo, con el ajuste ideal para que solo te preocupes de tocar." 
        />
        
        <h2 style={{ marginBottom: "20px" }}>Guitarras en Stock</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
          {/* El map generará las tarjetas con nuestras 3 guitarras */}
          {productos.map((prod) => (
            <Card 
              key={prod.id} 
              title={prod.title} 
              description={prod.description} 
              img={prod.img} 
            />
          ))}
        </div>
      </main>
    </div>
  );
}