import React from 'react';
import { BackTop } from 'antd';
import { UpCircleOutlined } from '@ant-design/icons';

export default function AppFooter() {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="copyright">
          Made by
          <a
            target="_blank"
            rel="noreferrer"
            href="https://gitlab.com/19522353/covid-news">
            {' '}
            19522353,19522115,19522071
          </a>
        </div>
        <BackTop>
          <div className="goTop">
            <UpCircleOutlined />
          </div>
        </BackTop>
      </div>
    </div>
  );
}