import { ChevronDown, ChevronUp, Instagram, Play, Mail, Phone, MapPin, Youtube } from "lucide-react";
import Image from "next/image";

export default function VivekMorvadiaEPK() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image src="/1.png" alt="Vivek Morvadia" fill priority className="object-contain ml-[100px]" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80"></div>
          <div className="absolute inset-0 bg-black/25"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-8 left-8 z-10">
          <ChevronDown className="w-6 h-6 text-white/60" />
          <div className="w-px h-24 bg-white/20 mx-auto mt-2"></div>
        </div>
        <div className="absolute top-8 right-8 z-10">
          <ChevronDown className="w-6 h-6 text-white/60" />
          <div className="w-px h-24 bg-white/20 mx-auto mt-2"></div>
        </div>
        <div className="absolute bottom-8 left-8 z-10">
          <div className="w-px h-24 bg-white/20 mx-auto mb-2"></div>
          <ChevronUp className="w-6 h-6 text-white/60" />
        </div>
        <div className="absolute bottom-8 right-8 z-10">
          <div className="w-px h-24 bg-white/20 mx-auto mb-2"></div>
          <ChevronUp className="w-6 h-6 text-white/60" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-6xl md:text-8xl font-bold tracking-wider mb-4 text-white drop-shadow-2xl">VIVEK MORVADIA</h1>
          <div className="flex items-center justify-center space-x-8 text-lg tracking-wider">
            <span className="text-white/80 font-medium">ARTIST • PERFORMER • VOCALIST</span>
          </div>
          <div className="mt-8 text-white/60 text-sm tracking-widest">1000+ SHOWS • ORIGINAL MUSIC • COLLABORATIONS</div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 from-0% via-slate-700 via-50% to-slate-800 p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-wider">BIOGRAPHY</h2>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-white/90 max-w-lg">
                Born in the culturally vibrant village of Bodaka in Junagadh, Gujarat, Vivek Morvadia has come a long way from his humble beginnings to become a dynamic and soulful artist, whose voice
                now echoes across stages, celebrations, and digital platforms. At just 30 years old, Vivek has already crafted a musical legacy with more than 1,000 shows under his belt.
              </p>
              <p className="text-base leading-relaxed text-white/90 max-w-lg">
                Beyond covers and live performances, Vivek has also ventured into the realm of original music. His portfolio includes two original Gujarati songs, both of which reflect his deep
                cultural roots, showcasing his commitment to contributing to regional music while pushing artistic boundaries.
              </p>
              <p className="text-base leading-relaxed text-white/90 max-w-lg">
                Vivek's vocal style is deeply influenced by legends like KK, Arijit Singh, A.R. Rahman, Pritam, and Mithoon. He has collaborated with notable artists such as Kushal Chokshi, bringing
                diverse flavors to his performances and recordings.
              </p>
            </div>

            {/* Artist Details */}
            <div className="space-y-6 pt-8 border-t border-white/20">
              <h3 className="text-xl font-semibold tracking-wider text-white/90">ARTIST DETAILS</h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-white/70">
                <div>
                  <p className="font-medium text-white/90">LOCATION</p>
                  <p>Bodaka, Gujarat, India</p>
                </div>
                <div>
                  <p className="font-medium text-white/90">GENRES</p>
                  <p>Gujarati, Bollywood, Folk</p>
                </div>
                <div>
                  <p className="font-medium text-white/90">SERVICES</p>
                  <p>Playback, Live Concerts, Weddings</p>
                </div>
                <div>
                  <p className="font-medium text-white/90">EXPERIENCE</p>
                  <p>1000+ Shows</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="w-full max-w-md mx-auto h-[500px] rounded-lg overflow-hidden relative shadow-2xl">
              <Image src="/1.png" alt="Vivek Morvadia Portrait" width={448} height={96} className="object-contain object-center" />
            </div>

            {/* Labels and Social */}
            <div className="space-y-8">
              <div className="flex items-center justify-center space-x-6">
                <div className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer">
                  <Instagram className="w-6 h-6" />
                </div>

                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer">
                  {/* <span className="text-white text-xs font-bold">YT</span> */}
                  <Youtube className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Side Text */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 rotate-90 text-xs tracking-widest text-white/40">VIVEK MORVADIA</div>
      </section>

      {/* Media Section */}
      <section className="min-h-screen bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#0f172a] to-[#334155] p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="w-full max-w-md mx-auto h-96 rounded-lg overflow-hidden relative shadow-2xl">
              <Image src="/12.png" alt="Vivek Morvadia Studio" fill className="object-cover" />
            </div>
            <div className="space-y-4 text-center lg:text-left">
              <h3 className="text-3xl font-bold tracking-wider">MEDIA</h3>
              <p className="text-lg text-white/80">PRODUCER • ARTIST • PERFORMER</p>
            </div>
          </div>

          {/* Right Content - Media Grid */}
          <div className="space-y-8">
            {/* Spotify */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">♪</span>
                </div>
                <span className="text-2xl font-bold">Spotify</span>
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  data-testid="embed-iframe"
                  src="https://open.spotify.com/embed/track/68nhuep4SL6oopPcOkXcQS?utm_source=generator&theme=0"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* YouTube */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">YouTube</span>
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  width="100%"
                  height="352"
                  src="https://www.youtube.com/embed/SY5ceTJPrn4?si=pOFPPrSjjnujMiFf"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Side Text */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 -rotate-90 text-xs tracking-widest text-white/40">MUSIC</div>
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 rotate-90 text-xs tracking-widest text-white/40">VIDEO</div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gradient-to-t from-black via-slate-900 to-slate-800 border-t border-white/10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">VM</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-wider">VIVEK MORVADIA</h3>
                  <p className="text-white/60">Artist • Vocalist • Performer</p>
                </div>
              </div>
              <p className="text-white/80 max-w-md leading-relaxed">
                From the cultural heart of Gujarat to stages across India, bringing soulful music and unforgettable performances to every audience.
              </p>
              <div className="flex space-x-4">
                <div className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="p-3 bg-orange-500/20 rounded-full hover:bg-orange-500/30 transition-colors cursor-pointer">
                  <span className="text-orange-400 text-sm font-bold">SC</span>
                </div>
                <div className="p-3 bg-red-600/20 rounded-full hover:bg-red-600/30 transition-colors cursor-pointer">
                  <span className="text-red-400 text-sm font-bold">YT</span>
                </div>
                <div className="p-3 bg-green-500/20 rounded-full hover:bg-green-500/30 transition-colors cursor-pointer">
                  <span className="text-green-400 text-sm font-bold">♪</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold tracking-wider">SERVICES</h4>
              <ul className="space-y-3 text-white/70">
                <li className="hover:text-white transition-colors cursor-pointer">Live Concerts</li>
                <li className="hover:text-white transition-colors cursor-pointer">Wedding Performances</li>
                <li className="hover:text-white transition-colors cursor-pointer">Corporate Events</li>
                <li className="hover:text-white transition-colors cursor-pointer">Playback Singing</li>
                <li className="hover:text-white transition-colors cursor-pointer">Studio Recording</li>
                <li className="hover:text-white transition-colors cursor-pointer">Music Collaborations</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold tracking-wider">CONTACT</h4>
              <div className="space-y-4 text-white/70">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-white/50" />
                  <span className="text-sm">Bodaka, Junagadh, Gujarat</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-white/50" />
                  <span className="text-sm">manager@billionentertainment.co.in</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-white/50" />
                  <span className="text-sm">+91 8794516245</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 px-8 py-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">© 2024 Vivek Morvadia. All rights reserved.</div>
            <div className="flex space-x-6 text-white/60 text-sm">
              <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
              <span className="hover:text-white transition-colors cursor-pointer">Press Kit</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// "use client"

// import { useState, useEffect } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Play, Heart, Share2, Instagram, Twitter, Youtube, ArrowLeft } from "lucide-react"
// import Link from "next/link"
// import { useParams } from "next/navigation"

// // Mock artist data - in a real app, this would come from an API
// const artistData = {
//   1: {
//     name: "Luna Rodriguez",
//     genre: "Pop/Electronic",
//     image: "/young-female-pop-singer-with-colorful-hair-perform.jpg",
//     coverImage: "/colorful-concert-stage.png",
//     bio: "Luna Rodriguez is a rising pop sensation who has taken the music world by storm with her unique blend of electronic beats and heartfelt lyrics. With over 10 million streams worldwide, she continues to push the boundaries of modern pop music.",
//     stats: {
//       followers: "2.5M",
//       monthlyListeners: "1.8M",
//       totalStreams: "15.2M",
//     },
//     topSongs: [
//       { title: "Neon Dreams", plays: "3.2M", duration: "3:24" },
//       { title: "Electric Heart", plays: "2.8M", duration: "3:45" },
//       { title: "Midnight Glow", plays: "2.1M", duration: "4:02" },
//       { title: "Digital Love", plays: "1.9M", duration: "3:18" },
//     ],
//     social: {
//       instagram: "#",
//       twitter: "#",
//       youtube: "#",
//     },
//     upcomingShows: [
//       { date: "2024-03-15", venue: "Madison Square Garden", city: "New York, NY" },
//       { date: "2024-03-22", venue: "Hollywood Bowl", city: "Los Angeles, CA" },
//       { date: "2024-04-05", venue: "Red Rocks Amphitheatre", city: "Morrison, CO" },
//     ],
//   },
//   // Add more artists as needed
// }

// export default function ArtistPage() {
//   const params = useParams()
//   const artistId = params.id as string
//   const [isVisible, setIsVisible] = useState(false)
//   const [isFollowing, setIsFollowing] = useState(false)

//   const artist = artistData[Number.parseInt(artistId) as keyof typeof artistData] || artistData[1]

//   useEffect(() => {
//     setIsVisible(true)
//   }, [])

//   return (
//     <main className="min-h-screen bg-background">
//       {/* Hero Section */}
//       <div className="relative h-96 overflow-hidden">
//         <img
//           src={artist.coverImage || "/placeholder.svg"}
//           alt={`${artist.name} cover`}
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

//         <div className="absolute top-6 left-6 z-10">
//           <Link href="/">
//             <Button variant="outline" size="sm" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
//               <ArrowLeft className="mr-2 h-4 w-4" />
//               Back to Home
//             </Button>
//           </Link>
//         </div>
//       </div>

//       {/* Artist Info */}
//       <div className="max-w-7xl mx-auto px-4 -mt-32 relative z-10">
//         <div
//           className={`transition-all duration-1000 ${
//             isVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"
//           }`}
//         >
//           <div className="flex flex-col md:flex-row gap-8 items-start">
//             <img
//               src={artist.image || "/placeholder.svg"}
//               alt={artist.name}
//               className="w-64 h-64 rounded-lg object-cover shadow-2xl border-4 border-white"
//             />

//             <div className="flex-1 text-white">
//               <Badge className="mb-4 bg-primary text-primary-foreground">{artist.genre}</Badge>
//               <h1 className="text-5xl md:text-6xl font-bold mb-4">{artist.name}</h1>
//               <p className="text-xl mb-6 text-gray-200 max-w-2xl text-pretty leading-relaxed">{artist.bio}</p>

//               <div className="flex flex-wrap gap-4 mb-6">
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-primary">{artist.stats.followers}</div>
//                   <div className="text-sm text-gray-300">Followers</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-primary">{artist.stats.monthlyListeners}</div>
//                   <div className="text-sm text-gray-300">Monthly Listeners</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-primary">{artist.stats.totalStreams}</div>
//                   <div className="text-sm text-gray-300">Total Streams</div>
//                 </div>
//               </div>

//               <div className="flex flex-wrap gap-4">
//                 <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
//                   <Play className="mr-2 h-5 w-5" />
//                   Play Music
//                 </Button>
//                 <Button
//                   variant="outline"
//                   size="lg"
//                   onClick={() => setIsFollowing(!isFollowing)}
//                   className={`border-white text-white hover:bg-white hover:text-black ${
//                     isFollowing ? "bg-white text-black" : ""
//                   }`}
//                 >
//                   <Heart className={`mr-2 h-5 w-5 ${isFollowing ? "fill-current" : ""}`} />
//                   {isFollowing ? "Following" : "Follow"}
//                 </Button>
//                 <Button
//                   variant="outline"
//                   size="lg"
//                   className="border-white text-white hover:bg-white hover:text-black bg-transparent"
//                 >
//                   <Share2 className="mr-2 h-5 w-5" />
//                   Share
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Content Sections */}
//       <div className="max-w-7xl mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           {/* Top Songs */}
//           <div className="lg:col-span-2">
//             <h2 className="text-3xl font-bold mb-8 text-foreground">Top Songs</h2>
//             <div className="space-y-4">
//               {artist.topSongs.map((song, index) => (
//                 <Card key={song.title} className="hover:bg-card/80 transition-colors cursor-pointer">
//                   <CardContent className="p-4">
//                     <div className="flex items-center gap-4">
//                       <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
//                         {index + 1}
//                       </div>
//                       <Button size="icon" variant="ghost" className="text-primary">
//                         <Play className="h-4 w-4" />
//                       </Button>
//                       <div className="flex-1">
//                         <h3 className="font-semibold text-card-foreground">{song.title}</h3>
//                         <p className="text-sm text-muted-foreground">{song.plays} plays</p>
//                       </div>
//                       <div className="text-sm text-muted-foreground">{song.duration}</div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-8">
//             {/* Social Links */}
//             <Card>
//               <CardContent className="p-6">
//                 <h3 className="text-xl font-bold mb-4 text-card-foreground">Follow {artist.name}</h3>
//                 <div className="flex gap-4">
//                   <Button
//                     size="icon"
//                     className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
//                   >
//                     <Instagram className="h-5 w-5" />
//                   </Button>
//                   <Button size="icon" className="bg-blue-500 hover:bg-blue-600">
//                     <Twitter className="h-5 w-5" />
//                   </Button>
//                   <Button size="icon" className="bg-red-500 hover:bg-red-600">
//                     <Youtube className="h-5 w-5" />
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Upcoming Shows */}
//             <Card>
//               <CardContent className="p-6">
//                 <h3 className="text-xl font-bold mb-4 text-card-foreground">Upcoming Shows</h3>
//                 <div className="space-y-4">
//                   {artist.upcomingShows.map((show, index) => (
//                     <div key={index} className="border-l-4 border-primary pl-4">
//                       <div className="font-semibold text-card-foreground">{show.venue}</div>
//                       <div className="text-sm text-muted-foreground">{show.city}</div>
//                       <div className="text-sm text-primary font-medium">{show.date}</div>
//                     </div>
//                   ))}
//                 </div>
//                 <Button className="w-full mt-4 bg-primary hover:bg-primary/90">View All Dates</Button>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </main>
//   )
// }
