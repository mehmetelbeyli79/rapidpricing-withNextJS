"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUrunler } from "./GlobalState/Features/urunler/urunSlice";
import { FaEdit, FaTrash } from "react-icons/fa";
import KategoriGuncelle from "./components/KategoriGuncelle";
import Urunler from "./Urunler";
function Kategori() {
  const urunDegisim = useSelector(selectUrunler); //Redux'ta değişim varsa useEffect ile localStorage güncellenir.
  const [urunler, setUrunler] = useState([]);
  const [kategori, setKategori] = useState("");
  const [kategoriGuncelle, setKategoriGuncelle] = useState(false);
  const [kategoriDegisim, setKategoriDegisim] = useState(false); // Kategori Güncellemesini Algılaması için
  const handleKategoriDegisim = () => {
    // Bu fonksiyon child componentten gelen kategori değişimini algılar.
    setKategoriDegisim(!kategoriDegisim);
  };
  const handleKategoriGuncelleClick = (ad) => {
    setKategori(ad);
    setKategoriGuncelle(!kategoriGuncelle);
  };
  const handleKategoriSilClick = (ad) => {
    const storedUrunler = JSON.parse(localStorage.getItem("urunler"));
    const updatedUrunler = storedUrunler.filter(
      (urun) => urun.urunKategori !== ad
    );
    localStorage.setItem("urunler", JSON.stringify(updatedUrunler));
    setUrunler(updatedUrunler);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUrunler = JSON.parse(localStorage.getItem("urunler"));
      if (storedUrunler) {
        setUrunler(storedUrunler);
      }
    }
  }, [urunDegisim, kategoriDegisim]);
  const kategorilendirilmisUrunler = {};
  urunler.forEach((urun) => {
    const kategoriAdi = urun.urunKategori;
    if (!kategorilendirilmisUrunler[kategoriAdi]) {
      kategorilendirilmisUrunler[kategoriAdi] = [];
    }
    kategorilendirilmisUrunler[kategoriAdi].push(urun);
  });
  return (
    <div className="flex md:flex-row flex-wrap md:p-24 p-6 justify-center w-full">
      {Object.keys(kategorilendirilmisUrunler).map((kategoriAdi) => (
        <div
          key={kategoriAdi}
          className="md:w-2/4 w-full mt-4 flex-col justify-center items-center"
        >
          <h1 className="text-2xl font-extrabold text-purple-500 tracking-wide flex items-center justify-between md:w-3/4">
            <div>
              <span className="bg-yellow-300 px-4 py-2 rounded-lg">
                {kategoriAdi}
              </span>{" "}
              Kategorisi
            </div>
            <span className=" px-4 py-2 rounded-lg flex ">
              <FaEdit
                onClick={(e) => {
                  handleKategoriGuncelleClick(
                    kategorilendirilmisUrunler[kategoriAdi][0].urunKategori
                  );
                }}
              />
              <FaTrash
                className="ms-2 mr-0"
                onClick={(e) => {
                  handleKategoriSilClick(
                    kategorilendirilmisUrunler[kategoriAdi][0].urunKategori
                  );
                }}
              />
            </span>

            {"   "}
          </h1>
          {kategori ===
            kategorilendirilmisUrunler[kategoriAdi][0].urunKategori &&
            kategoriGuncelle && (
              <KategoriGuncelle
                kategori={kategori}
                kategoriKontrol={handleKategoriDegisim}
              />
            )}

          <ul className="space-y-4 mt-4 ">
            {kategorilendirilmisUrunler[kategoriAdi].map((urun) => (
              <li
                key={urun.urunId}
                className="bg-white rounded-lg shadow p-4 md:w-3/4"
              >
                <Urunler urun={urun} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Kategori;
