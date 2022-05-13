import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

const BreadList = ({n}) => {
  const { title } = n[0];

  return (
    <div className='Breadcrumb'>
      <Breadcrumb>
        <Breadcrumb.Item href="/">首頁</Breadcrumb.Item>
        <Breadcrumb.Item href="/product">
          商品總覽
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{title}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}

export default BreadList;