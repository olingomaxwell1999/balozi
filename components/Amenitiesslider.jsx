import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'
import { useRef, useState,useEffect } from "react";
import ListItem from './ListItem';
import AOS from 'aos'
import 'aos/dist/aos.css'
import ImageOne from '../assets/balozi.jpg'
import ImageTwo from '../assets/balozione.jpg'
import ImageThree from '../assets/balozitwo.jpg'
import ImageFour from '../assets/balozithree.jpg'
import ImageFive from '../assets/balozifive.jpg'
import ImageSix from '../assets/balozisix.jpg'
import ImageSeven from '../assets/baloziseven.jpg'
import ImageEight from '../assets/balozieight.jpg'
import ImageNine from '../assets/balozinine.jpg'
import ImageTen from '../assets/baloziten.jpg'
import ImageEleven from '../assets/balozieleven.jpg'
import ImageTwelve from '../assets/balozitwelve.jpg'
import ImageThirteen from '../assets/balozithirteen.jpg'
import ImageFourteen from '../assets/balozifourteen.jpg'
import ImageFifteen from '../assets/balozififteen.jpg'
import ImageSixteen from '../assets/balozisixteen.jpg'
import ImageSeventeen from '../assets/baloziseventeen.jpg'
import ImageEighteen from '../assets/balozieighteen.jpg'
import ImageNineteen from '../assets/balozithirteen.jpg'
import ImageTwenty from '../assets/balozifive.jpg'

function Amenitiesslider() {

  useEffect(() => {
    AOS.init({duration:1500})
  })

    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef();

    const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  const Images = [
    {
      id: 0,
      src: ImageOne,
      alt: 'image slider One'
    },
    {
      id: 1,
      src: ImageTwo,
      alt: 'image slider Two'
    },
    {
      id: 2,
      src: ImageThree,
      alt: 'image slider Three'
    },
    {
      id: 3,
      src: ImageFour,
      alt: 'image slider Four'
    },
    {
      id: 4,
      src: ImageFive,
      alt: 'image slider Five'
    },
    {
      id: 5,
      src: ImageSix,
      alt: 'image slider Six'
    },
    {
      id: 6,
      src: ImageSeven,
      alt: 'image slider Seven'
    },
    {
      id: 7,
      src: ImageEight,
      alt: 'image slider Eight'
    },
    {
      id: 8,
      src: ImageNine,
      alt: 'image slider Nine'
    },
    {
      id: 9,
      src: ImageTen,
      alt: 'image slider Ten'
    },
    {
      id: 10,
      src: ImageEleven,
      alt: 'image slider Eleven'
    },
    {
      id: 11,
      src: ImageTwelve,
      alt: 'image slider Twelve'
    },
    {
      id: 12,
      src: ImageThirteen,
      alt: 'image slider ImageThirteen'
    },
    {
      id: 13,
      src: ImageFourteen,
      alt: 'image slider ImageFourteen'
    },
    {
      id: 14,
      src: ImageFifteen,
      alt: 'image slider ImageFifteen'
    },
    {
      id: 15,
      src: ImageSixteen,
      alt: 'image slider ImageSixteen'
    },
    {
      id: 16,
      src: ImageSeventeen,
      alt: 'image slider ImageSeventeen'
    },
    {
      id: 17,
      src: ImageEighteen,
      alt: 'image slider ImageEighteen'
    },
    {
      id: 18,
      src: ImageNineteen,
      alt: 'image slider ImageNineteen'
    },
    {
      id: 19,
      src: ImageTwenty,
      alt: 'image slider ImageTwenty'
    }
  ]

    return (
        <div data-aos='fade-up' className='list'>
            <div className="wrapper">
                <AiOutlineArrowLeft className="sliderArrow left" onClick={() => handleClick("left")} style={{ display: !isMoved && "none" }}
                />
                <div className="container" ref={listRef}>

                  {
                    Images.map((image) => (
                      <ListItem key={image.id} index={image.id} src={image.src} alt={image.alt} />
                    ))
                  }
                    {/* <ListItem index={0} /> */}
                </div>

                <AiOutlineArrowRight className="sliderArrow right" onClick={() => handleClick("right")}
        />
            </div>

        </div>
    )
}

export default Amenitiesslider