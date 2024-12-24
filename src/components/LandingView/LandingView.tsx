import React from 'react'
import ImgCarousel from '../ImgCarousel/ImgCarousel'
import './LandingView.css'

interface LandingViewProps {
  mainTitle: string
  subTitle: string
  carouselImages: Array<string>
}
export default function LandingView(props: LandingViewProps) {
  const { mainTitle, subTitle, carouselImages } = props

  return (
    <React.Fragment>
      <div className='landing-view full-screen-container'>
        <div className='landing-view-content boxed'>
          <div className='landing-view-boxed-container'>
            <div className='landing-view-title-container'>
              <h1 className='landing-view-text'>{mainTitle}</h1>
              <p className='landing-view-text landing-view-description'>{subTitle}</p>
            </div>
            <div className='landing-view-bt-container'>
              <a href='tel:070-9055-5210' className='landing-view-bt landing-view-call-bt'>
                <svg xmlns='http://www.w3.org/2000/svg' height='16px' viewBox='0 -960 960 960'>
                  <path d='M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z' />
                </svg>
              </a>
              <a href='#access' className='landing-view-bt'>
                <svg xmlns='http://www.w3.org/2000/svg' height='16px' viewBox='0 -960 960 960'>
                  <path d='m574-129-214-75-186 72q-10 4-19.5 2.5T137-136q-8-5-12.5-13.5T120-169v-561q0-13 7.5-23t20.5-15l186-63q6-2 12.5-3t13.5-1q7 0 13.5 1t12.5 3l214 75 186-72q10-4 19.5-2.5T823-824q8 5 12.5 13.5T840-791v561q0 13-7.5 23T812-192l-186 63q-6 2-12.5 3t-13.5 1q-7 0-13.5-1t-12.5-3Zm-14-89v-468l-160-56v468l160 56Zm80 0 120-40v-474l-120 46v468Zm-440-10 120-46v-468l-120 40v474Zm440-458v468-468Zm-320-56v468-468Z' />
                </svg>
                Access
              </a>
            </div>
          </div>
        </div>
        <div className='landing-view-carousel'>
          <ImgCarousel images={carouselImages} slideSpeed={10000} />
        </div>
      </div>
    </React.Fragment>
  )
}
