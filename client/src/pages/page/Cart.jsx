import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Cart(props) {
  return (
    <Offcanvas show={props.showCart} onHide={props.handleCloseCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        Hi shoping
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default Cart;
