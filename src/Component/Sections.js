import React from 'react'
import chart from '../Images/chart.svg'
import wallet from '../Images/wallet.svg'
import qoute from '../Images/quote.svg'
import media from '../Images/media.svg'
import person1 from '../Images/person1.jpg'
import person2 from '../Images/person2.jpg'
import wallets from '../Images/wallets.jpg'
import freedom from '../Images/freedom.jpg'
import investment from '../Images/investment.jpg'
import person3 from '../Images/person3.jpg'
import Apple from "../Images/AppleLogo.svg";
import Android from "../Images/Androidlogo.svg";
import { useNavigate } from 'react-router-dom';
function Section1() {
  let link = useNavigate();
  return (
    <div>
      <div className='Section1'>
        <div className="section1Container">
          <h2>Why do people get involved with Cryptocurrencies?</h2>
          <div className="cardContainer">
            <div className="card">
              <img src={wallets} alt="" />
              <h4>Easy Mode of Payment</h4>
              <p>People can now easily send and receive money from anywhere in the world to purchase goods and pay for services.</p>
            </div>
            <div className="card">
              <img src={freedom} alt="" />
              <h4>Financial Freedom</h4>
              <p>Just like the internet no single entity controls the Crypto network which provides users transparency and privacy, which puts you in absolute control of your money.</p>
            </div>
            <div className="card">
              <img src={investment} alt="" />
              <h4>Investment</h4>
              <p>The constant demand as made Cryptocurrecies a Digital Gold used for alternative store of wealth on long term investments.</p>
            </div>
          </div>
          <button className='section1Button'>Learn More</button>
        </div>
      </div>
      <div className="section2">
        <div className="section2Container">
          <h2 className='h2'>Buy and Sell your Cryptocurrency in 3 simple steps</h2>
          <div className="buyDivImageContainer">
            <div className="buyDivImage">
              <div className="contentDiv">
                <div className="numDiv"></div>
                <div className="textDiv">
                  <h2>Create a free Account</h2>
                  <p>Sign up for your free TradExpress Wallet on web, iOS, or Android devices and follow our easy process to set up your profile.</p>
                </div>
              </div>
              <img src={chart} alt="" />
            </div>
            <div className="buyDivImage">
              <img src={wallet} alt="" />
              <div className="contentDiv">
                <div className="numDiv"></div>
                <div className="textDiv">
                  <h2>Create a free Account</h2>
                  <p>Sign up for your free TradExpress Wallet on web, iOS, or Android devices and follow our easy process to set up your profile.</p>
                </div>
              </div>
            </div>
            <div className="buyDivImage">
              <div className="contentDiv">
                <div className="numDiv"></div>
                <div className="textDiv">
                  <h2>Create a free Account</h2>
                  <p>Sign up for your free TradExpress Wallet on web, iOS, or Android devices and follow our easy process to set up your profile.</p>
                </div>
              </div>
              <img src={chart} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="section3">
        <p>Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?</p>
        <h2>Create your account for free and start trading today!</h2>
        <button onClick={()=>link("/Account/")}>Get started</button>
        <div className="divImageDiv">
          <div className="divImage">
            <img src={Apple} alt="" />
            <div className="downloadText">
              <small>Download on the</small>
              <p>App Store</p>
            </div>
          </div>
          <div className="divImage">
            <img src={Android} alt="" />
            <div className="downloadText">
              <small>get on</small>
              <p>Google Play</p>
            </div>
          </div>
        </div>
      </div>
      <div className="reviewsDivContainer">
        <h2>Customer's Review</h2>
        <div className="reviewsDiv">
          <div className="reviews">
            <div className="comment">
              <img src={qoute} alt="" />
              <p>Trading on TradExpress mobile & web platforms has been a smooth experience for me quite easy to navigate.</p>
            </div>
            <div className="reviewProfile">
              <img src={person1} alt="" />
              <div className="reviewProfileText">
                <p className='reviewProfileName'>Ireti</p>
                <p className='reviewProfileLocation'>Nigeria</p>
              </div>
            </div>
          </div>
          <div className="reviews">
            <div className="comment">
              <img src={qoute} alt="" />
              <p>They have the best rate compared to other platforms with fast payout.</p>
            </div>
            <div className="reviewProfile">
              <img src={person2} alt="" />
              <div className="reviewProfileText">
                <p className='reviewProfileName'>Bayo</p>
                <p className='reviewProfileLocation'>USA</p>
              </div>
            </div>
          </div>
          <div className="reviews">
            <div className="comment">
              <img src={qoute} alt="" />
              <p>Easy to fund and withdraw coins or cash on their platform, I will definitely trade with them again.</p>
            </div>
            <div className="reviewProfile">
              <img src={person3} alt="" />
              <div className="reviewProfileText">
                <p className='reviewProfileName'>Olagoke</p>
                <p className='reviewProfileLocation'>Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footerContainer">
          <div className="footerRow">
            <p className='heads'>Products</p>
            <p>Bitcoin<br />Alt<br />Fiat<br />Refill<br />P2P</p>
          </div>
          <div className="footerRow">
            <p className='heads'>Learn</p>
            <p>Blog <br />Help Center</p>
          </div>
          <div className="footerRow">
            <p className='heads'>Contact</p>
            <p>hello@tradeexpress.com<br />support@tradeexpress.com</p>
            <img src={media} alt="" />
          </div>
          <div className="footerRow">
            <p className='heads'>Company</p>
            <p>About<br />Us<br />Careers<br />Rates<br />Mobile</p>
          </div>
          <div className="footerRow">
            <p className='heads'>Legal</p>
            <p className='tableContent'>Privacy Policy<br />Anti-Money Laundering<br />Terms and Conditions</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1