import React from 'react'
import * as classes from './home.module.css'
import { CgPlayButtonO } from "react-icons/cg";

export default function Home() {
  return (
    <>
    <nav className={classes.navbar}>
        <div>WHY US?</div>
        <div>PROGRAMMES</div>
        <div>NEWS & EVENTS</div>
        <div>ALUMNI</div>
        <div>TIME TABLE</div>
        <div>SCHOLARSHIPS</div>
    </nav>
    <section className={classes.main}>
        <div className={classes.mainLeft}>
            <h1 className={classes.mainHeading}>State-of-the-art infrastructure and facility college with all the needed infrastructures</h1>
            <p className={classes.mainParagraph}>Islington College houses some of the most sophisticated and modern infrastructure in the entirety of Nepal with a facility that is ever improving along with international standards.</p>
            <button className={classes.videoPlay}>
                <div className={classes.playIcon}>
                <CgPlayButtonO />
                </div>
                <span>Watch The Video</span>
            </button>
        </div>
        <div className={classes.mainRight}>
            <div className={classes.imagesContainer}>ehhl
                <div className={classes.image1}>
                    <img src="https://islington.edu.np/images/infrastructure/facilities-img__three.jpg" alt="IMG" />
                </div>
                <div className={classes.image2}>
                    <img src="https://islington.edu.np/images/infrastructure/facilities-img__two.jpg" alt="IMG" />
                </div>
                <div className={classes.image3}>
                    <img src="https://islington.edu.np/images/infrastructure/facilities-img__one.jpg" alt="IMG" />
                </div>
            </div>
        </div>
    </section>
    <section className={classes.infrastructure}>

        <div className={classes.heading}>
            <div className={classes.largeHeading}>
                <h1 className={classes.textI}>EXPLORE</h1>
                <h1 className={classes.textII}>AROUND</h1>
            </div>
            <div className={classes.smallHeading}>
                <p>We provide top facilities for the students to excel in every way possible.</p>
            </div>
        </div>

    <div className={classes.mainContainer}>
            <div className={classes.item1}>
                <div className={classes.specifiyingHeading}>
                    <div className={classes.number}>10</div>
                    <div>Lecture</div>
                    <div>Halls</div>
                </div>
                <div className={classes.specifiyingContent}>
                Well equipped with tech and spacious halls, our interactive lecture halls are perfectly designed to escalate textbook learning.
                </div>
            </div>
            <div className={classes.item2}></div>  
            <div className={classes.item3}></div>
            <div className={classes.item4}></div>
            <div className={classes.item5}>
            <div className={classes.specifiyingHeading}>
                    <div className={classes.number}>1</div>
                    <div>Spacious</div>
                    <div>Library</div>
                </div>
                <div className={classes.specifiyingContent}>
                Enjoy your silent me-time with your books in our strategically designed library or browse through our collection of books and research papers in peace.
                </div>
            </div>
            <div className={classes.item6}></div>
            <div className={classes.item7}>
            <div className={classes.specifiyingHeading}>
                    <div className={classes.number}>1</div>
                    <div>Spacious</div>
                    <div>Library</div>
                </div>
            </div>
            <div className={classes.item8}></div>
            <div className={classes.item9}></div>

    </div>


    </section>
    </>
  )
}
