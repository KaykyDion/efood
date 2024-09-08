import { useState } from "react";
import DeliveryForm from "../DeliveryForm";
import PaymentForm from "../PaymentForm";

type Props = {
  backToCart: () => void;
};

export default function Checkout({ backToCart }: Props) {
  const [isPaying, setIsPaying] = useState(false);

  return (
    <>
      {!isPaying ? (
        <DeliveryForm
          backtoCart={backToCart}
          goToPayment={() => setIsPaying(true)}
        />
      ) : (
        <PaymentForm backToAddressEdit={() => setIsPaying(false)} />
      )}
    </>
  );
}
