interface Props {
  items: string[];
  onClear: () => void;
}

const Cart = ({ items, onClear }: Props) => {
  return (
    <>
      <p>Product in cart :</p>
      {items && items.map((item) => <p key={item}>{item}</p>)}
      <button onClick={onClear}>Remove all products</button>
    </>
  );
};

export default Cart;
