import "./index.css";
import HomePage from "./pages/HomePage";
import { Typography } from "@mui/material";

function App() {
	return (
		<>
			{/* Background Layer */}
			<div className="fixed inset-0 -z-10 h-full w-full bg-gray-400 bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>

			{/* Title */}
			<Typography
				variant="h3"
				className="italic font-serif underline text-center mt-6 text-gray-800">
				Get Those Memes
			</Typography>

			{/* Main Content */}
			<HomePage />
		</>
	);
}

export default App;
