import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="layout">
        <p>hello i am layout component</p>
        {children}
      </div>
    </>
  );
};

export default Layout;
