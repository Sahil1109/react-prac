import React from "react";
interface childProps {
  title: string;
  array?: string[];
  fetchData(x: string): Promise<void>;
}
const MemoComponent = (props: childProps) => {
  React.useEffect(() => {
    render.current = render.current + 1;
  });
  const render = React.useRef(0);

  React.useEffect(() => {
    props.fetchData("users");
  }, [props]);
  return (
    <div>
      <h5>{props.title}</h5> Memo component
      <h2>Rendered {render.current} times</h2>;
    </div>
  );
};

export default React.memo(MemoComponent);
