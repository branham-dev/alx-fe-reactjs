// import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../functions/fetchPosts";

const PostsComponent = () => {
	// const fetchData = async () => {
	// 	const response = await fetch("https://jsonplaceholder.typicode.com/posts");
	// 	const data = await response.json();
	// 	console.log(data);
	// };

	// useEffect(() => {
	// 	fetchData();
	// }, []);

	const { isLoading, isError, data, refetch } = useQuery({
		queryKey: ["posts"],
		queryFn: fetchPosts,
		staleTime: 5000,
		cacheTime: 60000,
		refetchOnWindowFocus: false,
		keepPreviousData: true,
	});

	if (isLoading) return <div>Loading...</div>;

	if (isError) return <div>An error has occurred: {isError.message}</div>;

	return (
		<div>
			<button onClick={() => refetch()} style={{ marginBottom: "10px" }}>
				Refetch Posts
			</button>
			{data.map((post) => (
				<div key={post.id}>
					<h2>{post.title}</h2>
					<p>{post.body}</p>
				</div>
			))}
		</div>
	);
};
export default PostsComponent;
