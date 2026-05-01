import { Navbar } from "../components/Navbar";

export function DeveloperPage() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: "40px 5vw", textAlign: "center" }}>
        <h2>Perfil del Desarrollador</h2>
        <div style={{ marginTop: "20px", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", display: "inline-block" }}>
          <div style={{ width: "100px", height: "100px", borderRadius: "50%", background: "#ccc", margin: "0 auto 20px" }}></div>
          <h3>Fabián Cisterna</h3>
          <p><strong>Carrera:</strong> Informática</p>
          <p><strong>Ciudad:</strong> San Fernando, O'Higgins, Chile</p>
          <p><strong>GitHub:</strong> <a href="https://github.com/F-cisterna" target="_blank" rel="noreferrer">Ver perfil</a></p>
        </div>
      </div>
    </div>
  );
}