import Aquarius from "../../assets/images/zodiacImages/aquarius.png";
import Pisces from "../../assets/images/zodiacImages/pisces.png";
import Aries from "../../assets/images/zodiacImages/aries.png";
import Taurus from "../../assets/images/zodiacImages/taurus.png";
import Gemini from "../../assets/images/zodiacImages/gemini.png";
import Cancer from "../../assets/images/zodiacImages/cancer.png";
import Leo from "../../assets/images/zodiacImages/leo.png";
import Virgo from "../../assets/images/zodiacImages/virgo.png";
import Libra from "../../assets/images/zodiacImages/libra.png";
import Scorpio from "../../assets/images/zodiacImages/scorpio.png";
import Sagittarius from "../../assets/images/zodiacImages/sagittarius.png";
import Capricorn from "../../assets/images/zodiacImages/capricorn.png";

export function handleSignsCalculator(day, month) {
  const signsList = [
    {
      startDay: 20,
      startMonth: 1,
      endDay: 18,
      endMonth: 2,
      name: "Aquarius (Water Bearer): January 20 – February 18",
      characteristics:
        "Aquarius teaches us friendship, fraternity, originality, innovation, respect for differences, unconditional love for human beings and nature. Freedom is the word of Aquarius.",
      zodiacSignImage: Aquarius,
    },
    {
      startDay: 19,
      startMonth: 2,
      endDay: 20,
      endMonth: 3,
      name: "Pisces (Fish): February 19 – March 20",
      characteristics:
        "Pisces teaches us faith, connection with a higher dimension, simplicity, detachment, surrender to life. Acceptance is the word for Pisces.",
      zodiacSignImage: Pisces,
    },
    {
      startDay: 21,
      startMonth: 3,
      endDay: 19,
      endMonth: 4,
      name: "Aries (Ram): March 21 – April 19",
      characteristics:
        "Aries teaches us courage, leadership, drive, motivation to start projects and move forward, even with obstacles. Overcoming is the word of Aries.",
      zodiacSignImage: Aries,
    },
    {
      startDay: 20,
      startMonth: 4,
      endDay: 20,
      endMonth: 5,
      name: "Taurus (Bull): April 20 – May 20",
      characteristics:
        "Taurus teaches us care, affection, patience to observe, see growth, follow our own development process and the growth of others. Persistence is the word of Taurus.",
      zodiacSignImage: Taurus,
    },
    {
      startDay: 21,
      startMonth: 5,
      endDay: 21,
      endMonth: 6,
      name: "Gemini (Twins): May 21 – June 21",
      characteristics:
        "Gemini teaches us communication, good words, kindness, diplomacy to make contacts, transmit information and exchange opinions with people. Connection is the word for Gemini.",
      zodiacSignImage: Gemini,
    },
    {
      startDay: 22,
      startMonth: 6,
      endDay: 22,
      endMonth: 7,
      name: "Cancer (Crab): June 22 – July 22",
      characteristics:
        "Cancer teaches us love, intimacy, protection, warmth and emotional support to feel loved and safe, participating in a family. Belonging is Cancer's word.",
      zodiacSignImage: Cancer,
    },
    {
      startDay: 23,
      startMonth: 7,
      endDay: 22,
      endMonth: 8,
      name: "Leo (Lion): July 23 – August 22",
      characteristics:
        "Leo teaches us creativity, joy, spontaneity, vanity, self-esteem to continue acting correctly and being proud of ourselves. Nobility is Leo's word.",
      zodiacSignImage: Leo,
    },
    {
      startDay: 23,
      startMonth: 8,
      endDay: 22,
      endMonth: 9,
      name: "Virgo (Virgin): August 23 – September 22",
      characteristics:
        "Virgo teaches us productivity, love of work, the desire to be useful, to serve, to help ourselves and others. Efficiency is Virgo's word.",
      zodiacSignImage: Virgo,
    },
    {
      startDay: 23,
      startMonth: 9,
      endDay: 22,
      endMonth: 10,
      name: "Libra (Balance): September 23 – October 22",
      characteristics:
        "Libra teaches us commitment, bonding, engagement with others, sophistication, love of the arts and the delicacy that enchants and captivates the people around us. Charm is Libra's word.",
      zodiacSignImage: Libra,
    },
    {
      startDay: 23,
      startMonth: 10,
      endDay: 21,
      endMonth: 11,
      name: "Scorpius (Scorpion): October 23 – November 21",
      characteristics:
        "Scorpio teaches us silence, depth, mystery, emotions, the possibility of stripping ourselves and transforming ourselves into better people. Transcendence is Scorpio's word.",
      zodiacSignImage: Scorpio,
    },
    {
      startDay: 22,
      startMonth: 11,
      endDay: 21,
      endMonth: 12,
      name: "Sagittarius (Archer): November 22 – December 21",
      characteristics:
        "Sagittarius teaches us hope, faith in the future, positive energy, an interest in going much further to discover that the world is bigger. Expansion the word of Sagittarius.",
      zodiacSignImage: Sagittarius,
    },
    {
      startDay: 22,
      startMonth: 12,
      endDay: 19,
      endMonth: 1,
      name: "Capricornus (Goat): December 22 – January 19",
      characteristics:
        "Capricorn teaches us responsibility, discipline, ethics, wisdom gained by age, respect for elders, willpower. Conscience is Capricorn's word.",
      zodiacSignImage: Capricorn,
    },
  ];

  const sign = signsList.find(
    ({ startDay, startMonth, endDay, endMonth }) =>
      (month === startMonth && day >= startDay) ||
      (month === endMonth && day <= endDay) ||
      (month > startMonth && month < endMonth)
  );

  if (!sign) {
    return "It was not possible to determine the sign";
  } else {
    console.log(`Value of zodiac sign return : ${sign.name}`);
    return sign;
  }
}
