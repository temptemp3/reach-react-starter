// Dropdown to select network
const SelectNetwork = (props) => {
  const handleChange = (e) => {
    props.onCh(e.target.value);
  };

  return (
    <select onChange={handleChange}>
      <option>ALGO</option>
      <option>ETH</option>
      <option>CFX</option>
    </select>
  );
}

export default SelectNetwork;
