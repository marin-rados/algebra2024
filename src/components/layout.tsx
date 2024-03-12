import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="layout">
        <p>hello i am layout component</p>
        <p>hello im just chilling here</p>
        {children}
      </div>
    </>
  );
};

export default Layout;
