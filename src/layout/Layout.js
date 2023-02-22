import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div className="flex h-full w-full flex-col items-center">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
