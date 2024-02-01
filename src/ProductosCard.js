import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ProductosCard({ nombre,descripcion, precio, imagen}) {
    
  return (
    <Card style={{ width: '80%',margin:'2rem', backgroundColor: '#FFEBCD', color:'olivegreen' ,boxShadow:'0 10px 4px  rgba(0, 0, 0, 0.5)', opacity:'0.8'}}>
      <Card.Img variant="top" src={imagen} className='cardImg' style={{ height:'200px'}} />
      <Card.Body>
        <Card.Title style={{ fontWeight:'bold', fontSize:'1.4rem'}}>{nombre}</Card.Title>
        <Card.Text style={{ fontWeight:'bold', fontSize:'1.2rem', color:'#121212'}}>
            {descripcion}
        </Card.Text>
        <Card.Text style={{ fontWeight:'bold', fontSize:'1.2rem', color:'#121212'}}>
           Precio/L {precio}
        </Card.Text>
        <Button variant="primary"><Link to="/contact" style={{color:'gold', textDecoration: 'none'}}>Comprar</Link></Button>
      </Card.Body>
    </Card>
  );
}

export default ProductosCard;