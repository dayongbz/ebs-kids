import React, { useState, useEffect, useRef } from 'react';

export default function SlideShow() {
  const slideCountRef = useRef(0);
  const slideRef = useRef();
  const slideListRef = useRef();
  useEffect(() => {
    slideCountRef.current = 1;
    setInterval(() => {
      if (slideCountRef.current === 5) {
        slideCountRef.current = 0;
      }
      if (slideCountRef.current === 0) {
        slideListRef.current.children[4].classList.remove('running');
        slideListRef.current.children[slideCountRef.current].classList.add(
          'running',
        );
      } else {
        slideListRef.current.children[slideCountRef.current].classList.add(
          'running',
        );
        slideListRef.current.children[
          slideCountRef.current - 1
        ].classList.remove('running');
      }
      slideRef.current.style.backgroundImage = `url(images/slide${++slideCountRef.current}.jpg)`;
    }, 5500);
  }, []);
  return (
    <div id="slideShowWrap">
      <div
        id="slideShow"
        style={{
          backgroundImage: 'url(images/slide1.jpg)',
        }}
        ref={slideRef}
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
      <ul ref={slideListRef}>
        <li className="running">
          <div className="cover" />
          <p className="sub">최근 인기 프로그램</p>
          <p className="programName">최고다 호기심딱지</p>
        </li>
        <li>
          <div className="cover" />
          <p className="sub">최근 인기 프로그램</p>
          <p className="programName">출동 슈펑윙스</p>
        </li>
        <li>
          <div className="cover" />
          <p className="sub">최근 인기 프로그램</p>
          <p className="programName">생방송 판다다</p>
        </li>
        <li>
          <div className="cover" />
          <p className="sub">최근 인기 프로그램</p>
          <p className="programName">딩동댕 유치원</p>
        </li>
        <li>
          <div className="cover" />
          <p className="sub">최근 인기 프로그램</p>
          <p className="programName">뽀로로와 노래해요</p>
        </li>
      </ul>
    </div>
  );
}
