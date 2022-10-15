import { Link } from "react-router-dom";

const notFound = () => {
    return ( 
        <>
         <div className="not-found">
            <h2>Yanlış Sayfa</h2>
            <p>Sayfa Bulunamadı</p>
            <Link to="/">AnaSayfa</Link>
         </div>
        </>
     );
}
 
export default notFound;