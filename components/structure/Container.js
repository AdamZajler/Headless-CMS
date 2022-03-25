export function Container({ children }) {
	return (
		<div
			className="bg-primary mx-auto 
                        xl:max-w-screen-xl
                        lg:max-w-screen-lg
                        md:max-w-screen-md
                        sm:max-w-screen-sm
                        "
		>
			{children}
		</div>
	);
}
