'use client'
import { useState } from "react"
import Layout from "@/components/layout/Layout"
import "app/favicon.ico"
import Link from "next/link"

export default function Education_details() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Education Details">
            <section className="education-details">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                            <div className="education-details-content">
                                <div className="upper-box">
                                    <ul className="info-list">
                                        <li><i className="flaticon-filter"></i>Cryptocurrency</li>
                                        <li><i className="flaticon-growth"></i>Beginner</li>
                                    </ul>
                                    <h2>Introduction to Cryptocurrency Investment: Understanding Digital Assets</h2>
                                    <div className="lower-content">
                                        <div className="author-box">
                                            <figure className="thumb-box"><img src="assets/images/resource/thumb-2.jpg" alt=""/></figure>
                                            <h5>Michael Anderson</h5>
                                            <span className="designation">Cryptocurrency Analyst</span>
                                        </div>
                                        <ul className="option-list">
                                            <li><Link href="/education-details"><i className="flaticon-heart"></i></Link></li>
                                            <li><Link href="/education-details"><i className="flaticon-share"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="tabs-box">
                                    <div className="tab-btn-box">
                                        <ul className="tab-btns tab-buttons">
                                            <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}><h5>Course Content</h5></li>
                                            <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}><h5>Student Reviews</h5></li>
                                            <li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"}><h5>FAQ</h5></li>
                                        </ul>
                                    </div>
                                    <div className="tabs-content">
                                        <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                                            <div className="course-content">
                                                <div className="content-one">
                                                    <div className="text-box">
                                                        <h3>Course Curriculum</h3>
                                                        <p><i className="flaticon-read"></i>4 Modules - 2hrs 30mins</p>
                                                    </div>
                                                    <ul className="download-list clearfix">
                                                        <li>
                                                            <button className="downloaded"><i className="flaticon-video-camera"></i>Fundamentals of Cryptocurrency<span>45 minutes</span></button>
                                                        </li>
                                                        <li>
                                                            <button><i className="flaticon-video-camera"></i>Investment Strategies and Risk Management<span>45 minutes</span></button>
                                                        </li>
                                                        <li>
                                                            <button><i className="flaticon-volume-up"></i>Market Analysis and Trading Basics<span>30 minutes</span></button>
                                                        </li>
                                                        <li>
                                                            <button><i className="flaticon-volume-up"></i>Portfolio Management and Security<span>30 minutes</span></button>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="content-two">
                                                    <h3>About This Course</h3>
                                                    <p>This comprehensive course introduces you to the fundamentals of cryptocurrency investment. Learn about blockchain technology, different types of digital assets, and how to evaluate investment opportunities in the crypto market. Our curriculum covers essential topics from security best practices to market analysis techniques.</p>
                                                    <h4>Key Learning Outcomes</h4>
                                                    <ul className="list-style-three clearfix">
                                                        <li>Understanding blockchain technology and cryptocurrency fundamentals</li>
                                                        <li>Developing risk management strategies for digital asset investment</li>
                                                        <li>Learning secure storage and portfolio management techniques</li>
                                                    </ul>
                                                    <div className="video-inner" style={{ backgroundImage: "url(assets/images/background/video-bg-3.jpg)" }}>
                                                        <Link href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" className="lightbox-image" data-caption=""><img src="assets/images/icons/icon-56.png" alt=""/></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex === 2 ? "tab active-tab" : "tab"}>
                                            <div className="review-content">
                                                <h3>Student Reviews</h3>
                                                <div className="comment-box">
                                                    <div className="single-comment-box">
                                                        <figure className="comment-thumb"><img src="assets/images/resource/comment-1.jpg" alt=""/></figure>
                                                        <h4>David Chen<span>15 Jan, 2025</span></h4>
                                                        <p>Excellent introduction to cryptocurrency investment. The course provided clear explanations of complex concepts and practical investment strategies that I could immediately implement.</p>
                                                        <ul className="rating clearfix">
                                                            <li><i className="flaticon-rate-star-button"></i></li>
                                                            <li><i className="flaticon-rate-star-button"></i></li>
                                                            <li><i className="flaticon-rate-star-button"></i></li>
                                                            <li><i className="flaticon-rate-star-button"></i></li>
                                                            <li><i className="flaticon-rate-star-button"></i></li>
                                                        </ul>
                                                    </div>
                                                    <div className="single-comment-box">
                                                        <figure className="comment-thumb"><img src="assets/images/resource/comment-2.jpg" alt=""/></figure>
                                                        <h4>Sarah Johnson<span>10 Jan, 2025</span></h4>
                                                        <p>The risk management section was particularly valuable. I appreciate how the course balances theoretical knowledge with practical application.</p>
                                                        <ul className="rating clearfix">
                                                            <li><i className="flaticon-rate-star-button"></i></li>
                                                            <li><i className="flaticon-rate-star-button"></i></li>
                                                            <li><i className="flaticon-rate-star-button"></i></li>
                                                            <li><i className="flaticon-rate-star-button"></i></li>
                                                            <li><i className="flaticon-rate-star-button"></i></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="comment-form">
                                                    <div className="text-box">
                                                        <h3>Write a Review</h3>
                                                        <p>Your email address will not be published. Required fields are marked <span>*</span></p>
                                                    </div>
                                                    <form method="post" action="/education-details" className="default-form">
                                                        <div className="row clearfix">
                                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                                <textarea name="message" placeholder="Your Review *"></textarea>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                                <input type="text" name="name" placeholder="Your Name" required=""/>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                                <input type="email" name="email" placeholder="Email *" required=""/>
                                                            </div>
                                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                                <div className="check-box">
                                                                    <input className="check" type="checkbox" id="checkbox1"/>
                                                                    <label htmlFor="checkbox1">Save my information for future reviews</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                                                <button type="submit" className="theme-btn btn-two"><span>Submit Review</span></button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex === 3 ? "tab active-tab" : "tab"}>
                                            <div className="accordion-inner faq-section">
                                                <h3>Frequently Asked Questions</h3>
                                                <ul className="accordion-box">
                                                    <li className={isActive.key == 1 ? "accordion block current" : "accordion"}>
                                                        <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                                            <h5>Is this course suitable for complete beginners?</h5>
                                                        </div>
                                                        <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                                            <div className="text">
                                                                <p>Yes, this course is designed for beginners. We start with basic concepts and gradually progress to more advanced topics in cryptocurrency investment.</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className={isActive.key == 2 ? "accordion block current" : "accordion"}>
                                                        <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                                                            <h5>What tools will I need to participate in this course?</h5>
                                                        </div>
                                                        <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                                            <div className="text">
                                                                <p>You'll need a computer with internet access. We'll guide you through setting up necessary trading accounts and digital wallets during the course.</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className={isActive.key == 3 ? "accordion block current" : "accordion"}>
                                                        <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                                                            <h5>Do you provide ongoing support after course completion?</h5>
                                                        </div>
                                                        <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                                            <div className="text">
                                                                <p>Yes, graduates get access to our community forum and monthly webinars where they can discuss strategies and get updates on market trends.</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className={isActive.key == 4 ? "accordion block current" : "accordion"}>
                                                        <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}>
                                                            <h5>How often is the course content updated?</h5>
                                                        </div>
                                                        <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                                            <div className="text">
                                                                <p>Course content is reviewed and updated quarterly to ensure all information remains current with the latest developments in cryptocurrency markets.</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                            <div className="education-sidebar">
                                <div className="upper-box">
                                    <h3>$199.00<del>$299.00</del></h3>
                                    <h5>Limited time offer - 33% off!</h5>
                                    <ul className="rating clearfix">
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><span>4.8</span></li>
                                        <li>(3,245 Reviews)</li>
                                    </ul>
                                </div>
                                <ul className="info-list clearfix">
                                    <li><i className="flaticon-language"></i>Language<span>English</span></li>
                                    <li><i className="flaticon-clock"></i>Access<span>Lifetime</span></li>
                                    <li><i className="flaticon-quality"></i>Certificate<span>Yes</span></li>
                                    <li><i className="flaticon-user"></i>Enrolled<span>12,405 Students</span></li>
                                </ul>
                                <div className="btn-box">
                                    <Link href="/education-details" className="theme-btn btn-one"><span>Enroll Now</span></Link>
                                </div>
                                <h6>Share Course</h6>
                                <ul className="social-links clearfix centred">
                                    <li><Link href="/education-details"><i className="flaticon-facebook"></i></Link></li>
                                    <li><Link href="/education-details"><i className="flaticon-twitter"></i></Link></li>
                                    <li><Link href="/education-details"><i className="flaticon-linkedin"></i></Link></li>
                                    <li><Link href="/education-details"><i className="flaticon-telegram"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </Layout>
        </div>
    )
}