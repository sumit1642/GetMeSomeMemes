import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage, fetchMemes } from "../features/MemeSlice";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = () => {
	const dispatch = useDispatch();
	const { page } = useSelector((state) => state.memes);

	// Handle Next Page
	const handleNext = () => {
		dispatch(nextPage()); // Increment page
		dispatch(fetchMemes(20)); // Fetch next 20 memes
	};

	// Handle Previous Page
	const handlePrev = () => {
		if (page > 1) {
			dispatch(prevPage()); // Decrement page
			dispatch(fetchMemes(20)); // Fetch previous 20 memes
		}
	};

	return (
		<div className="flex justify-center items-center mt-6 gap-4">
			{/* Previous Page Button */}
			<button
				onClick={handlePrev}
				disabled={page === 1}
				className={`px-4 py-2 border rounded-lg flex items-center gap-2 ${
					page === 1
						? "opacity-50 cursor-not-allowed"
						: "hover:bg-gray-200"
				}`}>
				<ChevronLeft size={18} />
				Prev
			</button>

			{/* Page Number */}
			<span className="text-lg font-semibold">Page {page}</span>

			{/* Next Page Button */}
			<button
				onClick={handleNext}
				className="px-4 py-2 border rounded-lg flex items-center gap-2 hover:bg-gray-200">
				Next
				<ChevronRight size={18} />
			</button>
		</div>
	);
};

export default Pagination;
