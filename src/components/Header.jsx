import React, { useEffect, useRef } from 'react';

export default function Header() {
  const menuRef = useRef();
  const menuBtnRef = useRef();
  useEffect(() => {
    function dimmedClick() {
      menuRef.current.style.opacity = 0;
      menuRef.current.children[0].style.transform = 'translateX(-100%)';
      setTimeout(() => {
        menuRef.current.style.display = 'none';
      }, 500);
    }
    function visibleClick() {
      menuRef.current.style.display = 'block';
      setTimeout(() => {
        menuRef.current.children[0].style.transform = 'translateX(0)';
        menuRef.current.style.opacity = 1;
      });
    }
    menuBtnRef.current.addEventListener('click', visibleClick);
    menuRef.current.addEventListener('click', dimmedClick);
  }, []);
  return (
    <>
      <header>
        <div ref={menuBtnRef} id="menuButton">
          <span style={{ backgroundImage: 'url(images/set_gnb.png)' }} />
          <span>메뉴</span>
        </div>
        <a href="/">
          <img src="images/package.png" alt="로고" width="90px" />
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
      <div ref={menuRef} id="dimmedLayer">
        <div id="menuLayer">
          <div id="menuFooter" />
        </div>
      </div>
    </>
  );
}
