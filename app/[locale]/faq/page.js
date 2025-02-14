'use client'
import { useState } from "react"
import Layout from "@/components/layout/Layout"
import "app/favicon.ico"

export default function Faq_page() {

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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Questions & Answers">
            <section className="faq-section faq-page-section sec-pad">
                <div className="auto-container">
                    <div className="tabs-box">
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-12 col-sm-12 sidebar-column">
                                <div className="tab-btn-box">
                                    <ul className="tab-btns tab-buttons">
                                        <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "p-tab-btn active-btn" : "tab-btn"}>Accounts</li>
                                        <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "p-tab-btn active-btn" : "tab-btn"}>Company</li>
                                        <li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "p-tab-btn active-btn" : "tab-btn"}>Education</li>
                                        <li onClick={() => handleOnClick(4)} className={activeIndex === 4 ? "p-tab-btn active-btn" : "tab-btn"}>Forex</li>
                                        <li onClick={() => handleOnClick(5)} className={activeIndex === 5 ? "p-tab-btn active-btn" : "tab-btn"}>Trading</li>
                                        <li onClick={() => handleOnClick(6)} className={activeIndex === 6 ? "p-tab-btn active-btn" : "tab-btn"}>Withdrawals</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-12 col-sm-12 content-column">
                                <div className="tabs-content content-box">
                                    <div className={activeIndex === 1 ? "tab p-tab active-tab" : "tab"}>
                                        <ul className="accordion-box">
                                            <li className={isActive.key == 1 ? "accordion block current" : "accordion"}>
                                                <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                                    <h5>Does Premier have a good reputation?</h5>
                                                </div>
                                                <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                                    <div className="text">
                                                        <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={isActive.key == 2 ? "accordion block current" : "accordion"}>
                                                <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                                                    <h5>How can i start my journey as an Premier trader?</h5>
                                                </div>
                                                <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                                    <div className="text">
                                                        <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={isActive.key == 3 ? "accordion block current" : "accordion"}>
                                                <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                                                    <h5>Who is eligible to join?</h5>
                                                </div>
                                                <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                                    <div className="text">
                                                        <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={isActive.key == 4 ? "accordion block current" : "accordion"}>
                                                <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}>
                                                    <h5>Is my income subject to taxation?</h5>
                                                </div>
                                                <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                                    <div className="text">
                                                        <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={isActive.key == 5 ? "accordion block current" : "accordion"}>
                                                <div className={isActive.key == 5 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(5)}>
                                                    <h5>How can I initiate a withdrawal of my profits?</h5>
                                                </div>
                                                <div className={isActive.key == 5 ? "acc-content current" : "acc-content"}>
                                                    <div className="text">
                                                        <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={isActive.key == 6 ? "accordion block current" : "accordion"}>
                                                <div className={isActive.key == 6 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(6)}>
                                                    <h5>Can you detail the account specifications?</h5>
                                                </div>
                                                <div className={isActive.key == 6 ? "acc-content current" : "acc-content"}>
                                                    <div className="text">
                                                        <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={activeIndex === 2 ? "tab p-tab active-tab" : "tab"} id="tab2">
                                    <ul className="accordion-box">
                                            <li className={isActive.key == 1 ? "accordion block current" : "accordion"}>
                                                <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                                    <h5>Does Premier have a good reputation?</h5>
                                                </div>
                                                <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                                    <div className="text">
                                                        <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={isActive.key == 2 ? "accordion block current" : "accordion"}>
                                                <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                                                    <h5>How can i start my journey as an Premier trader?</h5>
                                                </div>
                                                <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                                    <div className="text">
                                                        <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={isActive.key == 3 ? "accordion block current" : "accordion"}>
                                                <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                                                    <h5>Who is eligible to join?</h5>
                                                </div>
                                                <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                                    <div className="text">
                                                        <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={isActive.key == 4 ? "accordion block current" : "accordion"}>
                                                <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}>
                                                    <h5>Is my income subject to taxation?</h5>
                                                </div>
                                                <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                                    <div className="text">
                                                        <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={isActive.key == 5 ? "accordion block current" : "accordion"}>
                                                <div className={isActive.key == 5 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(5)}>
                                                    <h5>How can I initiate a withdrawal of my profits?</h5>
                                                </div>
                                                <div className={isActive.key == 5 ? "acc-content current" : "acc-content"}>
                                                    <div className="text">
                                                        <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={isActive.key == 6 ? "accordion block current" : "accordion"}>
                                                <div className={isActive.key == 6 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(6)}>
                                                    <h5>Can you detail the account specifications?</h5>
                                                </div>
                                                <div className={isActive.key == 6 ? "acc-content current" : "acc-content"}>
                                                    <div className="text">
                                                        <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={activeIndex === 3 ? "tab p-tab active-tab" : "tab"} id="tab3">
                                    <ul className="accordion-box">
                                            <li className={isActive.key == 1 ? "accordion block current" : "accordion"}>
                                                <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                                    <h5>Does Premier have a good reputation?</h5>
                                                </div>
                                                <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                                    <div className="text">
                                                        <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={isActive.key == 2 ? "accordion block current" : "accordion"}>
                                                <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                                                    <h5>How can i start my journey as an Premier trader?</h5>
                                                </div>
                                                <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                                    <div className="text">
                                                        <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={isActive.key == 3 ? "accordion block current" : "accordion"}>
                                                <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                                                    <h5>Who is eligible to join?</h5>
                                                </div>
                                                <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                                    <div className="text">
                                                        <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={isActive.key == 4 ? "accordion block current" : "accordion"}>
                                                <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}>
                                                    <h5>Is my income subject to taxation?</h5>
                                                </div>
                                                <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                                    <div className="text">
                                                        <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={isActive.key == 5 ? "accordion block current" : "accordion"}>
                                                <div className={isActive.key == 5 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(5)}>
                                                    <h5>How can I initiate a withdrawal of my profits?</h5>
                                                </div>
                                                <div className={isActive.key == 5 ? "acc-content current" : "acc-content"}>
                                                    <div className="text">
                                                        <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={isActive.key == 6 ? "accordion block current" : "accordion"}>
                                                <div className={isActive.key == 6 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(6)}>
                                                    <h5>Can you detail the account specifications?</h5>
                                                </div>
                                                <div className={isActive.key == 6 ? "acc-content current" : "acc-content"}>
                                                    <div className="text">
                                                        <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={activeIndex === 4 ? "tab p-tab active-tab" : "tab"} id="tab4">
                                    <ul className="accordion-box">
                                            <li className={isActive.key == 1 ? "accordion block current" : "accordion"}>
                                                <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                                    <h5>Does Premier have a good reputation?</h5>
                                                </div>
                                                <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                                    <div className="text">
                                                        <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={isActive.key == 2 ? "accordion block current" : "accordion"}>
                                                <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                                                    <h5>How can i start my journey as an Premier trader?</h5>
                                                </div>
                                                <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                                    <div className="text">
                                                        <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={isActive.key == 3 ? "accordion block current" : "accordion"}>
                                                <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                                                    <h5>Who is eligible to join?</h5>
                                                </div>
                                                <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                                    <div className="text">
                                                        <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={isActive.key == 4 ? "accordion block current" : "accordion"}>
                                                <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}>
                                                    <h5>Is my income subject to taxation?</h5>
                                                </div>
                                                <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                                    <div className="text">
                                                        <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={isActive.key == 5 ? "accordion block current" : "accordion"}>
                                                <div className={isActive.key == 5 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(5)}>
                                                    <h5>How can I initiate a withdrawal of my profits?</h5>
                                                </div>
                                                <div className={isActive.key == 5 ? "acc-content current" : "acc-content"}>
                                                    <div className="text">
                                                        <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={isActive.key == 6 ? "accordion block current" : "accordion"}>
                                                <div className={isActive.key == 6 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(6)}>
                                                    <h5>Can you detail the account specifications?</h5>
                                                </div>
                                                <div className={isActive.key == 6 ? "acc-content current" : "acc-content"}>
                                                    <div className="text">
                                                        <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={activeIndex === 5 ? "tab p-tab active-tab" : "tab"} id="tab5">
                                    <ul className="accordion-box">
                                            <li className={isActive.key == 1 ? "accordion block current" : "accordion"}>
                                                <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                                    <h5>Does Premier have a good reputation?</h5>
                                                </div>
                                                <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                                    <div className="text">
                                                        <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={isActive.key == 2 ? "accordion block current" : "accordion"}>
                                                <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                                                    <h5>How can i start my journey as an Premier trader?</h5>
                                                </div>
                                                <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                                    <div className="text">
                                                        <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={isActive.key == 3 ? "accordion block current" : "accordion"}>
                                                <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                                                    <h5>Who is eligible to join?</h5>
                                                </div>
                                                <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                                    <div className="text">
                                                        <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={isActive.key == 4 ? "accordion block current" : "accordion"}>
                                                <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}>
                                                    <h5>Is my income subject to taxation?</h5>
                                                </div>
                                                <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                                    <div className="text">
                                                        <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={isActive.key == 5 ? "accordion block current" : "accordion"}>
                                                <div className={isActive.key == 5 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(5)}>
                                                    <h5>How can I initiate a withdrawal of my profits?</h5>
                                                </div>
                                                <div className={isActive.key == 5 ? "acc-content current" : "acc-content"}>
                                                    <div className="text">
                                                        <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={isActive.key == 6 ? "accordion block current" : "accordion"}>
                                                <div className={isActive.key == 6 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(6)}>
                                                    <h5>Can you detail the account specifications?</h5>
                                                </div>
                                                <div className={isActive.key == 6 ? "acc-content current" : "acc-content"}>
                                                    <div className="text">
                                                        <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={activeIndex === 6 ? "tab p-tab active-tab" : "tab"} id="tab6">
                                    <ul className="accordion-box">
                                            <li className={isActive.key == 1 ? "accordion block current" : "accordion"}>
                                                <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                                    <h5>Does Premier have a good reputation?</h5>
                                                </div>
                                                <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                                    <div className="text">
                                                        <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={isActive.key == 2 ? "accordion block current" : "accordion"}>
                                                <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                                                    <h5>How can i start my journey as an Premier trader?</h5>
                                                </div>
                                                <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                                    <div className="text">
                                                        <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={isActive.key == 3 ? "accordion block current" : "accordion"}>
                                                <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                                                    <h5>Who is eligible to join?</h5>
                                                </div>
                                                <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                                    <div className="text">
                                                        <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={isActive.key == 4 ? "accordion block current" : "accordion"}>
                                                <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}>
                                                    <h5>Is my income subject to taxation?</h5>
                                                </div>
                                                <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                                    <div className="text">
                                                        <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={isActive.key == 5 ? "accordion block current" : "accordion"}>
                                                <div className={isActive.key == 5 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(5)}>
                                                    <h5>How can I initiate a withdrawal of my profits?</h5>
                                                </div>
                                                <div className={isActive.key == 5 ? "acc-content current" : "acc-content"}>
                                                    <div className="text">
                                                        <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={isActive.key == 6 ? "accordion block current" : "accordion"}>
                                                <div className={isActive.key == 6 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(6)}>
                                                    <h5>Can you detail the account specifications?</h5>
                                                </div>
                                                <div className={isActive.key == 6 ? "acc-content current" : "acc-content"}>
                                                    <div className="text">
                                                        <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
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
            </section>
            </Layout>
        </div>
    )
}