const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 21;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className='footer'>
      {isOpen ? (
        <div className='order'>
          <p>We&apos;re open until {closeHour}:00. Come visit us!</p>
          <btn className='btn'>Order now!</btn>
        </div>
      ) : (
        <p>
          We&apos;re happy to welcome you between {openHour}:00 and {closeHour}
          :00!
        </p>
      )}
    </footer>
  );
};

export default Footer;
