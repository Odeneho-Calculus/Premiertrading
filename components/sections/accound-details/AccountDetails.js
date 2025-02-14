'use client'
import { useState } from "react"
import Link from "next/link"
import "app/favicon.ico"

export default function AccountDetails() {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    }

    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    }

    return (
        <>
            <div className="account-details-content">
                <div className="content-one">
                    <h2>Account Overview</h2>
                    <p>Our platform empowers you to make informed trading decisions with a range of tools and resources designed for success in the crypto market.</p>
                    <figure className="image-box"><img src="assets/images/resource/account-4.jpg" alt="Account Overview"/></figure>
                </div>
                <div className="content-two">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 left-column">
                            <div className="left-content">
                                <div className="text-box">
                                    <h2>Benefits of a Trading Account</h2>
                                    <p>Experience the advantages of trading with our comprehensive account features.</p>
                                </div>
                                <div className="single-item">
                                    <h4>02.</h4>
                                    <h3>Risk-Free Practice</h3>
                                    <p>Practice your trading strategies without financial risk using our demo accounts.</p>
                                    <div className="overlay-content">
                                        <h3>Risk-Free Practice</h3>
                                        <p>Gain confidence in your trading skills with our risk-free environment.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 left-column">
                            <div className="left-content">
                                <div className="single-item">
                                    <h4>01.</h4>
                                    <h3>Strategy Testing</h3>
                                    <p>Test your trading strategies in real market conditions to find what works best for you.</p>
                                    <div className="overlay-content">
                                        <h3>Strategy Testing</h3>
                                        <p>Utilize our tools to refine your strategies and improve your trading performance.</p>
                                    </div>
                                </div>
                                <div className="single-item">
                                    <h4>03.</h4>
                                    <h3>Market Knowledge</h3>
                                    <p>Stay informed with the latest market trends and insights to make better trading decisions.</p>
                                    <div className="overlay-content">
                                        <h3>Market Knowledge</h3>
                                        <p>Access educational resources and market analysis to enhance your trading skills.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="scroll-text">
                        <ul className="text-list">
                            <li><i className="flaticon-checked-1"></i>Evaluate Your Progress</li>
                            <li><i className="flaticon-checked-1"></i>Continuous Improvement</li>
                            <li><i className="flaticon-checked-1"></i>24/7 Customer Support</li>
                        </ul>
                    </div>
                </div>
                <div className="content-three">
                    <div className="text-box">
                        <h2>What’s Included?</h2>
                        <p>Our trading accounts come with a variety of features designed to support your trading journey.</p>
                    </div>
                    <div className="tabs-box">
                        <div className="tab-inner">
                            <div className="tab-btn-box">
                                <ul className="tab-btns tab-buttons clearfix">
                                    <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}>Currency Pairs</li>
                                    <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}>Market Analysis Tools</li>
                                    <li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"}>Trading Hours</li>
                                    <li onClick={() => handleOnClick(4)} className={activeIndex === 4 ? "tab-btn active-btn" : "tab-btn"}>Customer Support</li>
                                    <li onClick={() => handleOnClick(5)} className={activeIndex === 5 ? "tab-btn active-btn" : "tab-btn"}>Order Types</li>
                                </ul>
                            </div>
                            <div className="tabs-content">
                                <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                                    <div className="inner-box" style={{ backgroundImage: "url(assets/images/resource/account-5.jpg)" }}>
                                        <div className="text-box">
                                            <p>Access a wide range of currency pairs to diversify your trading portfolio.</p>
                                            <ul className="list-item">
                                                <li>40+ Forex pairs</li>
                                                <li>Deposit options: USD, EUR, GBP, JPY</li>
                                                <li>Access to Trading Central</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="tab2">
                                    <div className="inner-box" style={{ backgroundImage: "url(assets/images/resource/account-5.jpg)" }}>
                                        <div className="text-box">
                                            <p>Utilize advanced market analysis tools to enhance your trading strategies.</p>
                                            <ul className="list-item">
                                                <li>Comprehensive market analysis</li>
                                                <li>Real-time data and insights</li>
                                                <li>Customizable trading indicators</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className={activeIndex === 3 ? "tab active-tab" : "tab"} id="tab3">
                                    <div className="inner-box" style={{ backgroundImage: "url(assets/images/resource/account-5.jpg)" }}>
                                        <div className="text-box">
                                            <p>Trade during optimal hours to maximize your trading opportunities.</p>
                                            <ul className="list-item">
                                                <li>Access to global markets</li>
                                                <li>Flexible trading hours</li>
                                                <li>24/5 trading availability</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className={activeIndex === 4 ? "tab active-tab" : "tab"} id="tab4">
                                    <div className="inner-box" style={{ backgroundImage: "url(assets/images/resource/account-5.jpg)" }}>
                                        <div className="text-box">
                                            <p>Our dedicated customer support team is available to assist you at any time.</p>
                                            <ul className="list-item">
                                                <li>24/7 customer support</li>
                                                <li>Multiple contact methods</li>
                                                <li>Quick response times</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className={activeIndex === 5 ? "tab active-tab" : "tab"} id="tab5">
                                    <div className="inner-box" style={{ backgroundImage: "url(assets/images/resource/account-5.jpg)" }}>
                                        <div className="text-box">
                                            <p>Choose from various order types to suit your trading strategy.</p>
                                            <ul className="list-item">
                                                <li>Market orders</li>
                                                <li>Limit orders</li>
                                                <li>Stop-loss orders</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-four faq-section">
                    <div className="text-box">
                        <h2>How Does It Work?</h2>
                        <p>Our platform is designed to provide a seamless trading experience, allowing you to focus on your strategies and goals.</p>
                    </div>
                    <ul className="accordion-box">
                        <li className={isActive.key === 1 ? "accordion block current" : "accordion"}>
                            <div className={isActive.key === 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                <span>01</span>
                                <h5>Request a Trading Account</h5>
                            </div>
                            <div className={isActive.key === 1 ? "acc-content current" : "acc-content"}>
                                <div className="text">
                                    <p>Complete the application process to open your trading account and start your journey.</p>
                                </div>
                            </div>
                        </li>
                        <li className={isActive.key === 2 ? "accordion block current" : "accordion"}>
                            <div className={isActive.key === 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                                <span>02</span>
                                <h5>Secure & Easy Fund Transfer</h5>
                            </div>
                            <div className={isActive.key === 2 ? "acc-content current" : "acc-content"}>
                                <div className="text">
                                    <p>Transfer funds securely and easily to your trading account to start trading.</p>
                                </div>
                            </div>
                        </li>
                        <li className={isActive.key === 3 ? "accordion block current" : "accordion"}>
                            <div className={isActive.key === 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                                <span>03</span>
                                <h5>Explore All Our Markets</h5>
                            </div>
                            <div className={isActive.key === 3 ? "acc-content current" : "acc-content"}>
                                <div className="text">
                                    <p>Access a variety of markets to diversify your trading portfolio and maximize opportunities.</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}