type PropsType = {
  children?: React.ReactNode;
}

const SideBar = (props: PropsType) => {
  return (
    <aside className="z-50 w-full overflow-y-auto overflow-x-hidden md:fixed md:left-0 md:w-56 md:pb-0 md:h-[calc(100vh-63px)] bg-white dark:bg-neutral-900 backdrop-blur-md opacity-95 border-b md:border-r border-neutral-200 dark:border-neutral-800">
      <div className="md:px-3 md:py-6">
        <nav className="flex items-center space-x-1 overflow-y-auto md:mb-3 md:flex-col md:space-x-0 md:space-y-1 md:overflow-y-visible px-6 md:px-0 pb-2 pt-2 md:pt-0">
          {props.children}
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;
