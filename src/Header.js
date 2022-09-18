import React from 'react';
import "./style/layout/header.scss";

function Header(props) {
    return (
		<>
			<header className="header">
				{/* 로고 영역 */}
				<div>
					<div className="logo"></div>
				</div>

				{/* 메뉴 영역 */}
				<ul>
					<li>Home</li>
					<li>강의 구매</li>
					<li>고객센터</li>
				</ul>
				
				{/* 로그인 정보 영역 */}
				<div>
					<button className="login-button">로그인</button>
				</div>
			</header>
		</>
    );
}

export default Header;
