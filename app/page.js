import Image from "next/image";
import Kategori from "./Kategori";
import UrunEkle from "./UrunEkle";
import UrunAra from "./UrunAra";
import UrunListesi from "./UrunListesi";
import Sirket from "./Sirket";
export default function Home() {
  return (
    <main>
      <Sirket/>
      <UrunEkle />
      <UrunAra />
      <UrunListesi/>
      <Kategori />
    </main>
  );
}
