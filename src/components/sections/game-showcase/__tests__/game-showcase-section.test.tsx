import { fireEvent, render, screen } from "@/utils/test-utils";
import GameShowcaseSection from "../index";

describe("GameShowcaseSection Component", () => {
	const demoLinks = {
		sabaSports: "/demo/saba-sports",
		sabaPlay: "/demo/saba-play",
	};

	const games = [
		{
			image: "/images/game-1.png",
			title: "Space Adventure",
			description: "Explore the galaxy and conquer planets.",
			alt: "Space Adventure cover",
		},
		{
			image: "/images/game-2.png",
			title: "Jungle Run",
			description: "Run through the jungle and avoid traps.",
			alt: "Jungle Run cover",
		},
	];

	it("renders title and subtitle", () => {
		render(
			<GameShowcaseSection title="Game Showcase" subtitle="Try our latest games" games={games} demoLinks={demoLinks} />
		);

		expect(screen.getByText("Game Showcase")).toBeInTheDocument();
		expect(screen.getByText("Try our latest games")).toBeInTheDocument();
	});

	it("renders all game cards with titles and descriptions", () => {
		render(
			<GameShowcaseSection title="Game Showcase" subtitle="Subtitle" games={games} demoLinks={demoLinks} />
		);

		for (const game of games) {
			expect(screen.getByText(game.title)).toBeInTheDocument();
			expect(screen.getByText(game.description)).toBeInTheDocument();
		}
	});

	it("renders demo links with correct hrefs", () => {
		render(
			<GameShowcaseSection title="Title" subtitle="Subtitle" games={games} demoLinks={demoLinks} />
		);

		const sportsLink = screen.getByRole("link", { name: /saba sports demo/i });
		const playLink = screen.getByRole("link", { name: /sabaplay demo/i });

		expect(sportsLink).toHaveAttribute("href", demoLinks.sabaSports);
		expect(playLink).toHaveAttribute("href", demoLinks.sabaPlay);
	});

	it("falls back to placeholder image on error", () => {
		render(
			<GameShowcaseSection title="Title" subtitle="Subtitle" games={games} demoLinks={demoLinks} />
		);

		const img = screen.getByAltText(games[0].alt) as HTMLImageElement;
		fireEvent.error(img);

		expect(img.src).toBe("https://placehold.co/600x800/1d232a/ffffff?text=Image+Not+Found");
	});
});


