import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductosCard({ nombre,descripcion, precio, imagen}) {
  return (
    <Card style={{ width: '18rem',margin:'2rem', backgroundColor: '#FFEBCD', color:'olivegreen' ,boxShadow:'0 10px 4px  rgba(0, 0, 0, 0.5)', opacity:'0.8' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title style={{ fontWeight:'bold', fontSize:'1.2rem'}}>{nombre}</Card.Title>
        <Card.Text style={{ fontWeight:'bold', fontSize:'1.2rem'}}>
            {descripcion}
        </Card.Text>
        <Card.Text>
           Precio/L {precio}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductosCard;