const Icon = ({ name, classname }) => {
	return (
		name == "chevronDown" && (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className={classname}
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fillRule="evenodd"
					d="M10.707 13.707a1 1 0 01-1.414 0L5.586 9.414a1 1 0 011.414-1.414L10 11.586l3.293-3.293a1 1 0 011.414 1.414l-5 5z"
					clipRule="evenodd"
				/>
			</svg>
		)
	);
};

export default Icon;
