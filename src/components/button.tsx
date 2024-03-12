import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  bgColor: string;
  onClick: () => void;
};

const Button = ({ children, bgColor, onClick }: Props) => {
  return (
    <>
      <button onClick={onClick} className="button" style={{backgroundColor: bgColor}}>{children}</button>
    </>
  );
};

export default Button;
