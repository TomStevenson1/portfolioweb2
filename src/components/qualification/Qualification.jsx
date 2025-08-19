import React, { useState } from "react";
import "./qualification.css";
import { HiOutlineAcademicCap, HiOutlineBriefcase, HiOutlineCalendar } from "react-icons/hi";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(2);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section">
            <h2 className="section__title"> Experiences</h2>
            <span className="section__subtitle">My Story</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div 
                        className={toggleState === 2 ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"} 
                        onClick={() => toggleTab(2)}
                    >
                        <HiOutlineBriefcase className="qualification__icon" />
                        Experience
                    </div>
                    <div 
                        className={toggleState === 1 ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"} 
                        onClick={() => toggleTab(1)}
                    >
                        <HiOutlineAcademicCap className="qualification__icon" />
                        Education
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">University of Minnesota</h3>
                                <span className="qualification__subtitle">B.S. in Computer Science</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    Sep 2023-May 2026
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">VANTAGE</h3>
                                <span className="qualification__subtitle">Experiential Learning Program</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    Sep 2021-Jun 2023
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Minnetonka High School</h3>
                                <span className="qualification__subtitle">High School Diploma</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    Sep 2019-Jun 2023
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        {/* Philips Co-op - Most recent position */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Software Engineering Co-op</h3>
                                <span className="qualification__subtitle">Philips</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    Jan 2025-Aug 2025
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        {/* UMN Senior Software Engineer - Second most recent */}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Senior Software Engineer</h3>
                                <span className="qualification__subtitle">University of Minnesota</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    May 2025-Present
                                </div>
                            </div>
                        </div>

                        {/* UMN Junior Software Engineer - Previous role at same org */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Junior Software Engineer</h3>
                                <span className="qualification__subtitle">University of Minnesota</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    May 2024-May 2025
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Undergraduate Researcher</h3>
                                <span className="qualification__subtitle">Dept of Computer Science</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    May 2024-Present
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Software Engineering Intern</h3>
                                <span className="qualification__subtitle">Lexus of Wayzata</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    Sep 2023-Nov 2023
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Independent Researcher</h3>
                                <span className="qualification__subtitle">Minnetonka High School</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    Oct 2022-May 2023
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Qualification;
