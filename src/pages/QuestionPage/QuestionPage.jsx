import React from 'react';
import Header from '../../components/Header/Header';
import FooterInfo from '../../components/Footer/FooterInfo';
import UpButton from '../../components/UpButton/UpButton';
import AccordionBox from '../../components/AccordionBox/AccordionBox';
import QAdata from '../../QAdata.json';

const QuestionPage = ({cart}) => {
  return (
    <div className='QuestionPage'>
      <Header cart={cart} />
      <section className='question'>
        <div className="background">
          <h3>常見問題</h3>
          <hr />
          <div className='QA'>
            {QAdata.map(({ title, content }) => (
              <AccordionBox title={title} content={content} key={title}/>
            ))}
          </div>
        </div> 
      </section>
      <FooterInfo />
      <UpButton />
    </div>
  )
}

export default QuestionPage;