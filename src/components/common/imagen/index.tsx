type PropsType = {
  alt?: string;
  className?: string;
  onClick?: () => void;
  src: string;
  width?: number | string;
  height?: number;
};
const Image = (props: PropsType) => {
  //prettier-ignore
  const { 
    width = 120,
    height = 140
  } = props;

  return (
    <img
      width={width}
      height={height}
      src={props.src}
      alt={props.alt}
      className={props.className}
      onClick={props.onClick}
    />
  );
};

export default Image;
