import { SpeedInsights } from '@vercel/speed-insights/react'
import { Map, Marker, ZoomControl } from 'pigeon-maps'
import React, { useEffect } from 'react'
import Package from '../package.json'
import './App.css'
import img9415 from './assets/images/IMG_9415.jpeg'
import img9514 from './assets/images/IMG_9514.jpeg'
import img9515 from './assets/images/IMG_9515.jpeg'
import img9516 from './assets/images/IMG_9516.jpeg'
import img9517 from './assets/images/IMG_9517.jpeg'
import img9518 from './assets/images/IMG_9518.jpeg'
import img9519 from './assets/images/IMG_9519.jpeg'
import img9520 from './assets/images/IMG_9520.jpeg'
import img9521 from './assets/images/IMG_9521.jpeg'
import DualSection from './components/DualSection/DualSection'
import Footer from './components/Footer/Footer'
import ImageGallery from './components/ImageGallery/ImageGallery'
import LandingView from './components/LandingView/LandingView'
import LoadAnimation from './components/LoadAnimation/LoadAnimation'
import SectionSeparator from './components/SectionSeparator/SectionSeparator'
import { useTitle } from './contexts/TitleContext'

function App() {
  const { setTitle } = useTitle()

  useEffect(() => {
    setTitle('Home')
  }, [])

  return (
    <React.Fragment>
      <LoadAnimation />
      <LandingView
        mainTitle='Koryori-ya  尾崎'
        subTitle='木瓜(ボケ)の花をモチーフにした丸に四方木瓜の家紋がお出迎えします春になると桜の蕾が膨らみ花が咲き白鷺城の周辺は賑やかになりますが…杪冬の頃いち早く春のおとずれを知らせてくれるのが紅の色した愛嬌のある木瓜(ボケ)の花花言葉は『情熱』四季を通して春のおとずれのような暖かいゆるりとした空間でお待ちしております'
        carouselImages={[img9517, img9518, img9415]}
      />
      <SectionSeparator start='secondary' end='primary' />
      <DualSection
        title='Concept'
        description='出汁を引き素材の旨味と岩塩をベースに体と心に優しい創作家庭料理を提供いたします'
        img={{ src: img9519, alt: 'Koryoriya Ozaki Image 9520' }}
        background='primary'
      />
      <SectionSeparator start='primary' end='secondary' />
      <ImageGallery
        images={[
          {
            src: img9514,
            description: ''
          },
          {
            src: img9515,
            description: ''
          },
          {
            src: img9516,
            description: ''
          },
          {
            src: img9517,
            description: ''
          },
          {
            src: img9518,
            description: ''
          },
          {
            src: img9519,
            description: ''
          },
          {
            src: img9520,
            description: ''
          },
          {
            src: img9521,
            description: ''
          },
          {
            src: img9415,
            description: ''
          }
        ]}
        background='secondary'
      />
      <SectionSeparator start='secondary' end='primary' />
      <DualSection
        title='Access'
        description='世界遺産姫路城がそびえ立つ城下町にひっそりとたたずむKoryori-ya尾崎で『しっぽり』とした時間をお過ごしくださいませ'
        img={{ src: img9516, alt: 'Koryoriya Ozaki Image 9517' }}
        background='primary'
        mirror
      >
        <p className='access-intro'>
          〒670-0017 兵庫県姫路市福中町3番地小寺ビル１階
          <br />
          Tel.: <a href='tel:070-9055-5210'>070-9055-5210</a>
        </p>
        <div className='access-map-container'>
          <Map
            defaultCenter={[34.83258027024389, 134.68785965398067]}
            defaultZoom={18}
            minZoom={15}
            maxZoom={19}
            metaWheelZoom
          >
            <ZoomControl />
            <Marker width={50} anchor={[34.83258027024389, 134.68785965398067]} />
          </Map>
        </div>
      </DualSection>
      <SectionSeparator start='primary' end='tertiary' />
      <Footer
        access={
          <span>
            〒670-0017
            <br />
            兵庫県姫路市福中町3番地小寺ビル１階
            <br />
            Tel.: <a href='tel:070-9055-5210'>070-9055-5210</a>
          </span>
        }
        socials={[
          {
            title: 'Instagram',
            url: 'https://www.instagram.com/koryoriya_ozaki'
          }
        ]}
        about={
          <span>
            Made by{' '}
            <a href='https://www.mvagnon.dev' target='_blank' rel='noreferrer'>
              {Package.author}
            </a>
          </span>
        }
        background='tertiary'
      />
      <SpeedInsights />
    </React.Fragment>
  )
}

export default App
