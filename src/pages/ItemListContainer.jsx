import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/ItemListContainer.css'; // Importa tu archivo CSS personalizado

function ItemListContainer() {
  const location = useLocation();
  const categoriaUrl = location.pathname.split('/').pop(); // Obtiene el último segmento de la ruta como la categoría

  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('/data/productos.json'); // Asegúrate de usar la ruta correcta a tu archivo JSON
        const data = await response.json();

        // Filtrar los productos por categoría
        const filteredItems = categoriaUrl
          ? data.filter((item) => item.categoria.toLowerCase() === categoriaUrl.toLowerCase())
          : data;

        setItems(filteredItems);
      } catch (error) {
        console.log('Error al obtener los productos:', error);
      }
    };

    fetchItems();
  }, [categoriaUrl]);

  return (
    <div className="item-list-container">
      <br />
      <h3>Listado de productos</h3>
      <br />
      <br />
      <div className="item-list">
        {items.map((item) => (
          <div key={item.id} className="item-card">
            <h3>{item.nombre}</h3>
            <p>Descripción: {item.descripcion}</p>
            <p>Precio: {item.precio}</p>
            <p>Categoría: {item.categoria}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;