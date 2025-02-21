import { RiArrowDownSLine } from "react-icons/ri";

export default function Accordion({ title, content, isActive, onClick }) {
	return (
		<div className="accordion">
			<button className="is-flex is-justify-content-space-between is-align-items-center" onClick={onClick}>
				<p>{title}</p>
				<span className={`icon icon is-large ${isActive ? 'is-active' : ''}`}>
					<RiArrowDownSLine />
				</span>
			</button>
			{isActive && <div className="pb-5">{content}</div>}
		</div>

	)
}