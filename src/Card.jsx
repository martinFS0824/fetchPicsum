const Card = ({img})=>{
    return (
        <img className="card-img" src={img.download_url} alt={img.author} />
        
    )
}
export default Card;