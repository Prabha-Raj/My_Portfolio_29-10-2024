const ContactSec = () => {
  return (
    <div className="contact-sec  flex  max-md:flex-col  max-md:gap-10 items-center justify-around py-10 px-6 gap-8 md:gap-16 bg-yellow-400">
      {/* Left Section */}
      <div className="left max-w-lg flex flex-col gap-5">
        <h1 className="text-5xl font-bold text-gray-800">Let's get in touch</h1>
        <p className="text-gray-600 text-xl">
          I enjoy discussing new projects and design challenges. Please share as much info as possible, so we can get the most out of our first catch-up.
        </p>
        <div className="contact-info text-gray-700 flex flex-col gap-3">
          <p className="text-lg"><span className="font-bold text-xl ">Living In:</span> <br /> 30 Shacham Street, Los Angeles, USA.</p>
          <p className="text-lg"><span className="font-bold text-xl">Call:</span> <br /> <a href="callto:8630049758">+91 8630049758</a></p>
          <p className="text-lg"><span className="font-bold text-xl">Mail:</span> <br /> <a href="mailto:prabhakarrajput78824@gmail.com"> prabhakarrajput78824@gmail.com</a></p>
        </div>
        <div className="social-icons flex gap-4 text-4xl text-gray-600 mt-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="ri-twitter-fill cursor-pointer hover:text-blue-500"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="ri-facebook-circle-fill cursor-pointer hover:text-blue-600"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="ri-instagram-line cursor-pointer hover:text-pink-500"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <i className="ri-github-fill cursor-pointer hover:text-gray-800"></i>
          </a>
          <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
            <i className="ri-dribbble-fill cursor-pointer hover:text-pink-400"></i>
          </a>
        </div>

      </div>

      {/* Right Section */}
      <div className="right w-2/5 max-md:w-full flex flex-col gap-6 shadow-md rounded-lg p-8" style={{ backgroundColor: "rgba(0,0,0,.15 )" }}>
        <h1 className="text-3xl font-bold text-gray-800">Estimate your Project</h1>
        <form className="flex flex-col justify-around gap-4 w-full p-5">
          <div className="form-group flex flex-col">
            <label htmlFor="name" className="text-gray-600 text-xl mb-2">What is Your Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              className="p-3 border-b-2 text-white text-xl font-bold  focus:outline-none focus:border-yellow-500 bg-transparent"
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group flex flex-col">
            <label htmlFor="email" className="text-gray-600 text-xl mb-2">Your Email Address:</label>
            <input
              type="email"
              name="email"
              id="email"
              className="p-3 border-b-2 text-white text-xl font-bold focus:outline-none focus:border-yellow-500 bg-transparent"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group flex flex-col">
            <label htmlFor="question" className="text-gray-600 text-xl mb-2">How Can I Help You?</label>
            <textarea
              name="question"
              id="question"
              cols="30"
              rows="5"
              className="p-3 border-b-2 text-white text-xl font-bold  focus:outline-none focus:border-yellow-500 bg-transparent"
              placeholder="Describe your project needs"
            ></textarea>
          </div>
          <button
            type="submit"
            style={{ margin: "0 auto" }}
            className="w-3/5 bg-yellow-400 text-white text-xl font-bold  py-3  hover:bg-black  transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactSec;
