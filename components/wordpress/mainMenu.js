import Link from "next/link";
import { useRouter } from "next/router";

export function MainMenu({ menu }) {
	const router = useRouter();
	console.log("router", router);
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
			<button
				onClick={() => {
					router.replace(`${router.asPath}`, `${router.asPath}`, { locale: "pl" });
				}}
			>
				na pl!
			</button>
			<button
				onClick={() => {
					router.replace(`${router.asPath}`, `${router.asPath}`, { locale: "en" });
				}}
			>
				na en!
			</button>
		</nav>
	);
}
