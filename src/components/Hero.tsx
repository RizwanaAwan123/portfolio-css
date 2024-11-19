import Image from "next/image";
export default function Hero() {
    return (
      <section className="hero">
        <div>
        <Image  src="/image.png"
         alt="profile.jpg" 
         width= {400} 
         height={600}></Image>
          <h2>Hi, I'm Rizwana Awan</h2>
          <p>A Passionate Web Developer</p>
        </div>
      </section>
    );
  }
  