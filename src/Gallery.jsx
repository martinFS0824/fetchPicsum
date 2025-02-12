import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

const Gallery = () =>{
    const [img, setImg] = useState([])
    const [contador, setContador] = useState(1)
        
    const url = `https://picsum.photos/v2/list?page=${contador}&limit=5`;
    
    const getImg = async ()=>{
        const response = await fetch(url)
        const data = await response.json();
        setContador((count) => ++count)
        setImg(data);
       
        console.log(data);
    }
    useEffect(()=>{
        getImg()
    }, []);
    const imgPedidas = img.map((img)=>{
        return(
            <Card key={img.id} img={img}></Card>
        )
    })
    return(
        <>
            <div>
                <h3>Galería</h3>
                <div className="img-container">{imgPedidas}</div>
                <button onClick={getImg}>Pedir imágenes</button>
            </div>    
        </>
    )
}

export default Gallery;