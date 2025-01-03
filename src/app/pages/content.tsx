'use client'
import { FC, useState } from 'react'
import Warpper from '../styles/wrapper.module.css'
import Image from '../components/Image'
import ImageContent from '../styles/imageContent.module.css'
const imagecho_logo =
  'https://imagechobucket.s3.us-west-1.amazonaws.com/frontend/assets/images/image-logo.png'
const apple_img =
  'https://imagechobucket.s3.us-west-1.amazonaws.com/frontend/assets/images/apple.png'
const facebook_img =
  'https://imagechobucket.s3.us-west-1.amazonaws.com/frontend/assets/images/facebook.png'
const google_img =
  'https://imagechobucket.s3.us-west-1.amazonaws.com/frontend/assets/images/google.png'
const Ribbon = 'https://imagechobucket.s3.us-west-1.amazonaws.com/frontend/assets/images/ribbon.jpg'
const bg_video =
  'https://imagechobucket.s3.us-west-1.amazonaws.com/frontend/assets/images/bg-video.png'
const imagecho_video =
  'https://imagechobucket.s3.us-west-1.amazonaws.com/frontend/assets/video/imagecho_video.mp4'
const imagechoVideo =
  'https://imagechobucket.s3.us-west-1.amazonaws.com/frontend/assets/video/imagecho.video.mp4'
const frame = 'https://imagechobucket.s3.us-west-1.amazonaws.com/frontend/assets/images/frame.png'
const Content: FC = () => {

const images = [
    {
        text:<div className='flex flex-col'>
                <span className={ImageContent.textStyle}>
                  Let every product become a unique and heartfelt companion
                </span>
                <span className={ImageContent.textStyle}>in your daily journey.</span>
              </div>,
        src:'https://imagechobucket.s3.us-west-1.amazonaws.com/frontend/assets/images/image1.jpg'
    },
    {
        text:<div className='flex flex-col'>
                <span className={ImageContent.textStyle}>
                  At Imagecho, we celebrate the harmony of tradition and
                </span>
                <span className={ImageContent.textStyle}>
                  modernity, crafting designs that embody cultural richness and
                </span>
                <span className={ImageContent.textStyle}>contemporary innovation.</span>
              </div>,
        src:'https://imagechobucket.s3.us-west-1.amazonaws.com/frontend/assets/images/image2.jpg'
    },
    {
        text:<div className='flex flex-col'>
                <span className={ImageContent.textStyle}>
                  Each product is a reflection of timeless values, reimagined for
                </span>
                <span className={ImageContent.textStyle}>
                  today’s lifestyles,offering a meaningful connection to culture
                </span>
                <span className={ImageContent.textStyle}>and comfort in every detail.</span>
              </div>,
        src:'https://imagechobucket.s3.us-west-1.amazonaws.com/frontend/assets/images/image3.jpg'
    },
    {
        text:<div className='flex flex-col'>
                <span className={ImageContent.textStyle}>
                  Drawing inspiration from timeless traditions and modern sensibilities,
                </span>
                <span className={ImageContent.textStyle}>we craft designs that honor heritage</span>
                <span className={ImageContent.textStyle}>while embracing innovation.</span>
              </div>,
        src:'https://imagechobucket.s3.us-west-1.amazonaws.com/frontend/assets/images/image4.jpg'
    },

  ]
const [order, setOrder] = useState([0, 1, 2,3]);
const handleImageClick = (index) => {

 setOrder((prevOrder) => {
    const newOrder = [...prevOrder];
    if (index === 1) {
      const firstImage = newOrder[0];
      newOrder[0] = newOrder[1];
      newOrder[1] = newOrder[2];
      newOrder[2] = newOrder[3];
      newOrder[3] = firstImage;
    }
    return newOrder;
  });
  }

  return (
    <div className='flex flex-col'>
        {/* 视频 */}
      <div className='flex'>
        <video autoPlay width='100%' preload='none' controls poster={bg_video}>
          <source
            src={imagecho_video}
            type='video/mp4'
            style={{ height: '944px', width: '100%' }}
          />
        </video>
      </div>
        {/* 图片 */}
      <div className={ImageContent.imageStyle}>
        <div className={ImageContent.thrImage}>
          <div style={{ display: 'flex', gap: '65px', alignItems: 'flex-end' }}>
            {order.map((imageIndex, index) => (
                <div key={index}  onClick={()=>index === 1 ? handleImageClick(index):undefined}>
                    <div style={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
                        <div>
                          <span>{index === 0 ? images[imageIndex].text : ""}</span>
                        </div>
                        <div className={ImageContent.culture}>
                            <span className={ImageContent.cultureStyle}> {index === 0 ? 'CULTURE' : ''}</span>
                        </div>
                    </div>
                    <div className='max-w-lg '>
                        <Image
                            key={index}
                            src={images[imageIndex].src}
                            width={0}
                            height={0}
                            alt=''
                            className='w-full h-auto'
                            style={{

                                cursor: index === 1 ? 'pointer' : 'default',
                                border: index === 0 ? '3px solid #FFD75F' : 'none',
                            }}
                        />
                    </div>
               </div>
            ))}

          </div>
        </div>
      </div>

      {/* 叠加图片 */}
      <div className={ImageContent.ribbon}>
        <img src={Ribbon} alt='' style={{ height: '440px', width: '100%' }} />
      </div>
      <div className={Warpper.imageStyle}>
        <img
          src={Ribbon}
          alt=''
          className='relative -z-10'
          style={{ height: '636px', width: '100%' }}
        />
        <div className={Warpper.oneText}>
          <span className={Warpper.title}>EXCELLENT</span>
        </div>
        <div className={Warpper.twoText}>
          <span className={Warpper.info}>Beneath the amber glow of a fading twilight,</span>
        </div>
        <div className={Warpper.thrText}>
          <span className={Warpper.info}>the world seemed to hold its breath.</span>
        </div>
        <div className={Warpper.image}>
          <div>
            <img src={frame} alt='' />
          </div>
          <div>
            <video className={Warpper.video} preload='none' controls autoPlay>
              <source src={imagechoVideo} type='video/mp4' />
            </video>
          </div>
        </div>
      </div>

      {/* 弹幕滚动-1 */}
      <div className={Warpper.scrollOne}>
        <div className={Warpper.item1}>
          <span>What unseen light does the sunrise bring? </span>
        </div>
        <div className={Warpper.item2}>
          <span>Where does the journey of imagination begin? </span>
        </div>
        <div className={Warpper.item3}>
          <span>What secrets are hidden in plain sight? </span>
        </div>
      </div>
      {/* 滚动-2 */}
      <div className={Warpper.scrollTwo}>
        <div className={Warpper.item4}>
          <span>How far can an idea take you? </span>
        </div>
        <div className={Warpper.item5}>
          <span>‘The essential is invisible to the eye.’ What do you see? </span>
        </div>
        <div className={Warpper.item6}>
          <span>‘A single dream is more powerful than a thousand realities.’ What’s yours? </span>
        </div>
      </div>
      {/* 滚动-3 */}
      <div className={Warpper.scrollThree}>
        <div className={Warpper.item7}>
          <span>‘There is something at work in my soul.’ Can you feel it? </span>
        </div>
        <div className={Warpper.item8}>
          <span>What design would emerge from chaos and light? </span>
        </div>
        <div className={Warpper.item9}>
          <span>‘It always seems impossible until it is done.’ Are you ready for what’s next?</span>
        </div>
      </div>
      {/* 底部 */}
      <div className={ImageContent.footer}>
        <div className={ImageContent.image}>
          <div className={ImageContent.logo}>
            <img src={imagecho_logo} alt='' width={407} height={70} />
          </div>
          <div className={ImageContent.contacts}>
            <span className={ImageContent.conFont}>contacts@imagecho.ai</span>
          </div>
        </div>
        <div className={ImageContent.footerInfo}>
          <div>
            <span className={ImageContent.infoThree}>
              Blending innovation and warmth, the Imagecho brand
            </span>
            <br />
            <span className={ImageContent.infoThree}>
              redefines the beauty of everyday life with creative
            </span>
            <br />
            <span className={ImageContent.infoThree}>designs and a comforting touch.</span>
          </div>
        </div>
        <div className={ImageContent.icon}>
          <div className={ImageContent.copyright}>
            <span>Copyright © imagecho 2024</span>
          </div>
          <div className={ImageContent.threeIcon}>
            <img src={facebook_img} alt='' width={48} height={48} />
            <img src={google_img} alt='' width={48} height={48} />
            <img src={apple_img} alt='' width={48} height={48} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Content
