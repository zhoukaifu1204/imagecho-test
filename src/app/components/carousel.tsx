// @ts-nocheck
// import { useState } from 'react'

// type Mycurrent = {
//   current: string
// }
export default function Carousel({ slides }) {
  // @ts-ignore
  //   state: Mycurrent = {
  //     current: 0
  //   }
  //   let [current, setCurrent] = useState(0)
  return (
    <div className='overflow-hidden relative'>
      <div
        className={`flex transition ease-out duration-40`}
        style={{ transform: `translateX(-${1 * 100}%)` }}
      >
        {slides.map((s, i) => {
          return (
            <div key={i}>
              <img className='w-full h-full object-over object-center' src={s} alt={''} />
            </div>
          )
        })}
      </div>
      <div className='absolute bottom-0 py-4 flex justify-center gap-3 w-full'>
        {slides.map((s, i) => {
          return (
            <div
              key={'circle' + i}
              className={`rounded-full w-5 h-5 ${i === 0 ? 'bg-white' : 'bg-gray-500'} bg-red`}
            ></div>
          )
        })}
      </div>
    </div>
  )
}
