import React from "react";

function Checkout() {
  const [{ watchlist }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        {watchlist?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is empty</h2>
            <p>
              Click "Add to Basket" under the item you want to put in your
              basket.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
          </div>
        )}
      </div>
      {watchlist.length > 0 && <div className="checkout__right"></div>}
    </div>
  );
}

export default Checkout;
