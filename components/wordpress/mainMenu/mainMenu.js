import Link from "next/link";
import { getThemeSetting } from "../../../lib/getThemeSetting";
import { useRouter } from "next/router";
import { ContainerFull } from "../../structure/ContainerFull";

export function MainMenu({ mainMenu, themeSettings }) {
	let { countryFlags, phone, email, facebook, instagram, linkedIn, twiiter } = getThemeSetting(
		themeSettings,
		"ThemeSettings_Top_Bar"
	);
	const router = useRouter();

	function handleLangChange(slug) {
		router.replace(`${router.asPath}`, `${router.asPath}`, { locale: slug });
	}

	const contacts = [JSON.parse(phone), JSON.parse(email)];
	countryFlags = JSON.parse(countryFlags);
	const socials = [JSON.parse(facebook), JSON.parse(instagram), JSON.parse(linkedIn), JSON.parse(twiiter)];

	return (
		<>
			<header>
				<ContainerFull customClasses="px-16 flex border-b-2 border-black">
					<div className="flex">
						<ul className="flex">
							{contacts.map((single, index) => {
								const { link, image, alt, text } = single;
								return (
									<li key={index} className="flex items-center">
										<a href={link} className="flex flex-nowrap first-of-type:mr-6">
											<img className="w-4 mr-2" src={image} alt={alt} />
											<p>{text}</p>
										</a>
									</li>
								);
							})}
						</ul>
					</div>
					<div className="grow flex justify-end items-center">
						<ul className="flex">
							{countryFlags.map((single) => {
								let flag = new Map(single);
								return (
									<li onClick={() => handleLangChange(flag.get("slug"))} className="mr-4 last:mr-10">
										{<img src={flag.get("flag")} className="cursor-pointer" />}
									</li>
								);
							})}
						</ul>
					</div>
					<div className="flex items-stretch">
						<ul className="flex">
							{socials.map((single) => {
								const { iconImage, alt, iconLink } = single;
								return (
									<li className="flex items-center mr-1.5 pr-1.5 first:border-l first:pl-1.5 border-r border-black py-3 opacity-70">
										<a href={iconLink} target="_blank">
											<img className="w-4" src={iconImage} alt={alt} />
										</a>
									</li>
								);
							})}
						</ul>
					</div>
				</ContainerFull>
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
			</nav>
		</>
	);
}
