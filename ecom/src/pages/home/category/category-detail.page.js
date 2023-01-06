import { useParams, useSearchParams } from "react-router-dom";
import { HeaderComponent } from "../../../components/home/home.component"

const CategoryDetail = () => {
    let params = useParams()
    let [query, setQuery] = useSearchParams();
    // q=keyword
    // price=0-1000
    // console.log(query.get('page'));
    // console.log("Params: ", params)
    return (<>

        <HeaderComponent />

        I am category Detail of: {params.id}
    
    </>)
}
export default CategoryDetail;