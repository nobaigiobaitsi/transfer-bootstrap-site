function Pricelist() {
  return (
    <div className="container">
      <h1 className="text-center my-4">Pricing List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Service</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Transfers</td>
            <td>From €50</td>
          </tr>
          <tr>
            <td>Rentals</td>
            <td>From €100/day</td>
          </tr>
          <tr>
            <td>Tours</td>
            <td>From €75/person</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Pricelist;
