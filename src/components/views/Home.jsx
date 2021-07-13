import { useState } from "react";
import { useSelector } from "react-redux";
import { DeployButton, AttachButton } from "../reach/DeployAttach";


const Home = () => {
	const netState = useSelector(state => state.net);

	const [wager, setWager] = useState(1);
	const handleChange = (e) => setWager(parseInt(e.target.value));

	return (
		<div>
			<h1>React Reach Template</h1>
			{
				netState.acc && (
					<>
						<form>
							<label htmlFor="wager">Wager Amount</label>
							<input
								type="number"
								name="wager"
								id="wager"
								value={wager}
								onChange={handleChange}
							/>
						</form>
						<DeployButton role="Alice" wager={wager} />
						<AttachButton role="Bob" />
					</>
				)
			}
		</div>
	);
}

export default Home;