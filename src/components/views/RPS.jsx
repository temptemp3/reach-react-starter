import { useSelector } from "react-redux";
import { Alice, Bob } from "../reach/participants/Participants";

function RPS() {
  console.log(Alice)
  console.log(Alice())
  const appState = useSelector((state) => state.app);
  switch (appState.participant) {
    case "Alice":
      return <Alice />;
    case "Bob":
      return <Bob />;
    default:
      return <NoParticipant />;
  }
}

function NoParticipant() {
  return (
    <div>
      <h2>404 Not Found</h2>
    </div>
  );
}

export default RPS;
