import "./App.css";
import Navbar from "./Components/Navbar";
import HeroSec from "./Components/HeroSec";
import AboutSec from "./Components/AboutSec";
import Card from "./Components/WhatIDoSec";
import ResumeSec from "./Components/ResumeSec";
import SkillsSec from "./Components/SkillsSec";
import HireMeSec from "./Components/HireMeSec";
import FAQsSec from "./Components/FAQsSec";
import ReviewSec from "./Components/ReviewSec";
import ContactSec from "./Components/ContactSec";
import Footer from "./Components/Footer";
export default function App() {
  return (
    <>
    <Navbar/>
    <HeroSec/>
    <AboutSec/>
    <Card/>
    <ResumeSec/>
    <SkillsSec/>
    <HireMeSec/>  
    <FAQsSec/>
    <ReviewSec/>
    <ContactSec/>
    <Footer/>
    </>
  )
}