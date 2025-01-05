import './style.css'
import { Link, useParams, useSearchParams } from 'react-router-dom'
export const Post = () => {
    const params = useParams()
    const { id } = params
    // elemento de busca querry string
    const [qs] = useSearchParams()


    return <h1>Post {`Para: ${id} QueryString: ${qs}`}</h1>
}