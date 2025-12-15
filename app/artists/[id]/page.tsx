import { notFound } from "next/navigation";

import VivekEPK from "@/components/epk/vivek-epk";
import AJEpk from "@/components/epk/aj-epk";
import YarsinEPK from "@/components/epk/yarsin-epk";
import McLeanEPK from "@/components/epk/mclean-epk";
import TuhinEPK from "@/components/epk/tuhin-epk";
import { getAllArtistIds, getArtistById } from "@/lib/artist";

export function generateStaticParams() {
  return getAllArtistIds().map((id) => ({
    id: id,
  }));
}

export default async function EPKPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const artist = getArtistById(id);

  if (!artist) {
    notFound();
  }

  // Render unique EPK component based on artist
  switch (id) {
    case "vivek-morvadia":
      return <VivekEPK artist={artist} />;
    case "aj-maisnam":
      return <AJEpk artist={artist} />;
    case "yarsin":
      return <YarsinEPK artist={artist} />;
    case "mc-lean":
      return <McLeanEPK artist={artist} />;
    case "tuhin-handique":
      return <TuhinEPK artist={artist} />;
    default:
      return <VivekEPK artist={artist} />;
  }
}
