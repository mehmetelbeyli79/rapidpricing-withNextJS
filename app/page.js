import Image from "next/image";
import Kategori from "./Kategori";
import UrunEkle from "./UrunEkle";

export default function Home() {
  return (
    <main>
      <UrunEkle />
      <Kategori />
    </main>
  );
}
