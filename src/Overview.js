import React from 'react';

function Overview(props) {
	console.log(props.user)
	return(
		<div className='overview-wrapper'>
			<div className='user-border'>
				<div className='user-profile'>
					<i className="fas fa-user"></i>
				</div>
				<ul>
					<li className='user-profile-list'>
						<i className="fas fa-briefcase"></i>
						<p>Projects</p>
						<p className='user-value'>10</p>
					</li>
					<li className='user-profile-list'>
						<i className="fas fa-envelope"></i>
						<p>Messages</p>
						<p className='user-value'>11</p>
					</li>
					<li className='user-profile-list'>
						<i className="fas fa-user-friends"></i>
						<p>Friends</p>
						<p className='user-value'>14</p>
					</li>
					<li className='user-profile-list'>
						<i className="fas fa-cog"></i>
						<p>Settings</p>
					</li>
				</ul>
			</div>
			<div className='user-decription-wrapper'>
				<h1>{props.user.name}</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
				<div>
					<ul className='social-links'>
						<li className='user-social-list'>
							<i class="fab fa-google-plus-square"/>
							<a href='#'>@{props.user.name}</a>
						</li>
						<li className='user-social-list'>
							<i class="fab fa-twitter-square"/>
							<a href='#'>t_{props.user.name}</a>
						</li>
						<li className='user-social-list'>
							<i class="fab fa-facebook-square"/>
							<a href='#'>ted_{props.user.name}</a>
						</li>
						<li className='user-social-list'>
							<i class="fab fa-skype"/>
							<a href='#'>{props.user.name}_ted</a>
						</li>
					</ul>
				</div>
				
			</div>
			<div className='sales-summary-wrapper'>
				<div>
					<h3>Sales summary</h3>
					<ul>
						<li className='sales-summary'>
							<p>today sold</p>
							<p className='sales-value'>19</p>
						</li>
						<li className='sales-summary'>
							<p>weekly sales</p>
							<p className='sales-value'>35</p>
						</li>
						<li className='sales-summary'>
							<p>total sold</p>
							<p className='sales-value'>1989</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}


export default Overview;