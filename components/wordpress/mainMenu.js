import Link from "next/link";

export function MainMenu({ menu }) {
	return (
		<nav>
			<ul className={`${menu.slug}`}>
				{menu.menuItems.edges.map((menuItem) => {
					const { id, cssClasses, label, path, title } = menuItem.node;
					return (
						<li key={id} id={`${id}`}>
							<Link href={`${path ? path : "/"}`}>
								<a className={cssClasses.map((singleClass) => singleClass)} title={title}>
									{label}
								</a>
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
