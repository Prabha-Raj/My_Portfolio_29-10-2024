import "./styles/HireMeSec.css";

export default function HireMeSec(){
    return(
        <>
        <div className="hireme-sec flex items-center justify-center">
            <div className="flex flex-col items-center justify-center  gap-10 max-md:gap-y-16 h-full w-full" style={{backgroundColor:"rgba(0, 0, 0, 0.7)"}}>
            <h1 className="text-4xl text-white font-bold max-md:text-3xl">Interested in working with me?</h1>
            <a href="" className="text-lg h-12 w-36 flex items-center justify-center bg-yellow-500"><span>Hire Me!</span></a>
            </div>
        </div>
        </>
    )
}