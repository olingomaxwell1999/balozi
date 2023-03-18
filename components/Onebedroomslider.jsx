import dynamic from 'next/dynamic'
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'
import { useRef, useState } from "react";
const Onebedroomitem = dynamic(() => import('./Onebedroomitem'), {ssr: false})
import ImageOne from '../assets/balozi.jpg'
import ImageTwo from '../assets/balozione.jpg'
import ImageThree from '../assets/balozitwo.jpg'
import ImageFour from '../assets/balozithree.jpg'
import ImageFive from '../assets/balozifour.jpg'
import ImageSix from '../assets/balozifive.jpg'
import ImageSeven from '../assets/balozisix.jpg'
import ImageEight from '../assets/baloziseven.jpg'
import ImageNine from '../assets/balozieight.jpg'
import ImageTen from '../assets/balozinine.jpg'
import ImageEleven from '../assets/baloziten.jpg'
import ImageTwelve from '../assets/balozieleven.jpg'
import ImageThirteen from '../assets/balozitwelve.jpg'
import ImageFourteen from '../assets/balozithirteen.jpg'
import ImageFifteen from '../assets/balozifourteen.jpg'
import ImageSixteen from '../assets/balozififteen.jpg'
import ImageSeventeen from '../assets/balozisixteen.jpg'
import ImageEighteen from '../assets/baloziseventeen.jpg'
import ImageNineteen from '../assets/balozieighteen.jpg'
import ImageTwenty from '../assets/balozithirty.jpg'

function Onebedroomslider() {

    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

    let refferHere = useRef(0);


    const handleClick = (direction) => {
    setIsMoved(true);
    let distance = refferHere.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      refferHere.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      refferHere.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  

  const Images = [
    {
      id: 0,
      src: ImageNineteen,
      alt: 'image slider One'
    },
    {
      id: 1,
      src: ImageEighteen,
      alt: 'image slider Two'
    },
    {
      id: 2,
      src: ImageSeventeen,
      alt: 'image slider Three'
    },
    {
      id: 3,
      src: ImageSixteen,
      alt: 'image slider Four'
    },
    {
      id: 4,
      src: ImageFifteen,
      alt: 'image slider Five'
    },
    {
      id: 5,
      src: ImageFourteen,
      alt: 'image slider Six'
    },
    {
      id: 6,
      src: ImageThirteen,
      alt: 'image slider Seven'
    },
    {
      id: 7,
      src: ImageTwelve,
      alt: 'image slider Eight'
    },
    {
      id: 8,
      src: ImageEleven,
      alt: 'image slider Nine'
    },
    {
      id: 9,
      src: ImageTen,
      alt: 'image slider Ten'
    },
    {
      id: 10,
      src: ImageNine,
      alt: 'image slider Eleven'
    },
    {
      id: 11,
      src: ImageEight,
      alt: 'image slider Twelve'
    },
    {
      id: 12,
      src: ImageSeven,
      alt: 'image slider ImageThirteen'
    },
    {
      id: 13,
      src: ImageSix,
      alt: 'image slider ImageFourteen'
    },
    {
      id: 14,
      src: ImageFive,
      alt: 'image slider ImageFifteen'
    },
    {
      id: 15,
      src: ImageFour,
      alt: 'image slider ImageSixteen'
    },
    {
      id: 16,
      src: ImageThree,
      alt: 'image slider ImageSeventeen'
    },
    {
      id: 17,
      src: ImageTwo,
      alt: 'image slider ImageEighteen'
    },
    {
      id: 18,
      src: ImageOne,
      alt: 'image slider ImageNineteen'
    },
    {
      id: 19,
      src: ImageTwenty,
      alt: 'image slider ImageTwenty'
    }
  ]

    return (
        <div style={{marginTop:'30px'}} className='list'>
            <div className="wrapper">
                <AiOutlineArrowLeft className="sliderArrow left" onClick={() => handleClick("left")} style={{ display: !isMoved && "none" }}
                />
                <div className="container" ref={refferHere}>

                    {
                    Images.map((image) => (
                      <Onebedroomitem key={image.id} index={image.id} src={image.src} alt={image.alt} />
                    ))
                  }

                    {/* <Onebedroomitem index={0} /> */}
                </div>

                <AiOutlineArrowRight className="sliderArrow right" onClick={() => handleClick("right")}
        />
            </div>

        </div>
    )
}

export default Onebedroomslider