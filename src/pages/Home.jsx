import img1 from '../images/custom-logo-2.png'

function Home() {
  return (
    <>
    <div className="container-fluid text-center bg-primary-subtle bg-gradient p-5">
      <h1 className="container-fluid text-center">Welcome to Greekend Transfers</h1>
      <div className="container-fluid">At Greekend Transfers, we’re more than just a car rental service — we’re your trusted travel partner. Whether you're heading to a business meeting or exploring the city, our fleet is always clean, modern, and reliable. Enjoy hassle-free bookings, punctual transfers, and customer support that actually cares. With competitive rates and a friendly team, we make sure every journey starts and ends with satisfaction.
      </div>
      <h2 className="container-fluid text-center mt-4">Our services include</h2>
 <div className="row justify-content-center mt-4">

    <div className="col-md-4 mb-4">
      <div className="card" style={{ width: '18rem' }}>
        <img src={img1} className="card-img-top" alt="Transfers" />
        <div className="card-body">
          <h5 className="card-title"><strong>Transfers</strong></h5>
          <p className="card-text">Economy & VIP transfers, with a state-of-the-art minivan or a classy and powerful car for families, individuals or groups looking for comfort and reliability.</p>
          <a href="/pricelist" className="btn btn-primary">See prices</a>
        </div>
      </div>
    </div>

    <div className="col-md-4 mb-4">
      <div className="card" style={{ width: '18rem' }}>
        <img src={img1} className="card-img-top" alt="Fleet" />
        <div className="card-body">
          <h5 className="card-title"><strong>Rentals</strong></h5>
          <p className="card-text">Motorhome (camper van) rental for those who want to explore Greece with freedom and comfort, ideal for road trips and vacations in style.</p>
          <a href="/rentals" className="btn btn-primary">See more</a>
        </div>
      </div>
    </div>

    <div className="col-md-4 mb-4">
      <div className="card" style={{ width: '18rem' }}>
        <img src={img1} className="card-img-top" alt="Fleet" />
        <div className="card-body">
          <h5 className="card-title"><strong>Tours</strong></h5>
          <p className="card-text">Customized tours to explore the beauty of Greece, with knowledgeable guides and flexible itineraries. Explore Greece and discover its history and charm.</p>
          <a href="/" className="btn btn-primary">See more</a>
        </div>
      </div>
    </div>
    </div>
</div>
    </>
  );
}
export default Home;
