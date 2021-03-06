import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Counter from "./counter";
import HeaderCartAttribute from "./header-cart-attribute";

class HeaderCartProduct extends Component {
  render() {
    const { cart, symbol, open } = this.props;

    let total = cart
      .map((mp) => {
        return (
          mp.prices.find((f) => f.currency.symbol === symbol).amount * mp.amount
        );
      })
      .reduce((a, b) => {
        return a + b;
      }, 0);

    return (
      <div className='cart-dropDown'>
        <div>
          <p>
            <span className='myBag'>My Bag,</span> {cart.length} items
          </p>
        </div>
        <div className='cart-dropDown-product'>
          {cart.map((product, i) => {
            let priceToShow = product.prices.find(
              (price) => price.currency.symbol === symbol
            );
            return (
              <div key={i} className='cart-dropDown-product-container'>
                <div className='cart-dropDown-product-info'>
                  <div>{product.brand}</div>
                  <div className='cart-dropDown-product-info-productName'>
                    {product.name}
                  </div>
                  <div className='price'>
                    {symbol}
                    {priceToShow.amount}
                  </div>
                  <div>
                    {product.attributes.map((attribute) => {
                      return (
                        <div key={attribute.id}>
                          <HeaderCartAttribute
                            attribute={attribute}
                            chosenAttributes={product.chosenAttributes}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className='cart-dropDown-product-counter'>
                  <Counter amount={product.amount} product={product} />
                </div>
                <div className='cart-dropDown-product-image-div'>
                  <img
                    key={product.id}
                    src={product.gallery[0]}
                    alt='product'
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className='cart-dropDown-price-total'>
          <p className='price'>Total</p>
          <p className='price'>
            {symbol}
            {total.toFixed(2)}
          </p>
        </div>
        <div className='headerCartButtons'>
          <Link to='/cart'>
            <button onClick={open}>VIEW BAG</button>
          </Link>
          <button className='cart-dropDown-checkout'>CHECK OUT</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    symbol: state.currencyReducer,
    cart: state.cartReducer,
  };
};

export default connect(mapStateToProps)(HeaderCartProduct);
