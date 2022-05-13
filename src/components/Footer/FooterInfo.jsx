import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa'
import { AiOutlineTwitter , AiFillInstagram } from 'react-icons/ai'

const FooterInfo = () => {
  return (
    <div className='FooterInfo'>
      <section className='up'>
        <p>客服時間：12:00-20:30</p>  
        <p>客服專線：00-00000000</p>
        <p>信箱：fake@fakemail.com</p>
        <p>地址：台灣沒有這個路沒有這個號</p>
      </section>
      
      <section className='center'>
        <h3>關注我們</h3>
        <div>
          <a href="#"><FaFacebookSquare /></a>
          <a href="#"><AiOutlineTwitter /></a>
          <a href="#"><AiFillInstagram /></a>
        </div>
      </section>
      
      <section className='down'>2022© 僅用於個人學習使用，非商業用途。</section>
    </div>
  )
}

export default FooterInfo;