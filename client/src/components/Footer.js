import React from 'react'

const Footer = () => {
  return (
    <div>
         <div className="flex flex-row justify-between text-black" style={{marginTop: '10%'}}>
      <div className="relative">
        <img style={{width: 600}} src="./Icons/featureImageBg1.svg" alt />
        <img className="card-overlay" src="./Photos/featuresImage1.png" alt />
      </div>
      <div className="flex flex-col justify-center my-5  gap-6 p-20">
        <h1 className="text-black">Modern, Trendy <br />Affordable!</h1>
        <p>Are you looking for amazing real estate dont worry , <br /> we got it for you</p>
        <div className="flex flex-row ">
          <button>Early Bird Book</button>
        </div>
      </div>
    </div>
    <div className="flex flex-row justify-between text-black" style={{marginTop: '10%'}}>
      <div className="flex flex-col justify-center my-5  gap-6 p-20">
        <h1 className="text-black">Unique House <br />For long Term</h1>
        <p>Are you looking for amazing real estate dont worry , <br /> we got it for you</p>
        <div className="flex flex-row ">
          <button>Early Bird Book</button>
        </div>
      </div>
      <div className="relative">
        <img style={{width: 600}} src="./Icons/featureImageBg2.png" alt />
        <img className="card-overlay" style={{left: 50}} src="./Photos/featuresImage2.png" alt />
      </div>
    </div>
    {/* ........subscribe card */}
    <div className="subscribe-card">
      <h1 className="text-center">Subscribe to Our Newsletter <br /> For Weekly Article Update.</h1>
      <p className="text-center"> We have our real-esate blog ,we can share our thought and rutinity in <br /> our blog that updated weekly. we willnot spam you,we promise</p>
      <div className="flex flex-row justify-center gap-8">
        <div className="input-container">
          <img src="./Icons/mail.png" alt />
          <input className="input-field" type="text" placeholder="Enter your email address" name="usrnm" />
        </div>
        <div className="flex">
          <button className="s-btn">Subscribe</button>
        </div>
      </div>
    </div>
    <div className="p-20 text-black ">
      <div className="flex flex-row justify-around " style={{marginBottom: 0, marginTop: 0}}>
        <div className="flex flex-col gap-6 ">
          <div>
            <img src="./Icons/Logo.svg" alt="logo" />
          </div>
          <div className="flex flex-row gap-4">
            <img src="./Icons/facebook.png" alt />
            <img src="./Icons/instagram.png" alt />
            <img src="./Icons/twitter.png" alt />
          </div>
          <p>2022 Award winning Real-estate</p>
        </div>
        <ul className="flex flex-col gap-4 ">
          <li>Location</li>
          <li>America</li>
          <li>Europe</li>
          <li>Asia</li>
          <li>Africa</li>
        </ul>
        <ul className="flex flex-col gap-4 ">
          <li>Contact </li>
          <li>About me</li>
          <li>Teams</li>
          <li>Profile</li>
          <li>FAQ</li>
        </ul>
        <ul className="flex flex-col gap-4">
          <li>Legals</li>
          <li>Privacy</li>
          <li>Disclaimer</li>
          <li>Terms</li>
          <li>Company</li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Footer