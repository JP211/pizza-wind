import React from "react";
import { Toast } from "react-bootstrap";

export function Confirmation({ toggle }) {
  return (
    <Toast onClose={() => toggle(false)}>
      <Toast.Header>
        <strong className="mr-auto">Your Order Is In The Oven!</strong>
        <small>just now</small>
      </Toast.Header>
      <Toast.Body>Your pizza is on the way - see you in 30 mins!</Toast.Body>
    </Toast>
  );
}
