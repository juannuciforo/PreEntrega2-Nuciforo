import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../styles/ItemListContainer.css';

function ItemListContainer() {
  const location = useLocation();
  const categoriaUrl = location.pathname.split('/').pop(); // Obtiene el último segmento de la ruta como la categoría

  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('/data/productos.json');
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
      <h3>{categoriaUrl ? `Listado de productos (${categoriaUrl})` : 'Todos los productos'}</h3>
      <br />
      <br />
      <div className="item-list">
        {items.map((item) => (

          <div key={item.id} className="item-card linkWithoutFx">
            <Link className='linkWithoutFx' to={`/item/${item.id}`}>
            <h3>{item.nombre}</h3>
            <p>Descripción: {item.descripcion}</p>
            <p>Precio: ${item.precio}</p>
            <p>Ver detalle</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;