import { articles } from "../../../data";


export default function handler( { query: { id } }, res ) {
	const filteredArticle = articles.filter( article => article.id === id )[0]

	if ( filteredArticle.length > 0 ) {
		res.status( 200 ).json( filteredArticle )
	} else {
		res.status( 404 ).json( { message: `Article with id of ${ id } is not found` } )
	}
}