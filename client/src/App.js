
import './App.css';
import img1 from "./Photos/cardImage1.png"
function App() {
  return (
    <div className="container">
  <main className="relative">
    <header className="flex flex-row items-center justify-between my-5 p-20">
      <img className="h-40" src="./Icons/Logo.svg" alt />
      <ul className="flex flex-row gap-8">
        <li>Location</li>
        <li>Blogs</li>
        <li>Testimonials</li>
        <li>Contact</li>
      </ul>
    </header>
    <hr />
    <hero className="flex flex-col justify-center my-5  gap-6 p-20">
      <h1>Home That Makes <br />Your Living Life</h1>
      <p>Are you looking for amazing real estate dont worry , <br /> we got it for you</p>
      <div className="flex flex-row ">
        <button>Learn More</button>
      </div>
    </hero>
    <div className="flex flex-row justify-around  card-footer" style={{backgroundColor: 'white', padding: '40px 20px', borderRadius: 8, width: 1200}}>
      <img src="./Icons/logoName.svg" alt />
      <img src="./Icons/logoName.svg" alt />
      <img src="./Icons/logoName.svg" alt />
      <img src="./Icons/logoName.svg" alt />
      <img src="./Icons/logoName.svg" alt />
    </div>
  </main>
  <section className="my-6">
    <h1 className="text-black text-center">
      Our Best Estate,<br /> are Modern
    </h1>
    <div className="flex flex-row justify-center items-center gap-6">
      <div className="relative w-300">
        <img className="card-img" src={img1} alt />
        <div className="card-footer">
          <div>
            <h4 className="text-black">Mixtownia</h4>
            <small className="text-black">$2455666</small>
          </div>
          <button>Detail</button>
        </div>
      </div>
      <div className="relative w-300" style={{marginTop: '5%'}}>
        <img className="card-img" src="./Photos/cardImage2.png" alt />
        <div className="card-footer">
          <div>
            <h4 className="text-black">Mixtownia</h4>
            <small className="text-black">$2455666</small>
          </div>
          <button>Detail</button>
        </div>
      </div>
      <div className="relative w-300" style={{marginTop: '10%'}}>
        <img className="card-img" src="./Photos/cardImage3.png" alt />
        <div className="card-footer">
          <div>
            <h4 className="text-black">Mixtownia</h4>
            <small className="text-black">$2455666</small>
          </div>
          <button>Detail</button>
        </div>
      </div>
    </div>
    <div className="flex flex-row justify-center items-center gap-6" style={{flexDirection: 'row-reverse'}}>
      <div className="relative w-300">
        <img className="card-img" src="./Photos/cardImage6.png" alt />
        <div className="card-footer">
          <div>
            <h4 className="text-black">Mixtownia</h4>
            <small className="text-black">$2455666</small>
          </div>
          <button>Detail</button>
        </div>
      </div>
      <div className="relative w-300" style={{marginTop: '5%'}}>
        <img className="card-img" src="./Photos/cardImage5.png" alt />
        <div className="card-footer">
          <div>
            <h4 className="text-black">Mixtownia</h4>
            <small className="text-black">$2455666</small>
          </div>
          <button>Detail</button>
        </div>
      </div>
      <div className="relative w-300" style={{marginTop: '10%'}}>
        <img className="card-img" src="./Photos/cardImage4.png" alt />
        <div className="card-footer">
          <div>
            <h4 className="text-black">Mixtownia</h4>
            <small className="text-black">$2455666</small>
          </div>
          <button>Detail</button>
        </div>
      </div>
    </div>
    <div className="flex flex-row justify-center items-center gap-6">
      <div className="relative w-300">
        <img className="card-img" src="./Photos/cardImage7.png" alt />
        <div className="card-footer">
          <div>
            <h4 className="text-black">Mixtownia</h4>
            <small className="text-black">$2455666</small>
          </div>
          <button>Detail</button>
        </div>
      </div>
      <div className="relative w-300" style={{marginTop: '5%'}}>
        <img className="card-img" src="./Photos/cardImage8.png" alt />
        <div className="card-footer">
          <div>
            <h4 className="text-black">Mixtownia</h4>
            <small className="text-black">$2455666</small>
          </div>
          <button>Detail</button>
        </div>
      </div>
      <div className="relative w-300" style={{marginTop: '10%'}}>
        <img className="card-img" src="./Photos/cardImage9.png" alt />
        <div className="card-footer">
          <div>
            <h4 className="text-black">Mixtownia</h4>
            <small className="text-black">$2455666</small>
          </div>
          <button>Detail</button>
        </div>
      </div>
    </div>
  </section>
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

  );
}

export default App;
