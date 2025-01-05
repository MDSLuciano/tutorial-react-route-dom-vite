import './style.css'
import { Link, Outlet, useParams, useSearchParams } from 'react-router-dom'
export const Posts = () => {
    const params = useParams()
    const { id } = params
    // elemento de busca querry string
    const [qs] = useSearchParams()


    return (
        <div>
            <h1>Post {`Para: ${id} QueryString: ${qs}`}</h1>
            <Outlet />
        </div>
    )
}

//Outlet serve para renderizar os componentes filhos