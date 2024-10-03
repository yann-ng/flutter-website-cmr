

function ArticlesCard({title, image}){
    return(
        <div className="group p-4 w-full h-full bg-no-repeat bg-center bg-cover rounded-xl relative overflow-hidden bg-brand" style={{backgroundImage: `url(${image.src})`}}>
            <h3 className="text-white font-semibold group-hover:-translate-y-20">{title}</h3>
            <div className="w-full bg-white p-4 rounded-xl space-y-2 border-2 border-gray-300 absolute left-0 bottom-0 translate-y-52 hidden group-hover:block group-hover:translate-y-0">
                <div className="flex mt-2 space-x-4">
                    <div className="px-2 flex items-center bg-brand-yellow rounded-md">
                        <p className="w-2 h-2 mr-1 bg-black rounded-full"> </p>
                        <p className="text-sm">widget</p>
                    </div>
                    <div className="px-2 flex items-center bg-brand-yellow rounded-md">
                        <p className="w-2 h-2 mr-1 bg-brand rounded-full"> </p>
                        <p className="text-sm">features</p>
                    </div>
                </div>
                <div>
                    <h4 className="font-medium text-lg">Introducing Flutter in Focus!</h4>
                    <p className="opacity-60 text-sm">In Flutter, &quot;everything is a widget!&quot;
                        If you want to better understand the two kinds fo widget,
                        Stateless and Statefull, see the following videos. </p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-sm opacity-40">03 August 2022 - 02 minutes</p>
                    <div className="flex items-center">
                        <p className="mr-2 w-6 h-6 rounded-full bg-gray-400"> </p>
                        <p className="opacity-60 text-sm">Boris Kamtou</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ArticlesCard