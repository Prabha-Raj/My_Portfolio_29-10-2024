export default function ResumeSec() {
    return (
        <>
            <div className="resume_heading text-center mt-5">
                <p><span className="bg-yellow-400 px-1">Resume</span></p>
                <p className="text-4xl max-md:text-2xl max-md:px-3 font-bold text-gray-800">A summary of My Resume</p>
            </div>
            <div className="main-sec flex  items-center justify-around gap-5 px-32 max-md:px-16 h-full my-10 max-md:flex-col">
                <div className="education-sec">
                    <h1 className="text-3xl max-md:xl font-bold my-8">My Education</h1>
                    <div className="edu-wrapper grid grid-flow-row items-center justify-center gap-2 px-5 border-l-2 border-yellow-400">
                        <h3 className="text-xl font-semibold">Master in Computer Engineering</h3>
                        <span className="font-semibold text-gray-700">Harvard University / 2015 - 2017</span>
                        <p className="text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.</p>
                        <hr className="my-3" />
                        <h3 className="text-xl font-semibold">Master in Computer Engineering</h3>
                        <span className="font-semibold text-gray-700">Harvard University / 2015 - 2017</span>
                        <p className="text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.</p>
                    </div>
                </div>
                <div className="experience-sec">
                    <h1 className="text-3xl max-md:xl font-bold my-8">My Experience</h1>
                    <div className="ex-wrapper grid grid-flow-row items-center justify-center gap-2 px-5 border-l-2 border-yellow-400">
                        <h3 className="text-xl font-semibold">Sr. Font End Developer</h3>
                        <span className="font-semibold text-gray-700">Apple Inc / 2020 - current</span>
                       <p className="text-gray-500">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                        <hr className="my-3" />
                        <h3 className="text-xl font-semibold">Sr. Font End Developer</h3>
                        <span className="font-semibold text-gray-700">Apple Inc / 2020 - current</span>
                       <p className="text-gray-500">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

