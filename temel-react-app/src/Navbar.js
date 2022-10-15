import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Fatmanur Blog</h1>
            <div className="links">
                {/* <a href="/">Anasayfa</a>
                <a href="/create" style={{
                    //özel css yazmak için iki tane süslü parantez kullanmalıyız
                    color:'white',
                    backgroundColor:'#ff793f',
                    borderRadius:'8px'
                }}>Yeni Yazı</a> */}

                <Link to="/">Anasayfa</Link>
                <Link to="/create" style={{
                    color:'white',
                    backgroundColor:'#ff793f',
                    borderRadius:'8px',
                }}>Yeni Yazı</Link>

            </div>
        </nav>
     );
}
 
export default Navbar;