import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

const PostsComponent = () => {
	// const fetchData = async () => {
	// 	const response = await fetch("https://jsonplaceholder.typicode.com/posts");
	// 	const data = await response.json();
	// 	console.log(data);
	// };

	// useEffect(() => {
	// 	fetchData();
	// }, []);

	const { isPending, error, data } = useQuery({
		queryKey: ["posts"],
		queryFn: () => fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json()),
	});

	if (isPending) return <div>Loading...</div>;

	if (error) return <div>An error has occurred: {error.message}</div>;

	return (
		<div>
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
