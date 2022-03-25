import Link from "next/link";
import { useRouter } from "next/router";
import { ContainerFull } from "../structure/ContainerFull";

export function MainMenu({ mainMenu }) {
	const router = useRouter();
	return (
		<>
			<header>
				<ContainerFull customClasses="px-16">TEST</ContainerFull>
			</header>
			<nav>
				<ul className={`${mainMenu.slug}`}>
					{mainMenu.menuItems.nodes.map((menuItem) => {
						const { id, cssClasses, label, path, title } = menuItem;
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
						// router.push(router.asPath, router.asPath, { locale: "pl" });
					}}
				>
					na pl!
				</button>
				<button
					onClick={() => {
						router.replace(`${router.asPath}`, `${router.asPath}`, { locale: "en" });
						// router.push(router.asPath, router.asPath, { locale: "en" });
					}}
				>
					na en!
				</button>
			</nav>
		</>
	);
}
