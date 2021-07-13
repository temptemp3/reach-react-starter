import { useState } from "react";
import { useSelector } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Redirect } from "react-router-dom";

const Deploy = () => {
	const appState = useSelector(state => state.app);

	const [copied, setCopied] = useState(false);
	const [goApp, setGoApp] = useState(false);

	const handleCopy = () => setCopied(true);
	const handleProceed = () => setGoApp(true);

	return (
		<div>
			<h2>Contract Info:</h2>
			<pre>{appState.ctcInfo}</pre>
			<CopyToClipboard onCopy={handleCopy} text={appState.ctcInfo}>
				<button>{copied ? "Copied" : "Copy"}</button>
			</CopyToClipboard>
			<button onClick={handleProceed}>Proceed to Application</button>
			{goApp && <Redirect to="/app" />}
		</div>
	);
}

export default Deploy;