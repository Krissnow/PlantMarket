const PopularPlants = () => {
  return (
    <div>
      <section className="products">
        <h2>Popularne rośliny</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="plant1.jpg" alt="Roślina 1" />
            <h3>Monstera</h3>
            <p>Monstera deliciosa, 30 cm</p>
            <span className="price">79.99 PLN</span>
          </div>
          <div className="product-card">
            <img src="plant2.jpg" alt="Roślina 2" />
            <h3>Sansevieria</h3>
            <p>Sansevieria trifasciata, 25 cm</p>
            <span className="price">59.99 PLN</span>
          </div>
          <div className="product-card">
            <img src="plant3.jpg" alt="Roślina 3" />
            <h3>Fikus</h3>
            <p>Ficus elastica, 40 cm</p>
            <span className="price">89.99 PLN</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularPlants;
