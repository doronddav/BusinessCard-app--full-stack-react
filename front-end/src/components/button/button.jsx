import "./button.style.scss";

const BUTTON_TYPE_CLASSES = {
  regularForm: "regularForm",
};
const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`btn btn-primary regularForm animated-border-button button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
