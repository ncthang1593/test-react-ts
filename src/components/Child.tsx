import { memo } from "react";

function Child({}) {

  console.log('re-render');
  return (
    <div>
      <p>Child Component</p>
    </div>
  );
}

export default memo(Child);
