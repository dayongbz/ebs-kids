import React, { useEffect, useRef } from 'react';

export default function Main() {
  const tagRef = useRef();

  function onClick(event) {
    if (event.target.classList.contains('selected')) {
      if (event.target.innerText === '#전체') {
        return;
      }
      event.target.classList.remove('selected');
    } else {
      if (event.target.innerText !== '#전체') {
        tagRef.current.children[0].classList.remove('selected');
      } else {
        for (let i = 1; i < tagRef.current.children.length; i++) {
          tagRef.current.children[i].classList.remove('selected');
        }
      }
      event.target.classList.add('selected');
    }
  }
  useEffect(() => {
    for (let i = 0; i < tagRef.current.children.length; i++) {
      tagRef.current.children[i].addEventListener('click', onClick);
    }
  }, []);
  return (
    <div id="mainWrap">
      <div id="bestProgramWrap">
        <h2>추천 프로그램</h2>
        <ul>
          <li>
            <div className="programImg">
              <img
                src="images/99830892-95ec-423e-8845-f2a10f6aba58.png"
                alt="출동 슈퍼윙스"
              />
            </div>
            <p className="tag">추천</p>
            <p className="programName">출동 슈퍼윙스</p>
            <p className="sub">이벤트 진행중인</p>
          </li>
          <li>
            <div className="programImg">
              <img
                src="images/99830892-95ec-423e-8845-f2a10f6aba58.png"
                alt="출동 슈퍼윙스"
              />
            </div>
            <p className="tag">추천</p>
            <p className="programName">출동 슈퍼윙스</p>
            <p className="sub">이벤트 진행중인</p>
          </li>
          <li>
            <div className="programImg">
              <img
                src="images/99830892-95ec-423e-8845-f2a10f6aba58.png"
                alt="출동 슈퍼윙스"
              />
            </div>
            <p className="tag">추천</p>
            <p className="programName">출동 슈퍼윙스</p>
            <p className="sub">이벤트 진행중인</p>
          </li>
          <li>
            <div className="programImg">
              <img
                src="images/99830892-95ec-423e-8845-f2a10f6aba58.png"
                alt="출동 슈퍼윙스"
              />
            </div>
            <p className="tag">추천</p>
            <p className="programName">출동 슈퍼윙스</p>
            <p className="sub">이벤트 진행중인</p>
          </li>
          <li>
            <div className="programImg">
              <img
                src="images/99830892-95ec-423e-8845-f2a10f6aba58.png"
                alt="출동 슈퍼윙스"
              />
            </div>
            <p className="tag">추천</p>
            <p className="programName">출동 슈퍼윙스</p>
            <p className="sub">이벤트 진행중인</p>
          </li>
        </ul>
        <div className="eventBanner" />
      </div>
      <div id="findProgramWrap">
        <h2>전체 프로그램</h2>
        <div id="tagWrap">
          <ul ref={tagRef}>
            <li className="selected">#전체</li>
            <li>#월</li>
            <li>#화</li>
            <li>#수</li>
            <li>#목</li>
            <li>#금</li>
            <li>#토</li>
            <li>#일</li>
          </ul>
        </div>
        <input id="programSearch" type="text" placeholder="프로그램명 검색" />
        <div
          id="programSearchButton"
          style={{ backgroundImage: 'url(images/search.png)' }}
        />
        <div id="programCardWrap">
          <div className="programCard">
            <div className="programImg">
              <img
                src="images/37e4548c-ed0a-4ba8-bcff-36b5e2858775.png"
                alt="최고다 호기심딱지"
              />
            </div>
            <div className="programDetails">
              <p className="programTitle">최고다 호기심딱지</p>
              <p className="programSub">호기심을 완벽하게 해결!</p>
              <p className="programTime">수 오전 8시 35분</p>
            </div>
          </div>
          <div className="programCard">
            <div className="programImg">
              <img
                src="images/37e4548c-ed0a-4ba8-bcff-36b5e2858775.png"
                alt="최고다 호기심딱지"
              />
            </div>
            <div className="programDetails">
              <p className="programTitle">최고다 호기심딱지</p>
              <p className="programSub">호기심을 완벽하게 해결!</p>
              <p className="programTime">수 오전 8시 35분</p>
            </div>
          </div>
          <div className="programCard">
            <div className="programImg">
              <img
                src="images/37e4548c-ed0a-4ba8-bcff-36b5e2858775.png"
                alt="최고다 호기심딱지"
              />
            </div>
            <div className="programDetails">
              <p className="programTitle">최고다 호기심딱지</p>
              <p className="programSub">호기심을 완벽하게 해결!</p>
              <p className="programTime">수 오전 8시 35분</p>
            </div>
          </div>
          <div className="programCard">
            <div className="programImg">
              <img
                src="images/37e4548c-ed0a-4ba8-bcff-36b5e2858775.png"
                alt="최고다 호기심딱지"
              />
            </div>
            <div className="programDetails">
              <p className="programTitle">최고다 호기심딱지</p>
              <p className="programSub">호기심을 완벽하게 해결!</p>
              <p className="programTime">수 오전 8시 35분</p>
            </div>
          </div>
          <div className="programCard">
            <div className="programImg">
              <img
                src="images/37e4548c-ed0a-4ba8-bcff-36b5e2858775.png"
                alt="최고다 호기심딱지"
              />
            </div>
            <div className="programDetails">
              <p className="programTitle">최고다 호기심딱지</p>
              <p className="programSub">호기심을 완벽하게 해결!</p>
              <p className="programTime">수 오전 8시 35분</p>
            </div>
          </div>
          <div className="programCard">
            <div className="programImg">
              <img
                src="images/37e4548c-ed0a-4ba8-bcff-36b5e2858775.png"
                alt="최고다 호기심딱지"
              />
            </div>
            <div className="programDetails">
              <p className="programTitle">최고다 호기심딱지</p>
              <p className="programSub">호기심을 완벽하게 해결!</p>
              <p className="programTime">수 오전 8시 35분</p>
            </div>
          </div>
          <div className="programCard">
            <div className="programImg">
              <img
                src="images/37e4548c-ed0a-4ba8-bcff-36b5e2858775.png"
                alt="최고다 호기심딱지"
              />
            </div>
            <div className="programDetails">
              <p className="programTitle">최고다 호기심딱지</p>
              <p className="programSub">호기심을 완벽하게 해결!</p>
              <p className="programTime">수 오전 8시 35분</p>
            </div>
          </div>
          <div className="programCard">
            <div className="programImg">
              <img
                src="images/37e4548c-ed0a-4ba8-bcff-36b5e2858775.png"
                alt="최고다 호기심딱지"
              />
            </div>
            <div className="programDetails">
              <p className="programTitle">최고다 호기심딱지</p>
              <p className="programSub">호기심을 완벽하게 해결!</p>
              <p className="programTime">수 오전 8시 35분</p>
            </div>
          </div>
        </div>
        <div id="programCardAddBtn">더보기</div>
      </div>
    </div>
  );
}
