interface Props {
  heading: string;
  color?: string;
  onButtonClick: () => void;
}
const Button = ({ heading, color = "primary", onButtonClick }: Props) => {
  return (
    <button
      type="button"
      className={"btn btn-" + color}
      onClick={onButtonClick}
    >
      {heading}
    </button>
  );
};

export default Button;
