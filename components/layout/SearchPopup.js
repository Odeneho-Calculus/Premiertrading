import Link from "next/link"

export default function SearchPopup({ isPopup, handlePopup }) {
    return (
        <>

            <div id="search-popup" className={`search-popup ${isPopup ? "popup-visible" : ""}`}>
                <div className="popup-inner">
                    <div className="upper-box">
                        <figure className="logo-box"><Link href="/index-5"><img src="assets/images/logo-8.png" alt=""/></Link></figure>
                        <div className="close-search" onClick={handlePopup}><i className="far fa-times"></i></div>
                    </div>
                    <div className="overlay-layer"></div>
                    <div className="auto-container">
                        <div className="search-form">
                            <form method="post" action="index-5.html">
                                <div className="form-group">
                                    <input type="search" name="search-field" placeholder="Type your keyword and hit" required />
                                    <button type="submit"><i className="flaticon-search"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
