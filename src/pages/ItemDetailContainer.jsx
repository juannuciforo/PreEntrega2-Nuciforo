// ItemDetailContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
  const { id } = useParams(); // Obtener el parámetro del ID del producto desde la URL
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch('/data/productos.json');
        const data = await response.json();
        // Encontrar el producto por su ID
        const selectedItem = data.find(item => item.id === id);
        setItem(selectedItem);
      } catch (error) {
        console.log('Error al obtener los detalles del producto:', error);
      }
    };

    fetchItem();
  }, [id]);

  if (!item) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Detalles del producto</h1>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>Precio: {item.price}</p>
    </div>
  );
}

export default ItemDetailContainer;