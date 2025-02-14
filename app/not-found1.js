
import Link from "next/link"
export default function Error() {

    return (
        <>
            <section className="error-section centred">
                <div className="bg-layer" style={{ backgroundImage: "url(assets/images/background/error-bg.jpg)" }}></div>
                <div className="scroll-text">
                    <div className="text-box-one">
                        <div className="text-inner">
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                        </div>
                    </div>
                    <div className="text-box-two">
                        <div className="text-inner">
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                            <h6>Page Not Found</h6>
                        </div>
                    </div>
                </div>
                <div className="auto-container">
                    <div className="inner-box">
                        <div className="error-title">
                            <h1>4<span>No Results <br />Found</span>4</h1>
                            <h3>Oops!</h3>
                        </div>
                        <p>Try refining your search or use the navigation below to <br />return to the main home page.</p>
                        <div className="btn-box">
                            <Link href="/" className="theme-btn btn-two"><span>Back to Home</span></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
