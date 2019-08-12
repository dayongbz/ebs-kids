import React, { useState, useEffect, useRef } from 'react';

export default function Main() {
  const tagRef = useRef();
  const searchRef = useRef();
  const [jsonData, setJsonData] = useState();
  const [cardList, setCardList] = useState();

  useEffect(() => {
    function onClick(event) {
      if (event.target.classList.contains('selected')) {
        if (event.target.innerText === '#전체') {
          return;
        }
        event.target.classList.remove('selected');
      } else {
        for (let i = 0; i < tagRef.current.children.length; i += 1) {
          if (
            i !== [...event.target.parentNode.children].indexOf(event.target)
          ) {
            tagRef.current.children[i].classList.remove('selected');
          }
        }
      }
      event.target.classList.add('selected');
    }

    for (let i = 0; i < tagRef.current.children.length; i += 1) {
      tagRef.current.children[i].addEventListener('click', onClick);
    }
    fetch('programs.json')
      .then(data => {
        return data.json();
      })
      .then(json => {
        setJsonData(json);
        setCardList(
          json.map(item => {
            return (
              <div className="programCard" key={json.indexOf(item)}>
                <div className="programImg">
                  <img
                    src={`images/${item.english}_medium.jpg`}
                    alt={item.name}
                  />
                </div>
                <div className="programDetails">
                  <p className="programTitle">{item.name}</p>
                  <p className="programSub">{item.details}</p>
                  <p className="programTime">{item.date[1]}</p>
                </div>
              </div>
            );
          }),
        );
      });
    return () => {
      for (let i = 0; i < tagRef.current.children.length; i += 1) {
        tagRef.current.children[i].removeEventListener('click', onClick);
      }
    };
  }, []);

  useEffect(() => {
    function clickTag(event) {
      switch (event.target.innerText) {
        case '#전체':
          setCardList(
            jsonData.map(item => {
              return (
                <div className="programCard" key={jsonData.indexOf(item)}>
                  <div className="programImg">
                    <img
                      src={`images/${item.english}_medium.jpg`}
                      alt={item.name}
                    />
                  </div>
                  <div className="programDetails">
                    <p className="programTitle">{item.name}</p>
                    <p className="programSub">{item.details}</p>
                    <p className="programTime">{item.date[1]}</p>
                  </div>
                </div>
              );
            }),
          );
          break;
        default:
          setCardList(
            jsonData
              .filter(
                item =>
                  item.date[0].indexOf(event.target.innerText.slice(1)) !== -1,
              )
              .map(item => {
                return (
                  <div className="programCard" key={jsonData.indexOf(item)}>
                    <div className="programImg">
                      <img
                        src={`images/${item.english}_medium.jpg`}
                        alt={item.name}
                      />
                    </div>
                    <div className="programDetails">
                      <p className="programTitle">{item.name}</p>
                      <p className="programSub">{item.details}</p>
                      <p className="programTime">{item.date[1]}</p>
                    </div>
                  </div>
                );
              }),
          );
          break;
      }
    }
    function search(event) {
      if (event.target.value !== '') {
        const reg = new RegExp(`${event.target.value}`);
        tagRef.current.children[0].classList.add('selected');
        for (let i = 1; i < tagRef.current.children.length; i += 1) {
          tagRef.current.children[i].classList.remove('selected');
        }
        setCardList(
          jsonData
            .filter(item => reg.test(item.name))
            .map(item => {
              return (
                <div className="programCard" key={jsonData.indexOf(item)}>
                  <div className="programImg">
                    <img
                      src={`images/${item.english}_medium.jpg`}
                      alt={item.name}
                    />
                  </div>
                  <div className="programDetails">
                    <p className="programTitle">{item.name}</p>
                    <p className="programSub">{item.details}</p>
                    <p className="programTime">{item.date[1]}</p>
                  </div>
                </div>
              );
            }),
        );
      } else {
        setCardList(
          jsonData.map(item => {
            return (
              <div className="programCard" key={jsonData.indexOf(item)}>
                <div className="programImg">
                  <img
                    src={`images/${item.english}_medium.jpg`}
                    alt={item.name}
                  />
                </div>
                <div className="programDetails">
                  <p className="programTitle">{item.name}</p>
                  <p className="programSub">{item.details}</p>
                  <p className="programTime">{item.date[1]}</p>
                </div>
              </div>
            );
          }),
        );
      }
    }
    for (let i = 0; i < tagRef.current.children.length; i += 1) {
      tagRef.current.children[i].addEventListener('click', clickTag);
    }
    searchRef.current.addEventListener('change', search);
    if (cardList == 0) {
      // cardList가 비어있다면
      setCardList(<p className="noCard">아쉽지만 해당하는 방송이 없습니다.</p>);
    }
    return () => {
      for (let i = 0; i < tagRef.current.children.length; i += 1) {
        tagRef.current.children[i].removeEventListener('click', clickTag);
      }

      searchRef.current.removeEventListener('change', search);
    };
  }, [cardList, jsonData]);

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
        <div
          className="eventBanner"
          style={{ backgroundImage: 'url(images/banner1.jpg)' }}
        />
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
        <input
          ref={searchRef}
          id="programSearch"
          type="text"
          placeholder="프로그램명 검색"
        />
        <div
          id="programSearchButton"
          style={{ backgroundImage: 'url(images/search.png)' }}
        />
        <div id="programCardWrap">{cardList}</div>
        <div id="programCardAddBtn">더보기</div>
      </div>
    </div>
  );
}
