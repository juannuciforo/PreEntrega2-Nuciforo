const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container" style={{ marginTop: "15px", marginLeft: "10px" }}>
      <p style={{ fontSize: "85%"}}>{greeting}</p>
    </div>
  );
};

export default ItemListContainer;