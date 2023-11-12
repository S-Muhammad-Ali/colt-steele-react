function ClickerExr({ message, buttonText }) {
  //Another Approch to make alert funtion here and claim it below
  const handleClick = () => {
    console.log(message);
  };
  return (
    <div>
      <button
        // onClick={() => {
        //   alert(message);
        // }}
        onClick={handleClick}
      >
        {buttonText}
      </button>
    </div>
  );
}

export { ClickerExr };
