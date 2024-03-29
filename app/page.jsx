"use client";
import Image from "next/image";
import style from "./page.module.scss";
import moustache from "./assets/moustache.svg";
import man from "./assets/man.png";
import Nav from "./components/nav/nav_pc/Nav";
import ciseau from "./assets/ciseau.svg";
import brosse from "./assets/brosse.svg";
import lame from "./assets/lame.svg";
import cont from "./assets/cont.svg";
import inte from "./assets/inte.jpeg";
import dv from "./assets/dv.jpeg";
import Nav_mobile from "./components/nav/nav_mobile/Nav";
import mouve_down from "./assets/move_down.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={style.alllll}>
      <Nav_mobile />
      <div className={style.container_header}>
        <div className={style.nav}>
          <Nav page="header" />
        </div>
        <div className={style.navpc}>
          <a href="#propo">A prpos</a>
          <a href="#nosservices">Nos services</a>
          <a href="#nosprix">Nos prix</a>
          <a href="#contact">Contact</a>
        </div>
        <div className={style.container_man}>
          <Image src={man} alt="Moustache" />
          <div className={style.container_title}>
            <div className={style.title}>PERFORMANCE COIFFEUR</div>
            <a href="#contact" className={style.button}>
              contactez-nous
            </a>
          </div>
          <div className={style.container_infos}>
            <a href="#propo">
              <Image src={mouve_down} alt="Moustache" />
            </a>
          </div>
        </div>
      </div>
      <div className={style.container_propo} id="propo">
        <div className={style.nav}>
          <Nav page="a_propos" />
        </div>
        <div className={style.container_title}>
          <p>A PROPOS</p>
        </div>
        <div className={style.moustache}>
          <Image src={moustache} alt="Moustache" width={100} height={100} />
        </div>
        <div className={style.contenus}>
          <div className={style.contenu}>
            <div className={style.text}>
              <p data-aos="fade-up">
                {`Découvrez l'excellence en matière de coiffure avec Performance
                Coiffeur`}
              </p>
              <p data-aos="fade-up">
                {`
                Notre équipe de coiffeurs passionnés allie expertise et
                créativité pour vous offrir des résultats exceptionnels à chaque
                visite. Que vous recherchiez une coupe tendance, une coloration
                éclatante ou des soins capillaires de qualité supérieure, nous
                nous engageons à vous offrir une expérience personnalisée et
                inoubliable. Plongez dans un univers où le style et l'innovation
                se rencontrent, et laissez-nous révéler toute la beauté de vos
                cheveux. Bienvenue chez Performance Coiffeur, où votre
                satisfaction est notre priorité absolue.
              `}
              </p>
            </div>
            <div className={style.image}>
              <div className={style.image_1} data-aos="fade-up">
                <Image src={inte} />
              </div>
              <div className={style.image_2} data-aos="fade-up">
                <Image src={dv} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.container_services} id="nosservices">
        <div className={style.nav}>
          <Nav page="service" />
        </div>
        <div className={style.container_title}>
          <p>NOS SERVICES </p>
        </div>
        <div className={style.moustache}>
          <Image src={moustache} alt="Moustache" width={100} height={100} />
        </div>
        <div className={style.image_service}>
          <div className={style.image}>
            <div className={style.image_1} data-aos="fade-up">
              <Image src={lame} alt="Lame" />
              <Image src={ciseau} alt="Ciseau" />
            </div>
            <div className={style.image_2} data-aos="fade-up">
              <Image src={cont} alt="Cont" />
              <Image src={brosse} alt="Brosse" />
            </div>
          </div>
          <div className={style.services}>
            <div className={style.service} data-aos="fade-up">
              <p>Shapoo and cut</p>
              <hr className={style.ligne}></hr>
            </div>
            <div className={style.service} data-aos="fade-up">
              <p>Shapoo and cut</p>
              <hr className={style.ligne}></hr>
            </div>
            <div className={style.service} data-aos="fade-up">
              <p>Shapoo and cut</p>
              <hr className={style.ligne}></hr>
            </div>
            <div className={style.service} data-aos="fade-up">
              <p>Shapoo and cut</p>
              <hr className={style.ligne}></hr>
            </div>
          </div>
        </div>
      </div>
      <div className={style.container_prix} id="nosprix">
        <div className={style.nav}>
          <Nav page="prix" />
        </div>
        <div className={style.container_title}>
          <p>NOS PRIX</p>
        </div>
        <div className={style.moustache}>
          <Image src={moustache} alt="Moustache" width={100} height={100} />
        </div>
        <div className={style.prix}>
          <div className={style.title_price} data-aos="fade-up">
            <div className={style.title}>
              <p>Shapoo and cut </p>
              <p>Quaestione igitur per multiplices dilatata fortunas </p>
            </div>
            <div className={style.price}>
              <p>90€</p>
            </div>
          </div>
          <div className={style.title_price} data-aos="fade-up">
            <div className={style.title}>
              <p>Shapoo and cut </p>
              <p>Quaestione igitur per multiplices dilatata fortunas </p>
            </div>
            <div className={style.price}>
              <p>90€</p>
            </div>
          </div>
          <div className={style.title_price} data-aos="fade-up">
            <div className={style.title}>
              <p>Shapoo and cut </p>
              <p>Quaestione igitur per multiplices dilatata fortunas </p>
            </div>
            <div className={style.price}>
              <p>90€</p>
            </div>
          </div>
          <div className={style.title_price} data-aos="fade-up">
            <div className={style.title}>
              <p>Shapoo and cut </p>
              <p>Quaestione igitur per multiplices dilatata fortunas </p>
            </div>
            <div className={style.price}>
              <p>90€</p>
            </div>
          </div>
          <div className={style.title_price} data-aos="fade-up">
            <div className={style.title}>
              <p>Shapoo and cut </p>
              <p>Quaestione igitur per multiplices dilatata fortunas </p>
            </div>
            <div className={style.price}>
              <p>90€</p>
            </div>
          </div>
          <div className={style.title_price} data-aos="fade-up">
            <div className={style.title}>
              <p>Shapoo and cut </p>
              <p>Quaestione igitur per multiplices dilatata fortunas </p>
            </div>
            <div className={style.price}>
              <p>90€</p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.container_contacts} id="contact">
        <div className={style.nav}>
          <Nav page="contact" />
        </div>
        <div className={style.container_title}>
          <p>CONTACT</p>
        </div>
        <div className={style.moustache}>
          <Image src={moustache} alt="Moustache" width={100} height={100} />
        </div>
        <div className={style.contact_form}>
          <div className={style.form}>
            <div className={style.all_input}>
              <p data-aos="fade-up">
                Quaestione igitur per multiplices dilatata fortunas{" "}
              </p>
              <input type="text" placeholder="Nom" data-aos="fade-up" />
              <input type="email" placeholder="mail" data-aos="fade-up" />
              <input type="text" placeholder="message" data-aos="fade-up" />

              <a href="#" className={style.button} data-aos="fade-up">
                ENVOYER
              </a>
            </div>
          </div>
          <div className={style.contact}>
            <div className={style.all}>
              <div className={style.adresse}>
                <p data-aos="fade-up">Adresse</p>
                <p data-aos="fade-up">30 Rue Berlioz</p>
                <p data-aos="fade-up">91240</p>
                <p data-aos="fade-up">Saint-Michel-sur-Orge</p>
              </div>
              <div className={style.numero}>
                <p data-aos="fade-up">Numero de telephone</p>
                <p data-aos="fade-up">+33641388123</p>
              </div>
              <div className={style.horraire}>
                <p>Horraires</p>
                <p>7J /7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
