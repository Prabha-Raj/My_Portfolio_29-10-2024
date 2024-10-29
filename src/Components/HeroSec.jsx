
export default function HeroSec(){
    return(
         <div id="Home" className="hero-sec flex items-center justify-around max-md:flex-col-reverse  max-md:gap-10 p-10 " >
            <div className="hero-text-wrapper flex flex-col items-start justify-center gap-5">
                <h1 className="text-5xl max-md:text-3xl uppercase">Hi, I'm a <span className="text-yellow-500">Web Developer</span></h1>
                <span className="text-8xl max-md:text-5xl lg:text-7xl font-bold uppercase">Prabhakar</span>
                <p className="text-2xl max-md:text-xl">Located in Lucknow, Uttar Pradesh, India.</p>
                <div className="grid grid-flow-col gap-x-10 max-md:gap-x-5 items-center">
                    <button className="h-12 w-40 bg-black text-white"><a href="#ViewMyWorks">View My Works</a></button>
                    <span className=""><a href="#ContactMe" className="underline mx-2 max-md:mx-1">Cantact Me </a> <i className="fa-regular fa-circle-down"></i></span>
                </div>
            </div>
            <div className="hero-img-wrapper flax items-center justify-center">
                <div className="h-96 w-96 max-md:h-72 max-md:w-72 bg-black border-8 border-yellow-500 rounded-full flex items-center justify-center">
                    <img src="images/profile_pic.jpg" alt="" className="h-96 w-96 max-md:h-72 max-md:w-72 rounded-full"/>
                </div>
            </div>
         </div>
    )
}