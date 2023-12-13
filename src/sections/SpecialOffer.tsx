import React from "react";
import { offer } from "../assets/images";
import Button from "../compenents/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 ">
        <img
          src={offer}
          alt="images"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          <span className="text-coral-red"> Özel</span> Ürünler
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Sıradışı fırsatlar sunan bir alışveriş yolculuğuna çıkın. En iyi
          seçimlerden inanılmaz tasarruflara kadar, bizi farklı kılan eşsiz bir
          değer sunuyoruz
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Eşsiz arzularınızı karşılamak üzere tasarlanmış bir olasılıklar
          dünyasında gezinin, en yüksek beklentileri aşan bir deneyimin ötesine
          geçin. Bizimle olan yolculuğunuz sıradanın çok ötesindedir.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Detayları İncele" />
          <Button
            label="Daha Fazlası"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
