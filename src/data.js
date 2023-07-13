//  icons
import {
  FiInstagram,
  FiGithub,
  FiMail,
  FiMapPin,
  FiFacebook,
  FiLinkedin,
} from 'react-icons/fi';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/typescript.png';
import SkillImg8 from './assets/img/skills/tailwind.png';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/yxnxh.h/?hl=en',
  },
  {
    icon: <FiFacebook />,
    href: 'https://www.facebook.com/Honey.wcp',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/HonWatcharaphum',
  },
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/watcharaphum-leelaphumsiri-210314280/',
  }
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  }
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'You can inquire via email below or call the number.',
    description: 'Email: hon.watcharaphum@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: '13/5 Nantawan Wongwan-Pinklao Kanjanapisek Bangpai Bangkae Bangkok 10160',
    description: 'Serving for clients in Thailand',
  },
];
