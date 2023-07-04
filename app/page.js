import Image from "next/image";
import Kategori from "./Kategori";
import UrunEkle from "./UrunEkle";
import UrunAra from "./UrunAra";
import UrunListesi from "./UrunListesi";
export default function Home() {
  return (
    <main>
      <UrunEkle />
      <UrunAra />
      <h1 class="mt-8 text-center text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl dark:text-white">
        Tüm{" "}
        <mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
          ürün
        </mark>{" "}
        fiyatları
      </h1>
      <UrunListesi/>
      <Kategori />
    </main>
  );
}
