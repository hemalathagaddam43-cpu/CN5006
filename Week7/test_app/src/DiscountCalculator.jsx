const DiscountCalculator = ({ productName, price }) => {
  const calculateDiscount = () => {
    const discountRate = document.getElementById("discountRate").value;
    const discountedPrice = Number(price) - (Number(price) * Number(discountRate) / 100);
    
    // Displays the result in bold and a different colour (blue)
    document.getElementById("discountMessage").innerHTML = 
      `<b style="color:blue">Discounted Price: £${discountedPrice.toFixed(2)}</b>`;
  };

  return (
    // Added textAlign: 'center' to keep everything in the middle
    <div style={{ textAlign: 'center' }}>
      <h2>{productName}</h2>
      <p>Price: £{price}</p>
      
      <label>Enter Discount (%): </label>
      <input 
        type="number" 
        id="discountRate" 
      />
      <br /><br />
      
      <button onClick={calculateDiscount}>
        Calculate Discount
      </button>
      
      <p id="discountMessage"></p>
    </div>
  );
};

export default DiscountCalculator;