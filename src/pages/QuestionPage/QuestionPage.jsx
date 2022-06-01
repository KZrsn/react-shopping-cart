import React from 'react';
import AccordionBox from '../../components/AccordionBox/AccordionBox';
import QAdata from '../../QAdata.json';

const QuestionPage = () => {
  return (
    <div className='QuestionPage'>
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
    </div>
  )
}

export default QuestionPage;