import Image from 'next/image'

function Onebedroomitem({src,alt}) {
  return (
    <div className='listItem'>
      <Image src={src} priority='true' alt={alt} className='img'/>
    </div>
  )
}

export default Onebedroomitem