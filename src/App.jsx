import React from 'react';
import './reset.css';
import './App.css';

function App() {
  return (
    <>
      <header>
        <div id="menuButton">
          <a href="/">
            <span style={{ backgroundImage: 'url(images/set_gnb.png)' }} />
            <span>메뉴</span>
          </a>
        </div>
        <a href="/">
          <img
            src="data:image/png;base64,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"
            alt="로고"
            width="90px"
          />
        </a>
        <ul id="registerLogin">
          <li>
            <a href="/">회원가입</a>
          </li>
          <li>
            <a href="/">로그인</a>
          </li>
        </ul>
      </header>
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
      <div id="mainWrap">
        <div id="bestProgramWrap">
          <h2>추천 프로그램</h2>
          <ul>
            <li>
              <div
                className="programImg"
                style={{
                  backgroundImage:
                    'url(images/99830892-95ec-423e-8845-f2a10f6aba58.png)',
                }}
              />
              <p className="tag">추천</p>
              <p className="programName">출동 슈퍼윙스</p>
              <p className="sub">이벤트 진행중인</p>
            </li>
            <li>
              <div
                className="programImg"
                style={{
                  backgroundImage:
                    'url(images/99830892-95ec-423e-8845-f2a10f6aba58.png)',
                }}
              />
              <p className="tag">추천</p>
              <p className="programName">출동 슈퍼윙스</p>
              <p className="sub">이벤트 진행중인</p>
            </li>
            <li>
              <div
                className="programImg"
                style={{
                  backgroundImage:
                    'url(images/99830892-95ec-423e-8845-f2a10f6aba58.png)',
                }}
              />
              <p className="tag">추천</p>
              <p className="programName">출동 슈퍼윙스</p>
              <p className="sub">이벤트 진행중인</p>
            </li>
            <li>
              <div
                className="programImg"
                style={{
                  backgroundImage:
                    'url(images/99830892-95ec-423e-8845-f2a10f6aba58.png)',
                }}
              />
              <p className="tag">추천</p>
              <p className="programName">출동 슈퍼윙스</p>
              <p className="sub">이벤트 진행중인</p>
            </li>
            <li>
              <div
                className="programImg"
                style={{
                  backgroundImage:
                    'url(images/99830892-95ec-423e-8845-f2a10f6aba58.png)',
                }}
              />
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
            <ul>
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
              <div
                className="programImg"
                style={{
                  backgroundImage:
                    'url(images/37e4548c-ed0a-4ba8-bcff-36b5e2858775.png)',
                }}
              />
              <div className="programDetails">
                <p className="programTitle">최고다 호기심딱지</p>
                <p className="programSub">호기심을 완벽하게 해결!</p>
                <p className="programTime">수 오전 8시 35분</p>
              </div>
            </div>
            <div className="programCard">
              <div
                className="programImg"
                style={{
                  backgroundImage:
                    'url(images/37e4548c-ed0a-4ba8-bcff-36b5e2858775.png)',
                }}
              />
              <div className="programDetails">
                <p className="programTitle">최고다 호기심딱지</p>
                <p className="programSub">호기심을 완벽하게 해결!</p>
                <p className="programTime">수 오전 8시 35분</p>
              </div>
            </div>
            <div className="programCard">
              <div
                className="programImg"
                style={{
                  backgroundImage:
                    'url(images/37e4548c-ed0a-4ba8-bcff-36b5e2858775.png)',
                }}
              />
              <div className="programDetails">
                <p className="programTitle">최고다 호기심딱지</p>
                <p className="programSub">호기심을 완벽하게 해결!</p>
                <p className="programTime">수 오전 8시 35분</p>
              </div>
            </div>
            <div className="programCard">
              <div
                className="programImg"
                style={{
                  backgroundImage:
                    'url(images/37e4548c-ed0a-4ba8-bcff-36b5e2858775.png)',
                }}
              />
              <div className="programDetails">
                <p className="programTitle">최고다 호기심딱지</p>
                <p className="programSub">호기심을 완벽하게 해결!</p>
                <p className="programTime">수 오전 8시 35분</p>
              </div>
            </div>
            <div className="programCard">
              <div
                className="programImg"
                style={{
                  backgroundImage:
                    'url(images/37e4548c-ed0a-4ba8-bcff-36b5e2858775.png)',
                }}
              />
              <div className="programDetails">
                <p className="programTitle">최고다 호기심딱지</p>
                <p className="programSub">호기심을 완벽하게 해결!</p>
                <p className="programTime">수 오전 8시 35분</p>
              </div>
            </div>
            <div className="programCard">
              <div
                className="programImg"
                style={{
                  backgroundImage:
                    'url(images/37e4548c-ed0a-4ba8-bcff-36b5e2858775.png)',
                }}
              />
              <div className="programDetails">
                <p className="programTitle">최고다 호기심딱지</p>
                <p className="programSub">호기심을 완벽하게 해결!</p>
                <p className="programTime">수 오전 8시 35분</p>
              </div>
            </div>
            <div className="programCard">
              <div
                className="programImg"
                style={{
                  backgroundImage:
                    'url(images/37e4548c-ed0a-4ba8-bcff-36b5e2858775.png)',
                }}
              />
              <div className="programDetails">
                <p className="programTitle">최고다 호기심딱지</p>
                <p className="programSub">호기심을 완벽하게 해결!</p>
                <p className="programTime">수 오전 8시 35분</p>
              </div>
            </div>
            <div className="programCard">
              <div
                className="programImg"
                style={{
                  backgroundImage:
                    'url(images/37e4548c-ed0a-4ba8-bcff-36b5e2858775.png)',
                }}
              />
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
      <footer
        style={{
          minWidth: '1280px',
          height: '270px',
          backgroundColor: '#333',
          marginTop: '100px',
        }}
      />
    </>
  );
}

export default App;