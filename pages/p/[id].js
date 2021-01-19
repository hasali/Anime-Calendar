import Layout from '../../components/MyLayout.js'
import fetch from 'isomorphic-unfetch';

const Post = props => (

	<Layout>
		<h1>{props.anime.title}</h1>
		<p>{props.anime.synopsis}</p>
		<img src = {props.anime.image_url} />
		<p>{props.anime.aired.from}</p>
	</Layout>
);

Post.getStaticProps = async function(context) {

	const {id} = context.query;
	const res = await fetch(`https://api.jikan.moe/v3/anime/${id}`);
	const anime = await res.json();

	console.log(`Fetched anime: ${anime.title}`);
	console.log(`${anime.airing_start}`);

	return {anime};
}
export default Post;
