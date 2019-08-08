import React from 'react';

export default function SlideShow() {
  return (
    <div id="slideShowWrap">
      <div
        id="slideShow"
        style={{
          backgroundImage:
            'url(images/f16bf41c-bd0d-472c-9dd8-a349472dac542.png)',
        }}
      />
      <div
        style={{
          width: '100%',
          height: '100px',
          backgroundImage: 'url(images/gradient.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'absolute',
          bottom: '0',
        }}
      />
      <ul>
        <li>
          <p className="sub">최근 인기 프로그램</p>
          <p className="programName">미니 특공대</p>
        </li>
        <li>
          <p className="sub">최근 인기 프로그램</p>
          <p className="programName">미니 특공대</p>
        </li>
        <li>
          <p className="sub">최근 인기 프로그램</p>
          <p className="programName">미니 특공대</p>
        </li>
        <li>
          <p className="sub">최근 인기 프로그램</p>
          <p className="programName">미니 특공대</p>
        </li>
        <li>
          <p className="sub">최근 인기 프로그램</p>
          <p className="programName">미니 특공대</p>
        </li>
      </ul>
    </div>
  );
}
