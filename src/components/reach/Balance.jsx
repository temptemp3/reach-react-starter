import { useSelector } from "react-redux";

function Balance() {
  const netState = useSelector(state => state.net);

  return <p>Balance: {netState.bal && netState.bal + " " + netState.net}</p>;
}

export default Balance;
