import { Link } from "react-router-dom";
import "./India.css";

const Navbar = () => {
  return (
    <>
      <div className="">
        <header className="team">
          <b className="mx-0 bottom-4">India National Cricket Team</b>
          {/* <Link to="team">Players</Link> */}
        </header>
        <div className="picture">
          <img
            className="pic"
            src="/images/indiateam.jpeg"
            alt="India National Cricket Team"
          />
          <img
            className="pic"
            src="/images/indiateam1.jpeg"
            alt="Team Celebration"
          />
          <img
            className="pic"
            src="/images/indiateam2.jpeg"
            alt="On the Field"
          />
        </div>
        <div className="about">
          <p>
            The <strong>India mens national cricket team</strong> represents
            India in mens international cricket. It is governed by the Board of
            Control for Cricket in India (BCCI) and is a Full Member of the
            International Cricket Council (ICC) with Test, One Day International
            (ODI), and Twenty20 International (T20I) status.
          </p>
          <p>
            <strong>
              India are the current Asian Champions and Twenty20 World
              Champions.
            </strong>
          </p>
          <p>
            <strong>
              The team has played 580 Test matches, winning 179, losing 178,
              with 222 draws and 1 tie.
            </strong>
          </p>
          <p>
            As of August <strong> 2024</strong>, India is ranked second in the
            ICC Test Championship with 120 rating points. India has played in
            each World Test Championship final, finishing runners-up in both
            (2021 and 2023). Test rivalries include the Border-Gavaskar Trophy
            (with Australia), Freedom Trophy (with South Africa), Anthony de
            Mello Trophy, and Pataudi Trophy (both with England).
          </p>
          <p>
            The team has played 1,058 ODI matches, winning 559, losing 445,
            tying 10, and with 44 ending in a no-result. As of August 2024,
            India is ranked first in the ICC ODI Championship with 118 rating
            points.
            <strong>
              India has appeared in the World Cup final four times (1983, 2003,
              2011, 2023)
            </strong>{" "}
            and won twice (1983 and 2011). It was the second team (after the
            West Indies) to win the World Cup and the first to win on home soil
            in 2011.
          </p>
          <p>
            <strong>
              {" "}
              India has also won two ICC Champions Trophies (2002 and 2013) and
              the ODI Asia Cup 7 times (1984, 1988, 1990-91, 1995, 2010, 2018,
              2023).
            </strong>
          </p>
          <p>
            The team has played 235 Twenty20 International matches, winning 154,
            losing 69, tying 6, and with 6 ending in a no-result. As of August
            2024, India is ranked first in the ICC T20I Championship with 267
            rating points. India has won the ICC Mens T20 World Cup twice (2007
            and 2024), and the Twenty20 Asia Cup in 2016, as well as the Asian
            Games in 2022.
          </p>
          <p>
            <strong>
              India are the reigning Asian Champions and Twenty20 World
              Champions, winning the former in 2023 against Sri Lanka and the
              latter in 2024 against South Africa.
            </strong>
          </p>
          <h2>History</h2>
          <p>
            The British brought cricket to India in the early <b>1700s</b>, with
            the first cricket match played in <b>1721</b>. The East India
            Company managed local communities through cricket. In <b>1848</b>,
            the Parsi community in Mumbai formed the Oriental Cricket Club, the
            first cricket club established by Indians.
          </p>
          <p>
            By the early <b>1900s</b>, Indians were playing for the England
            cricket team,{" "}
            <b>leading to the creation of the Ranji Trophy and Duleep Trophy</b>
            . In 1911, an Indian mens cricket team, captained by Bhupinder Singh
            of Patiala, embarked on their first official tour of the British
            Isles.
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
