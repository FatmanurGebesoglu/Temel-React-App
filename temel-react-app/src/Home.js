//import { useState, useEffect} from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {

    // const handleClick = () => {
    //     console.log('merhaba');
    // }
  //handleClick fonsiyonu çağırılırken parantez aç kapa yapmadık çünkü parametre almayan fonsiyonlarda parantez kullanılmaz
  //parametreli fonksiyon handleClick2 oluyor

    // const handleClick2=(isim)=>{
    //     console.log('merhaba '+isim);
    // }
    //attribute tıklandığında event özelliği gelmektedir bunu da parametre gibi parantez içinde yazabiliriz
    //parantez içine event yada kısa hali ile e yazılabilir
    // const handleClick2=(isim,e)=>{
    //     console.log(isim,e.target);
    // }

    // let sayac = 0;
    // const handleClick=()=>{
    //     sayac++;
    //     console.log(sayac);
    // } //bu kullanıldığında sayac sadece consoldan artrar

    // const [sayac, setSayac]= useState(0);
    // const handleClick=()=>{
    //     setSayac(3);
    // }

    //******************************************************** */

    //    const [blogs,setBlogs] = useState([
    //         {
    //             ad:"Yeni Başlayanlar için C#",
    //             aciklama:"lorem ipsum",
    //             yazar:"luffy",
    //             id:1
    //         },
    //         {
    //             ad:"React Öğreniyorum",
    //             aciklama:"lorem ipsum",
    //             yazar:"zoro",
    //             id:2
    //         },
    //         {
    //             ad:"İleri Seviye C#",
    //             aciklama:"lorem ipsum",
    //             yazar:"luffy",
    //             id:3
    //         },
    //         {
    //             ad:"MVC Öğreniyorum",
    //             aciklama:"lorem ipsum",
    //             yazar:"sanji",
    //             id:4
    //         }
    //     ])

    // const [blogs,setBlogs] = useState(null);
    // const [yukleniyor,setYukleniyor]= useState(true) 
    // const [hata,setHata]=useState(null)

    //blogs altında use effect oluşturuldu çünkü önce tanımlanması gerekir.

    // useEffect(()=>{
    //     //bu şekilde kullanıldığında sayfa çalıştığında, yüklendiğinde ya da bu sayfada
    //     //bulunan bütün stateler tetiklendiğinde, değiştiğinde çalışacak bir fonksiyondur
    //     console.log('useEffect çalıştı');
    //     console.log(blogs);
    // })


    // useEffect(()=>{
    //     console.log('useEffect çalıştı');
    //     console.log(blogs);
    // },[])//ikinci parametre olarak köşeli parantez konulduğunda 
    //sadece sayfa yüklendiğinde çalış demek


    // useEffect(()=>{
    //     console.log('useEffect çalıştı');
    //     console.log(blogs);
    // },[blogs])//köşeli parantez içine blog yazarsak
    //usestate çalıştığında çalışır ve sayfa ilk yüklendiğinde çalışır.

    // const[isim,setIsim]=useState('luffy');

    // useEffect(()=>{
    //     console.log('useEffect çalıştı');
    //     console.log(blogs);
    // },[blogs,isim])

    // useEffect(()=>{
    //     fetch('http://localhost:8000/yazilar')
    //         .then(res=>{
    //             if(!res.ok) throw Error('Veriler Çekilemedi');
    //             return res.json();
    //         })
    //         .then(data=>{
    //             //console.log(data);
    //             setBlogs(data);
    //             setYukleniyor(false);
    //         })    
    //         .catch(err=>{
    //             setYukleniyor(false);
    //             setHata(err.message);
    //         })
    // },[])

    // const handleClick=(id)=>{
    //     // console.log("silindi");
    //     const newBlogs=blogs.filter(blog=>blog.id !==id);
    //     setBlogs(newBlogs);
    // }

    const{veri:blogs,yukleniyor,hata}=useFetch('http://localhost:8000/yazilar');
    return (  
        <div className="home">
            {/* <h2>Anasayfa</h2> */}
            {/* <button onClick={handleClick}>Tıkla</button> */}
            {/* <button onClick={()=>handleClick2('fatmanur')}>Tıkla</button>  */}
            {/* <button onClick={(e)=>handleClick2('fatmanur',e)}>Tıkla</button>  */}
            {/* <button onClick={(e)=>{
                console.log(e);
                //onclick ile yerel bir fonksiyon çalıştırmak istersek
            }}>Tıkla</button>  */}
            {/* <p>{sayac}</p>
            <button onClick={handleClick}>Tıkla</button> */}
           {/* <BlogList bloglar={blogs} baslik="Bütün Yazılar" handleClick={handleClick}/>
           <br/> */}
           {/* <BlogList bloglar={blogs.filter((blog)=>blog.yazar==='luffy')} baslik="Seçkin yazarların yazıları"/> */}

           {/* <button onClick={()=>setIsim('zoro')}>Değiştir</button> */}

            

            {hata && <div className="error">{hata}</div> }
            {yukleniyor && <div className="loading">Yükleniyor...</div>}
            {blogs &&  <BlogList bloglar={blogs} baslik="Bütün Yazılar" />}
           

        </div>
        
    );
}
 

export default Home;