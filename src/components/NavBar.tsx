interface Props {
  cartItemCount: number;
}

const NavBar = ({ cartItemCount }: Props) => {
  return <p>NUmber of product in cart : {cartItemCount}</p>;
};

export default NavBar;
