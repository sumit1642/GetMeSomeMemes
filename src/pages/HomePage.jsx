import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMemes } from "../features/MemeSlice";
import MemeCard from "../components/MemeCard";
import Pagination from "../components/Pagination";
import { Grid2, Typography, CircularProgress, Alert } from "@mui/material";

const HomePage = () => {
	const dispatch = useDispatch();
	const { memes, loading, error, page } = useSelector((state) => state.memes);

	// Fetch memes when page changes
	useEffect(() => {
		dispatch(fetchMemes(20));
	}, [dispatch, page]);

	return (
		<div className=" mx-auto p-6">
			{/* Page Title */}
			<Typography
				variant="h4"
				className="text-center font-bold mb-6 text-gray-800">
				🔥 Fresh Memes 🔥
			</Typography>

			{/* Error Message */}
			{error && (
				<Alert
					severity="error"
					className="text-center mb-4">
					{error}
				</Alert>
			)}

			{/* Loading State */}
			{loading && (
				<div className="flex justify-center my-6">
					<CircularProgress />
				</div>
			)}

			{/* Meme Grid2 (4 memes per row) */}
			<Grid2
				container
				spacing={4}>
				{memes.map((meme, index) => (
					<Grid2
						item
						xs={12}
						sm={6}
						md={4}
						lg={3}
						key={index}>
						<MemeCard
							title={meme.title}
							url={meme.url}
							postLink={meme.postLink}
							subreddit={meme.subreddit}
							nsfw={meme.nsfw}
						/>
					</Grid2>
				))}
			</Grid2>

			{/* Pagination Controls */}
			<Pagination />
		</div>
	);
};

export default HomePage;
