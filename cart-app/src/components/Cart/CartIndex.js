import React from 'react';
import { useEffect, useState } from "react";

const CartIndex = () => {
  const [product, setProduct] = useState({});
  const [productList, setProductList] = useState([]);
  const [isCartShow, setIsCartShow] = useState(false);

  function openModal () {
    window.addEventListener("message", function (v) {
      let data = v.data
      if(data.isCartShow){
        return setIsCartShow(data.isCartShow)       
      }
      if(data.product){
        const newProduct = {...data.product, qty: 1};
        setProduct(newProduct)
        setProductList(item => {
          if(item.length === 0){
            return [...item, newProduct]
          } else{
            const checkDuplicate = item.find(itemChild => 
              itemChild.title === newProduct.title  
            )
            if(checkDuplicate){
              item.forEach(
                itemChild2 =>
                {
                  if(itemChild2.title === newProduct.title){
                    itemChild2.qty++
                  }
                }
              )
              return [...item]
            } else{
              return [...item, newProduct]
            }
          }
        })
      }
    })
  }
  
  function closeModal(){
    setIsCartShow(false)
    if(!isCartShow) window.parent.postMessage({"isCartShow": isCartShow});
  }
  
  const removeProduct = (e, product) =>{
    e.preventDefault();
    if (window && window.parent) {
      setProductList(item => {
        return item.filter( itemChild => itemChild.title !== product.title)
      })
      window.parent.postMessage({removeProduct : product}, '*');
    }
  }

  function calculateGrandTotal(products){
    const grandTotal = products.reduce((total, currentValue) => total = total + (currentValue.price * currentValue.qty),0);
    return grandTotal
  }

  useEffect(() => {
    openModal();
  }, []);

  return (
    <div className={
      isCartShow ? "modal modal-open" : "modal"
    }>
      <div className="modal-overlay">
        <div className="modal-wrapper">
          <div className="cart">
            <div className="cart__head">
              <div className="cart__title">
                Shopping Cart
              </div>
              <button className="main__button main__button-icon" onClick={closeModal}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="cart__body"> 
              <div className="cart__content">
                {productList.length > 0 && (
                  <div className="cart__list">
                    {/* Product List in Cart */}
                    {productList.map((item) => (
                      <div className="cart__item" key={item.uuid}>
                        <div className="cart__item-body"> 
                          <div className="cart__item-content">
                            <div className="cart__item-image">
                              <img src={item.image} />
                            </div>
                            <div className="cart__item-group">
                              <div className="cart__item-title">
                                {item.title}
                              </div>
                              <div className="cart__item-qty">
                                Quantity: {item.qty}
                              </div>
                            </div>
                          </div>
                          <div className="cart__item-content">
                            <div className="cart__item-price">
                              $ {item.price}
                            </div>
                            <cart className="cart__item-remove" onClick={(e) => removeProduct(e, item)}>
                              <i className="fa-solid fa-trash"></i>
                            </cart>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {productList.length === 0 && (
                  <div className='cart__empty'>
                    Your Cart is Empty
                  </div>
                )}
              </div>
              {productList.length > 0 && (
              <div className="cart__group">
                <div className="cart__information">
                  <div className="cart__information-title">
                    Grand Total
                  </div>
                  <div className="cart__information-value">
                    $ {calculateGrandTotal(productList)}
                  </div>
                </div>
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default CartIndex;