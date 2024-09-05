type PropsType = {
  children?: React.ReactNode;
};

const Header = (props: PropsType) => {
  return (
    <>
      <nav className="w-full px-5 py-4 border-b border-neutral-200 dark:border-neutral-800 sticky top-0 z-50 backdrop-blur-md dark:bg-neutral-900/90 bg-white/90">
        <div className="flex items-center justify-between mx-auto">
          <div className="flex items-center space-x-2">{props.children}</div>
        </div>
      </nav>
    </>
  );
};

export default Header;
