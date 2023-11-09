import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import MyBtn from '../common/Button/MyBtn'

function Cart(props) {
  return (
    <Offcanvas show={props.showCart} onHide={props.handleCloseCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
      <h3> Your Bag Is Empty....</h3>
      <br/>
      <MyBtn>
        <h5>Continue Shopping</h5>
      </MyBtn>
      
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default Cart;
