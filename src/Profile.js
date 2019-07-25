import React, {Component} from 'react';
import Nav from './Nav';
import { connect } from 'react-redux';
import Overview from './Overview';

class	Profile extends Component {
	state ={
		tags: [{tagName: 'Overview', isClicked: true}, {tagName: 'Account', isClicked: false}, {tagName: 'Project', isClicked: false}],
		tag: 'Overview',
	}

	handleClick = (e) => {
		var newTags = this.state.tags.map(tag => {
			if(e.target.id === tag.tagName) {
				return {...tag, isClicked: true }
			} else {
				return {...tag, isClicked: false}
			}
		})

		this.setState({tags: newTags, tag: e.target.id});
	}

	render() {
		console.log(this.state.tags);
		return(
			<section>
				<Nav/>
				<div className='profile-wrapper'>
					<ul className='tags-wrapper'>
						{
							this.state.tags.map((tag, index) => {
								return (
									<li   key={index}>
										<h1 onClick={this.handleClick} className={tag.isClicked ? 'activeTag' : 'tag-default'} id={tag.tagName}>
											{tag.tagName}
										</h1>
									</li>
								)
							})
						}
					</ul>
					{
						this.state.tag && this.state.tag === 'Overview' ?
						(
							<Overview user={this.props.user} />
						)
						:
						this.state.tag === 'Account' ? 
						(
							<div className='profile-wrapper'>
								<h1>Display relevent Account Information</h1>
							</div>
						)
						:
						''
					}
					{
						this.state.tag === 'Project' ?
						(
							<div>Display relevent Project Information</div>
						) :
						''
					}
					
				</div>
			</section>
		)
	}
}


function mapStateToProps(state) {
	return {
		user: state.user,
	}
}

export default connect(mapStateToProps)(Profile);



