import { ReactNode, useState } from "react";
import Button from "./Button";

interface Props {
  maxChar: number;
  children: string;
}

const ExpandableText = ({ maxChar = 100, children }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  if (children.length === 100) return <p>{children}</p>;
  let text = isExpanded ? children : children.substring(0, maxChar);
  return (
    <p>
      {text}...
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "less" : "more"}
      </button>
    </p>
  );
};

export default ExpandableText;
