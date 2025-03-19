/* eslint-disable react/prop-types */
import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	Button,
} from "@mui/material";
import { EyeOff, ExternalLink } from "lucide-react";

const MemeCard = ({ title, url, postLink, subreddit, nsfw }) => {
	return (
		<Card className="shadow-lg rounded-lg overflow-hidden bg-white">
			{/* Meme Image */}
			<CardMedia
				component="img"
				height="250"
				image={url}
				alt={title}
			/>

			{/* Meme Details */}
			<CardContent className="p-4">
				{/* Title */}
				<Typography
					variant="h6"
					className="font-semibold mb-2">
					{title}
				</Typography>

				{/* Links */}
				<div className="flex items-center gap-3 mt-2">
					<Button
						variant="outlined"
						color="primary"
						href={postLink}
						target="_blank"
						startIcon={<ExternalLink size={16} />}>
						Reddit Post
					</Button>

					<Button
						variant="outlined"
						color="secondary"
						href={`https://www.reddit.com/r/${subreddit}`}
						target="_blank"
						startIcon={<ExternalLink size={16} />}>
						r/{subreddit}
					</Button>
				</div>

				{/* NSFW Warning */}
				{nsfw && (
					<div className="text-red-500 flex items-center gap-2 mt-2">
						<EyeOff size={18} />
						<Typography variant="body2">NSFW</Typography>
					</div>
				)}
			</CardContent>
		</Card>
	);
};

export default MemeCard;
