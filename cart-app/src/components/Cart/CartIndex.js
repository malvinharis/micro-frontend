import React from 'react';

const CartIndex = () => {
  return (
    <div className="modal">
      <div className="modal-overlay">
        <div className="modal-wrapper">
          <div className="cart">
            <div className="cart__head">
              <div className="cart__title">
                Shopping Cart
              </div>
              <button className="main__button main__button-icon">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="cart__body"> 
              <div className="cart__content">
                <div className="cart__list">
                  <div className="cart__item">
                    <div className="cart__item-body"> 
                      <div class="cart__item-content">
                        <div class="cart__item-image">
                          <img src="http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/mens-better-than-naked-jacket-AVMH_LC9_hero.png" />
                        </div>
                        <div className="cart__item-group">
                          <div class="cart__item-title">
                            Product A
                          </div>
                          <div class="cart__item-qty">
                            Quantity: 2
                          </div>
                        </div>
                      </div>
                      <div class="cart__item-content">
                        <div class="cart__item-price">
                          $ 100
                        </div>
                        <cart className="cart__item-remove">
                          <i class="fa-solid fa-trash"></i>
                        </cart>
                      </div>
                    </div>
                  </div>

                  <div className="cart__item">
                    <div className="cart__item-body"> 
                      <div class="cart__item-content">
                        <div class="cart__item-image">
                          <img src="http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/mens-better-than-naked-jacket-AVMH_LC9_hero.png" />
                        </div>
                        <div className="cart__item-group">
                          <div class="cart__item-title">
                            Product B
                          </div>
                          <div class="cart__item-qty">
                            Quantity: 2
                          </div>
                        </div>
                      </div>
                      <div class="cart__item-content">
                        <div class="cart__item-price">
                          $ 100
                        </div>
                        <cart className="cart__item-remove">
                          <i class="fa-solid fa-trash"></i>
                        </cart>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cart__group">
                <div className="cart__information">
                  <div className="cart__information-title">
                    Grand Total
                  </div>
                  <div className="cart__information-value">
                    $ 650
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartIndex;