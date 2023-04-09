import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  initialState: boolean;
  onLikeClick: () => void;
}

const Like = ({ initialState, onLikeClick }: Props) => {
  const [status, setStatus] = useState(initialState);

  const toggle = () => {
    setStatus(!status);
    onLikeClick();
  };

  if (status) return <AiFillHeart color="#ff6b81" size={20} onClick={toggle} />;

  return <AiOutlineHeart size={20} onClick={toggle} />;
};

export default Like;
