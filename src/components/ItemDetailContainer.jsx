import React, { useEffect, useState } from 'react';
import { useLocation} from 'react-router-dom';
import '../styles/ItemDetail.css';


function ItemDetailContainer() {
  const location = useLocation();
  const [item, setItem] = useState(null);
  const itemUrl = location.pathname.split('/').pop(); // Obtiene el último segmento de la ruta como el id
  
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch('/data/productos.json');
        const data = await response.json();
  
        const selectedItem = data.find((item) => item.id.toString() === itemUrl.toString());
        setItem(selectedItem);
      } catch (error) {
        console.log('Error al obtener el item:', error);
      }
    };
  
    fetchItem();
  }, [itemUrl]);

  if (!item) {
    return <div>Cargando el detalle del item...</div>;
  }

  return (
    <div className="item-detail-container">
      <div className="item-detail-card">
        <h3 className="item-detail-title">{item.nombre}</h3>
        <p className="item-detail-description">Descripción: {item.descripcion}</p>
        <p className="item-detail-category">Categoría: {item.categoria}</p>
        <p className="item-detail-price">Precio: ${item.precio}</p>
      </div>
    </div>
  );
}

export default ItemDetailContainer;