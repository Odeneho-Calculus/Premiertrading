'use client'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'


export default function VideoPopup({ style, text }) {
    const [isOpen, setOpen] = useState(false)
    return (
        <>

            {!style &&
                <a onClick={() => setOpen(true)} className="overlay-link lightbox-image video-fancybox ripple"><i className="flaticon-play-buttton" /></a>
            }

            {style === 1 &&
                <div className="video-btn">
                    <a onClick={() => setOpen(true)} className="overlay-link lightbox-image video-fancybox ripple"><i className="flaticon-play-buttton" /> </a>
                </div>
            }

            {style === 2 &&
                <div className="video-btn">
                    <a onClick={() => setOpen(true)} className="overlay-link lightbox-image video-fancybox ripple"><i className="flaticon-play-buttton" /></a><h6>{text ? text : "Latest Program Video"}</h6>
                </div>
            }

            {style === 3 &&
                <div className="video-btn">
                    <a onClick={() => setOpen(true)} className="lightbox-image">
                        <i className="customicon-play-button" />
                        <span className="border-animation border-1" />
                        <span className="border-animation border-2" />
                        <span className="border-animation border-3" />
                    </a>
                </div>
            }

            {style === 4 &&
                <div className="video-btn">
                    <a onClick={() => setOpen(true)} className="lightbox-image">
                        <img src="/assets/images-4/icons/video-btn-1.png" alt="" /></a>
                </div>
            }

            {style === 5 &&
                <a onClick={() => setOpen(true)} className="video-btn overlay-link lightbox-image video-fancybox ripple"><span className="fas fa-play" /></a>
            }

            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="_fU6pxjr9p8" onClose={() => setOpen(false)} />
        </>
    )
}