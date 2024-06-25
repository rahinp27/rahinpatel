import React, { useEffect, useState } from "react";
import "../assets/css/footer.css";

const Footer = () => {
  const [quote, setQuote] = useState({ text: "", author: "" });

  useEffect(() => {
    const quotes = [
      { text: "Go above and beyond, PLUS ULTRA!", author: "MHA" },
      { text: "Set your heart ablaze and go beyond your limits!", author: "Kyojuro Rengoku" },
      { text: "Stand tall and be proud, no matter how weak or unworthy you feel. Burn up your heart, grit your teeth and move forward. If you just curl up into a ball and hide, time will pass you by. It won't wait for you while you wallow in your grief.", author: "Kyojuro Rengoku" },
      { text: "There is no other way to go but forward.", author: "Sabito" },
      { text: "Don’t ever give up. Even if it’s painful, even if it’s agonizing, don’t try to take the easy way out.", author: "Zenitsu" },
      { text: "The process is more important than the results. And if you take care of the process, you will get the results.", author: "Dhoni" },
      { text: "You are only as good as you can communicate.", author: "Vinh Giang" },
      { text: "Whatever you do for others comes around to help you, as well, in the end.", author: "Tanjiro" },
      { text: "Tatakae, Tatakae, TATAKAE! It Doesn't Matter How Strong The Opposition Is. It Doesn't Matter How Fearsome The World Is, It Doesn't Matter How Cruel The World Is. Fight!", author: "Eren Yeager" },
      { text: "In the darkest of times, hope is something you give yourself.", author: "Zuko" },
      { text: "When we hit our lowest point we are open to change.", author: "Aang" },
      { text: "Don’t expect to be motivated every day to get out there and make things happen. You won’t be. Don’t count on motivation. Count on Discipline.", author: "Jocko Willink" }
      
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    setQuote(randomQuote);
  }, []);

  return (
    <footer id="footer">
      <section id="quote" className="quote-section">
        <div className="quote-container">
          <p className="quote-text">{quote.text}</p>
          <p className="quote-author">- {quote.author}</p>
        </div>
      </section>
      <div className="container">
        <div className="social-links">
          <a href="https://github.com/VikramVenkatapathi" className="google-plus">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/vikram-venkatapathi/" className="linkedin">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="mailto:vikramvenkatapathi@gmail.com">
            <i className="bx bx-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
