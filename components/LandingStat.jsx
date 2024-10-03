
function LandingStat({number, title}){
    return(
        <div className="font-medium">
            <h3 className="text-2xl">{number}</h3>
            <p className="opacity-60 text-sm">{title}</p>
        </div>
    )
}

export default LandingStat
