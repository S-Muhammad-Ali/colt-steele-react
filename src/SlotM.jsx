const SlotM = (props) => {
  //let x = "🌝";
  //let y = "🌝";
  //let z = "😒";

  if (props.x === props.y && props.y === props.z) {
    return (
      <>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <div className="slot_inner">
          <h1>
            {props.x} {props.y} {props.z}
          </h1>
          <h1>This is matching</h1>
          {/* {console.log(x.charCodeAt(), y, z)} */}
          <hr />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {props.x} {props.y} {props.z}
          </h1>
          <h1>This is not matching</h1>
          <hr />
        </div>
      </>
    );
  }
};

export { SlotM };
