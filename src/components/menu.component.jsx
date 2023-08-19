import MenuItem from './menu-item.component';

import pizzaData from '../../public/data';

const Menu = () => {
  return (
    <main className='menu'>
      <h2>Our menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      <div className='pizzas'>
        {pizzaData.map((pizza) => (
          <MenuItem
            key={pizza.name}
            image={pizza.photoName}
            title={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            isSoldOut={pizza.soldOut}
          />
        ))}
      </div>
    </main>
  );
};

export default Menu;
