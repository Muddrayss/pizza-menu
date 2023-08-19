import PropTypes from 'prop-types';

const MenuItem = ({ image, title, ingredients, price, isSoldOut }) => {
  return (
    <div className={`pizza ${isSoldOut ? 'sold-out' : ''}`}>
      <img src={image} />
      <div>
        <h3>{title}</h3>
        <p>{ingredients}</p>
        <span>{isSoldOut ? 'SOLD OUT' : '$' + price}</span>
      </div>
    </div>
  );
};

MenuItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  ingredients: PropTypes.string,
  price: PropTypes.number,
  isSoldOut: PropTypes.bool,
};

export default MenuItem;
