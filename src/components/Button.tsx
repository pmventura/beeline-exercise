export type ButtonProps = {
  text: string;
  color: string; // Tailwind color class, e.g. 'bg-blue-500'
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  text,
  color,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded text-white font-semibold shadow ${color} hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
