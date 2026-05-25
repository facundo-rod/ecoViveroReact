const Footer = () => {
  const team = [
    { id: 1, nombre: "Lucas Green", puesto: "Especialista en Botánica" },
    { id: 2, nombre: "Ana Flora", puesto: "Diseño de Paisajes" },
    { id: 3, nombre: "Mateo Raíz", puesto: "Atención al Cliente" }
  ];

  return (
    <footer style={styles.footer}>
      <div style={styles.info}>
        <h3>EcoVivero S.A.</h3>
        <p>Llevando vida a tu hogar desde 2024.</p>
        <p>Contacto: info@ecovivero.com</p>
      </div>
      <div style={styles.teamContainer}>
        {team.map(person => (
          <div key={person.id} style={styles.card}>
            <h4>{person.nombre}</h4>
            <p>{person.puesto}</p>
          </div>
        ))}
      </div>
    </footer>
  );
};

const styles = {
  footer: { background: '#f4f4f4', padding: '2rem', marginTop: '2rem', borderTop: '2px solid #2e7d32' },
  info: { textAlign: 'center', marginBottom: '1.5rem' },
  teamContainer: { display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' },
  card: { border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', minWidth: '150px', textAlign: 'center', background: 'white' }
};

export default Footer;