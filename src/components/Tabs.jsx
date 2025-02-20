import { useState } from 'react';

export default function Tabs({ data }) {
	const [currentTab, setCurrentTab] = useState(0);
	return (
		<>
			<div className="tabs is-centered mt-5">
				<ul>
					{data?.map((item, index) => (
						<li key={index} className={`${currentTab == index ? 'is-active' : ''}`} onClick={() => setCurrentTab(index)}>
							<a>{item.tab}</a>
						</li>
					))}
				</ul>
			</div>
			{data?.map((item, index) => (
				<div key={index} className={`tabs-content mt-6 ${currentTab == index ? 'is-active' : ''}`}>
					<div className="columns is-align-items-center">
						<div className="column">
							<div className="multimedia">
								<img src={item.image} alt="" />
							</div>
						</div>
						<div className="column">
							<article className="text-container is-centered">
								<h2>{item.title}</h2>
								<p className="mt-4">{item.content}</p>
								<a href="#" className='button is-primary mt-5'>More Info</a>
							</article>
						</div>
					</div>
				</div>
			))}
		</>
	)
}