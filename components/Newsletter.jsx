import bgImage from '../public/images/31.svg'


function Newsletter(){
    return(
        <section className="py-8 bg-brand text-white mt-16 flex flex-col items-center justify-center bg-contain bg-center bg-no-repeat" style={{backgroundImage: `url(${bgImage.src})`}}>
            <form className="flex flex-col items-center justify-center px-4 text-center">
                <h2 className="text-2xl font- sm:text-5xl sm:font-base">Join our newsletter</h2>
                <p className="font-light opacity-80">Join our newsletter to receive tutorials, article and podcasts on web design and programming.</p>
                <div className="flex w-full space-x-2 mt-4 sm:px-16">
                    <input type="text" placeholder="Enter your email address" className="p-2 w-9/12 xsm:w-5/6 rounded-md outline-none text-black"/>
                    <input type="submit" value="Sign up" className="bg-green-400 text-brand rounded-md p-2 w-3/12 xsm:w-1/6 cursor-pointer hover:opacity-60" />
                </div>
            </form>
        </section>
    )
}

export default Newsletter