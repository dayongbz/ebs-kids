import React, { useState, useEffect, useRef } from 'react';

export default function SlideShow() {
  const [slideCount, setSlideCount] = useState(0);
  const [slideState, setSlideState] = useState(true);
  const slideIntRef = useRef();
  const slideRef = useRef();
  const slideWrapRef = useRef();
  const slideListRef = useRef();
  const preloadRef = useRef();

  function mouseEnter() {
    setSlideState(false);
    slideListRef.current.children[slideCount - 1].classList.remove('running');
  }

  function mouseLeave() {
    setSlideState(true);
    slideListRef.current.children[slideCount - 1].classList.add('running');
  }

  function mouseClick(event) {
    setSlideCount(+event.currentTarget.dataset.number);
    slideRef.current.style.backgroundImage = `url(images/slide${+event
      .currentTarget.dataset.number}.jpg)`;
  }

  useEffect(() => {
    slideWrapRef.current.addEventListener('mouseenter', mouseEnter);
    slideWrapRef.current.addEventListener('mouseleave', mouseLeave);
    for (let i = 0; i < slideListRef.current.children.length; i++) {
      slideListRef.current.children[i].addEventListener('click', mouseClick);
    }
    if (slideState) {
      slideIntRef.current = setInterval(() => {
        if (slideCount === slideListRef.current.children.length) {
          setSlideCount(1);
          slideListRef.current.children[
            slideListRef.current.children.length - 1
          ].classList.remove('running');
          slideListRef.current.children[0].classList.add('running');
          slideRef.current.style.backgroundImage = `url(images/slide1.jpg)`;
        } else {
          if (slideCount === 0) {
            slideListRef.current.children[
              slideListRef.current.children.length - 1
            ].classList.remove('running');
            slideListRef.current.children[slideCount].classList.add('running');
          } else {
            slideListRef.current.children[slideCount].classList.add('running');
            slideListRef.current.children[slideCount - 1].classList.remove(
              'running',
            );
          }
          slideRef.current.style.backgroundImage = `url(images/slide${slideCount +
            1}.jpg)`;
          setSlideCount(slideCount + 1);
        }
      }, 5500);
    }

    return () => {
      clearInterval(slideIntRef.current);
      slideWrapRef.current.removeEventListener('mouseenter', mouseEnter);
      slideWrapRef.current.removeEventListener('mouseleave', mouseLeave);
      for (let i = 0; i < slideListRef.current.children.length; i++) {
        slideListRef.current.children[i].removeEventListener(
          'click',
          mouseClick,
        );
      }
    };
  }, [slideState, slideCount]);

  useEffect(() => {
    for (let i = 0; i < slideListRef.current.children.length; i++) {
      preloadRef.current.style.backgroundImage += `,url(images/slide${i +
        1}.jpg)`;
    }
    slideListRef.current.children[slideCount].classList.add('running');
    setSlideCount(1);
  }, []);

  return (
    <div id="slideShowWrap" ref={slideWrapRef}>
      <div
        id="preloadImage"
        ref={preloadRef}
        style={{
          backgroundImage: 'url()',
        }}
      />
      <a href="/">
        <div
          id="slideShow"
          style={{
            backgroundImage: 'url(images/slide1.jpg)',
          }}
          ref={slideRef}
        />
      </a>
      <div
        style={{
          width: '100%',
          height: '140px',
          backgroundImage: 'url(images/gradient.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'absolute',
          bottom: '0',
        }}
      />
      <ul ref={slideListRef}>
        <li data-number="1">
          <div className="cover" />
          <p className="sub">최근 인기 프로그램</p>
          <p className="programName">최고다 호기심딱지</p>
        </li>
        <li data-number="2">
          <div className="cover" />
          <p className="sub">최근 인기 프로그램</p>
          <p className="programName">출동 슈퍼윙스</p>
        </li>
        <li data-number="3">
          <div className="cover" />
          <p className="sub">최근 인기 프로그램</p>
          <p className="programName">생방송 판다다</p>
        </li>
        <li data-number="4">
          <div className="cover" />
          <p className="sub">최근 인기 프로그램</p>
          <p className="programName">딩동댕 유치원</p>
        </li>
        <li data-number="5">
          <div className="cover" />
          <p className="sub">최근 인기 프로그램</p>
          <p className="programName">뽀로로와 노래해요</p>
        </li>
      </ul>
    </div>
  );
}
