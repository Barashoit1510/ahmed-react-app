function Clicker() {
  const handleClick = () => {
    alert("You clicked the button!");
  };

  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: "green", color: "white" }}
    >
      Click Me!
    </button>
  );
}

export default Clicker;
