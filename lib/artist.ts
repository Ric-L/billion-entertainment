export interface Artist {
	id: string;
	name: string;
	role: string;
	location: string;
	genres: string[];
	bio: string;
	fullBio: string;
	image: string;
	heroImage: string;
	stats?: { label: string; value: string }[];
	socials: {
		spotify?: string;
		youtube?: string;
		instagram?: string;
		facebook?: string;
	};
	topTracks?: string[];
	influences?: string[];
	services?: string[];
	embedded?: string[];
	unreleased?: string[];
	upcomingReleases?: string[];
	accentColor: string;
}

export const artists: Artist[] = [
	{
		id: 'vivek-morvadia',
		name: 'Vivek Morvadia',
		role: 'Artist • Performer • Vocalist',
		location: 'Bodaka, Gujarat, India',
		genres: ['Pop', 'Soft Rock', 'Folk'],
		bio: 'A dynamic and soulful artist with 2,000 shows and a growing discography.',
		fullBio:
			'Born in the culturally vibrant village of Bodaka in Junagadh, Gujarat, Vivek Morvadia has come a long way from his humble beginnings to become a dynamic and soulful artist, whose voice now echoes across stages, celebrations, and digital platforms.\n\nAt just 30 years old, Vivek has already crafted a musical legacy with more than 2,000 shows under his belt. Beyond covers and live performances, Vivek has also ventured into the realm of original music.\n\nIn August 2025, he released his debut single "Sirf Tu", which garnered notable success and marked his entry into the independent music scene. Building on this momentum, Vivek is set to release another heartfelt single, "Bikhre Armaan" on October 10th, which will be followed by an eagerly awaited EP featuring six tracks in February 2026.\n\nVivek\'s vocal style is deeply influenced by legends like KK, Arijit Singh, A.R. Rahman, Pritam, and Mithoon. He has collaborated with notable artists such as Kushal Chokshi, bringing diverse flavors to his performances and recordings.',
		image: '/2.png',
		heroImage: '/still2.png',
		stats: [
			{ label: 'Live Shows', value: '2,000' },
			{ label: 'Original Singles', value: '3' },
			{ label: 'Upcoming EP', value: 'February 2026' },
		],
		socials: {
			spotify: 'https://open.spotify.com/artist/6s3Rdf9GgWkDMjIpWhRkgZ',
			youtube: 'https://www.youtube.com/@BillionEntertainment',
			instagram: 'https://www.instagram.com/vivek_morvadia',
		},
		topTracks: ['Sirf Tu', 'Bikhre Armaan (Upcoming)'],
		upcomingReleases: ['Bikhre Armaan - October 10th', '6-Track EP - February 2026'],
		influences: ['KK', 'Arijit Singh', 'A.R. Rahman', 'Pritam', 'Mithoon'],
		services: ['Playback Singing', 'Live Concerts', 'Wedding Performances', 'Corporate Events', 'Studio Recording'],
		accentColor: 'orange',
		embedded: [
			'https://open.spotify.com/embed/artist/6s3Rdf9GgWkDMjIpWhRkgZ',
			'https://www.youtube.com/embed/SY5ceTJPrn4?si=FnuOlzqCqDYw_GM0',
			'https://www.youtube.com/embed/3EknGAr0Nog?si=lPDSPcDwHtWZ1M0f',
			'https://www.youtube.com/embed/nBXwwm2kCMs?si=t9CmJfz9Ta8RTLcu',
		],

		unreleased: ['/music/vivek/Bengaluru_Traffic.mp3', '/music/vivek/Mera.mp3', '/music/vivek/cofee.mp3'],
	},

	{
		id: 'aj-maisnam',
		name: 'AJ Maisnam',
		role: 'Singer • Songwriter • Composer',
		location: 'Manipur, India',
		genres: ['Pop', 'Manipuri', 'Contemporary'],
		bio: 'One of the most exciting emerging artists from Manipur with 100M+ streams.',
		fullBio:
			'AJ Maisnam is one of the most exciting emerging artists from Manipur and the North East. A singer, songwriter, and music composer, he made a powerful entry into the Manipuri music scene with his breakthrough track "Thenglaba Ahingse", a song he personally wrote and composed.\n\nWith several hit singles and duets to his name, AJ Maisnam is celebrated for his energetic stage presence and captivating live performances. His soulful singing style brings a refreshing charm that resonates with both the youth and older listeners alike.\n\nSinging has been his passion for as long as he can remember. As a child, he took part in numerous singing competitions, and each small success only deepened his love for music. He began learning Classical music from the 6th Standard, and from that moment on, he never looked back.\n\nWhen it comes to his family, his mother has supported him unwaveringly from the very beginning. His father initially hoped he would pursue engineering, but today, he fully stands by his love for music, his ambitions, and everything he aspires to achieve.',
		image: '/aj1.jpeg',
		heroImage: '/aj1.jpeg',
		stats: [
			{ label: 'Total Streams', value: '100M+' },
			{ label: 'Hit Singles', value: '10+' },
			{ label: 'Years Active', value: '5+' },
		],
		socials: {
			// spotify: "https://open.spotify.com/artist/7eoFGhcFswM9wHWZObCBXM",
			spotify: 'https://open.spotify.com/artist/3KwjlPQqW7PhF5xIHTpLKS',
			youtube: 'https://www.youtube.com/@AJMaisnam',
			instagram: 'https://www.instagram.com/ajmaisnam/',
			facebook: 'https://www.facebook.com/ajmaisnamofficial',
		},
		topTracks: [],
		influences: ['Classical Indian Music', 'Contemporary Pop', 'Manipuri Folk'],
		services: ['Live Concerts', 'Studio Recording', 'Music Composition', 'Collaborations'],
		accentColor: 'amber',
		embedded: [
			'https://open.spotify.com/embed/artist/3KwjlPQqW7PhF5xIHTpLKS?utm_source=generator&theme=0',
			'https://www.youtube.com/embed/JVm2iTl8LW0?si=jrRdAkoItVfNTp81',
			'https://www.youtube.com/embed/2pJN0PPRv0w?si=HJ_sMiKaegFrDAAg',
			'https://www.youtube.com/embed/QHij4Qhyfno?si=5IcSirvF9Td3q4t5',
			'https://www.youtube.com/embed/GjCXlPQQrIk?si=LRk1NspRjWUZaNUL',
		],
		unreleased: [
			'/music/ajmaisnam/huranhurandemoversion.wav',
			'/music/ajmaisnam/EISE_EIGIRA.wav',
			'/music/ajmaisnam/KarambaWahei.mp3',
			'/music/ajmaisnam/Newsad.mp3',
			'/music/ajmaisnam/WAYELKATTI.wav',
		],
	},
	{
		id: 'yarsin',
		name: 'Yarsin Chanu',
		role: 'Singer • Songwriter',
		location: 'Thoubal, Manipur',
		genres: ['Pop', 'Pop Rock', 'Alternative Rock'],
		bio: 'A versatile vocalist with a blend of melodic smoothness and powerful, ethereal delivery.',
		fullBio:
			"Yarsin hails from Thoubal, Manipur, a land rich in music, art and culture. It won't be exaggerating to say that she was born with a zeal to sing, given the fact that her singing performances started as young as 10 years old.\n\nGrowing up in a family of music lovers, she was exposed to an array of genres, from Hindustani classical to rock 'n' roll, shaping the artist she is today.\n\nThough she gravitates toward pop, pop rock, and alternative rock, Yarsin's versatility stands out. Her vocal style blends melodic smoothness with powerful, ethereal delivery. She draws inspiration from global icons and bands such as Adele, The 1975, Paramore, Queen, and Lady Gaga.\n\nApart from numerous covers, she also loves writing and performing her original songs. Her passion for music transcends boundaries, making her one of the most promising voices from Northeast India.",
		image: '/yarsin.PNG',
		heroImage: '/arunachal-pradesh-tribal-pattern-traditional-texti.jpg',
		stats: [
			{ label: 'Years Performing', value: '15+' },
			{ label: 'Original Songs', value: '5+' },
		],
		socials: {
			spotify: 'https://open.spotify.com/artist/3KwjlPQqW7PhF5xIHTpLKS',
			youtube: 'https://www.youtube.com/@yarsinchanu9026',
			instagram: 'https://www.instagram.com/yarsinchanu/',
		},
		influences: ['Adele', 'The 1975', 'Paramore', 'Queen', 'Lady Gaga'],
		services: ['Live Performances', 'Studio Sessions', 'Cover Songs', 'Original Music'],
		accentColor: 'rose',
		embedded: [
			'https://open.spotify.com/embed/artist/7eoFGhcFswM9wHWZObCBXM?utm_source=generator',
			'https://www.youtube.com/embed/WPL_B8O340g?si=aIzoTl6r9yJqR5Ob',
			'https://www.youtube.com/embed/k_B9puO8b2Q?si=zen8J-po56wIcXOp',
		],
		unreleased: [
			'/music/Yarsin/Yarshin3.wav',
			'/music/Yarsin/Yarshin1.wav',
			'/music/Yarsin/Yarshin2.wav',
			'/music/Yarsin/Yarshin4.wav',
			'/music/Yarsin/Yarshin5.wav',
		],
	},
	{
		id: 'mc-lean',
		name: 'MC Lean',
		role: 'Hip Hop Artist',
		location: 'Arunachal Pradesh, India',
		genres: ['Hip Hop', 'Trap', 'Hindi Rap'],
		bio: 'A core community member of the Arunachal hip hop scene with a melodic, wavy style.',
		fullBio:
			'MC LEAN is a hip hop artist from Arunachal Pradesh and a core community member of the Arunachal hip hop scene. He began his musical journey in 2020, spending the years from 2020 to 2023 exploring various styles, experimenting with flows, and shaping his artistic vision.\n\nThese formative years helped him understand the sound he truly wanted to pursue. By 2024, MC LEAN discovered his signature style—melodic, wavy, and modern, rooted in new-school hip hop.\n\nHis music blends contemporary trap elements with smooth delivery and emotionally driven melodies, while also incorporating Hindi rap, giving his sound a distinct identity.\n\nInfluenced by global artists such as Gunna, Playboi Carti, Lil Baby, Drake, and Tory Lanez, he draws inspiration from their melodic approach while infusing his own cultural perspective.',
		image: '/mclean.JPG',
		heroImage: '/mclean.JPG',
		stats: [
			{ label: 'Years Active', value: '4+' },
			{ label: 'Style', value: 'New School' },
		],
		socials: {
			spotify: 'https://open.spotify.com/artist/6nySCJ1ZsWj9bq5b5l6J1E',
			youtube: 'https://www.youtube.com/channel/UCMd2vXZEr8TO6feJcMmj-8A',
			instagram: 'https://www.instagram.com/_mc_lean_/',
		},
		influences: ['Gunna', 'Playboi Carti', 'Lil Baby', 'Drake', 'Tory Lanez'],
		services: ['Live Shows', 'Studio Recording', 'Collaborations', 'Features'],
		accentColor: 'cyan',
		embedded: [
			'https://www.youtube.com/embed/fxey8AbEqUY?si=o1eDNtoS2qSyfkSR',
			'https://www.youtube.com/embed/QLSJO1gnArg?si=2hSa7RjsWL4lU6Vc',
			'https://www.youtube.com/embed/gNwuTOjrD0o?si=W3XPR1FWRPLaxlFA',
		],
		unreleased: ['/music/MClean/lean3.wav', '/music/MClean/lean2.wav', '/music/MClean/lean1.wav', '/music/MClean/lean4.wav', '/music/MClean/lean5.mp3'],
	},
	{
		id: 'tuhin-handique',
		name: 'Tuhin Handique',
		role: 'Singer • Songwriter • Guitarist',
		location: 'Assam, India',
		genres: ['Indie Pop', 'Acoustic', 'Multi-lingual'],
		bio: 'A multi-lingual artist with music deeply rooted in storytelling and raw emotion.',
		fullBio:
			'Tuhin Handique is a singer-songwriter, guitarist, and composer from Assam, India. His music is deeply rooted in storytelling, often driven by his guitar and personal, heartfelt emotions.\n\nThis multi-lingual artist has released a number of widely appreciated and well-received songs. Some of Tuhin Handique\'s notable tracks include "Mone Ki Bisare" (with EREKA & illip), released in 2024, which highlights his emotional depth and maturity, along with "Astronaut," a strong SoundCloud single.\n\nHis recent releases, "Bekaboo" and "Dil Ke Kone Mein" (2025), further showcase his evolving pop-infused sound. With his evocative lyrics, strong guitar work, and a sound that blends indie-pop with raw emotion, Tuhin continues to carve out his place in the Indian music scene.',
		image: '/tuhun1.jpg',
		heroImage: '/IMG_20241213_041352_527.webp',
		stats: [
			{ label: 'Languages', value: 'Multi' },
			{ label: 'Releases', value: '10+' },
		],
		socials: {
			spotify: 'https://open.spotify.com/artist/2BHbXBqMUM2qnA28nhieiI',
			youtube: 'https://www.youtube.com/@tuhinhandique778',
			instagram: 'https://www.instagram.com/tuhin_handique/',
			facebook: 'https://www.facebook.com/tuhin.handique',
		},
		topTracks: [],
		influences: ['Indie Artists', 'Acoustic Folk', 'Contemporary Pop'],
		services: ['Live Concerts', 'Studio Recording', 'Songwriting', 'Guitar Sessions'],
		accentColor: 'emerald',
		embedded: [
			'https://open.spotify.com/embed/artist/6nySCJ1ZsWj9bq5b5l6J1E?utm_source=generator',
			'https://www.youtube.com/embed/t0pqbtUoZ4M?si=L5b51XD_THuK9Uzi',
			'https://www.youtube.com/embed/NIptg_rWorA?si=NDbR1k4GCOw6si6q',
			'https://www.youtube.com/embed/Nn0vYGrnzBQ?si=9KZmJegh4EC3phij',
		],
		unreleased: ['/music/tuhin/pehli.wav', '/music/tuhin/beqaboo.wav', '/music/tuhin/jatra.wav', '/music/tuhin/Khwaboon.wav'],
	},
];

export function getArtistById(id: string): Artist | undefined {
	return artists.find((artist) => artist.id === id);
}

export function getAllArtistIds(): string[] {
	return artists.map((artist) => artist.id);
}

// ADD THIS FUNCTION
export function getAllArtists(): Artist[] {
	return artists;
}
