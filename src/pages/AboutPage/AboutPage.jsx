import React from 'react';
import FooterInfo from '../../components/Footer/FooterInfo';
import Header from '../../components/Header/Header';
import IMG from '../../images/介紹00.jpeg';
import UpButton from '../../components/UpButton/UpButton';

const AboutPage = ({cart}) => {
  return (
    <div className='AboutPage'>
      <Header cart={cart} />

      {/* 以下介紹頁面 */}
      <div className='one'>
        <section className='left'>
          <img
            src="https://images.pexels.com/photos/1683546/pexels-photo-1683546.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="義式冰淇淋" 
          />
        </section>
        <section className='right'>
          <div>
            <h1>義式冰淇淋</h1>
            <span></span>
          </div>
          <p>義式冰淇淋是一種源自於義大利的甜點，是歐洲冰淇淋唯一的分類；
            <br />以它的多種口味、手工製作跟營養價值聞名，與美式冰淇淋之不同處極多，不論是成分、製造過程、口味種類、營養價值跟質感都有差異；
            <br />義式冰淇淋不使用人工香精或甜味劑，強調其天然製程，牛奶和鮮奶油含量比美式冰淇淋低、水果含量比美式冰淇淋高。
          </p>
        </section>
      </div>

      <div className='Introduce00'>
        <p>義式冰淇淋的脂肪含量約在4～8%，有別於一般美式冰淇淋的10～14% ，另外由於急速冷凍的緣故，Gelato的空氣含量也比美式冰淇淋少了一半以上，口味大多使用當季新鮮水果製成，口感更是細緻綿密。</p>
        <img src={IMG} alt="冰淇淋介紹" />
      </div>
      
      <div className='Introduce01'>
        <img src='https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
        <p>嚴選當季新鮮水果手工製成，空氣含量較多，密度較低。
          <br />
          材料使用天然成分，不含任何人工香精或甜味劑。
        </p>
      </div>

      <div className='Introduce02'>
        <p>主要使用新鮮鮮奶和少許的頂級鮮奶油調味，口感綿密滑順，比起傳統的冰淇淋擁有更低的脂肪跟卡路里，吃起來輕鬆無負擔。</p>
        <img src='https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
      </div>

      <FooterInfo />
      <UpButton />
    </div>
  )
}

export default AboutPage;