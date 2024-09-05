type PropTypes = {
  children?: React.ReactNode;
};

const Layout = (props: PropTypes) => {
  return <div className="ml-0 md:ml-56 pb-6">{props.children}</div>;
};

export default Layout;
