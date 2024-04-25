import rightArrow from '/assets/svgs/icon-arrow-right.svg';
import headphoneImg from '/assets/navigation-imgs/image-category-thumbnail-headphones.png';
import speakerImg from '/assets/navigation-imgs/image-category-thumbnail-speakers.png';
import earphoneImg from '/assets/navigation-imgs/image-category-thumbnail-earphones.png';

type NavigationCategory = {
  category: string;
  url: string;
};

export const headerNavigation: NavigationCategory[] = [
  { category: 'home', url: '/' },
  { category: 'headphones', url: '/headphones' },
  { category: 'speakers', url: '/speakers' },
  { category: 'earphones', url: '/earphones' },
];

type navigations = {
  src: string;
  category: string;
  url: string;
  arrow: string;
};

export const categoryNavigations: navigations[] = [
  {
    src: headphoneImg,
    category: 'headphones',
    url: '/headphones',
    arrow: rightArrow,
  },
  {
    src: speakerImg,
    category: 'speakers',
    url: '/speakers',
    arrow: rightArrow,
  },
  {
    src: earphoneImg,
    category: 'earphones',
    url: '/earphones',
    arrow: rightArrow,
  },
];

type ImgAttribute = {
  path: string;
  width?: string;
};

const mobileBp = '43.73';
const tabletBp = '63.97';

export const heroImgs: ImgAttribute[] = [
  { path: '/assets/home/mobile/image-header.jpg', width: mobileBp },
  { path: '/assets/home/tablet/image-header.jpg', width: tabletBp },
  { path: '/assets/home/tablet/image-header.jpg' },
];

export const audioGearImgs: ImgAttribute[] = [
  { path: '/assets/shared/mobile/image-best-gear.jpg', width: mobileBp },
  { path: '/assets/shared/tablet/image-best-gear.jpg', width: tabletBp },
  { path: '/assets/shared/desktop/image-best-gear.jpg' },
];

export const YX1Earphone: ImgAttribute[] = [
  { path: '/assets/home/mobile/image-earphones-yx1.jpg', width: mobileBp },
  { path: '/assets/home/tablet/image-earphones-yx1.jpg', width: tabletBp },
  { path: '/assets/home/desktop/image-earphones-yx1.jpg' },
];

export const ZX7Speaker: ImgAttribute[] = [
  { path: '/assets/home/mobile/image-speaker-zx7.jpg', width: mobileBp },
  { path: '/assets/home/tablet/image-speaker-zx7.jpg', width: tabletBp },
  { path: '/assets/home/desktop/image-speaker-zx7.jpg' },
];

export const ZX9Speaker: ImgAttribute[] = [
  { path: '/assets/home/mobile/image-speaker-zx9.png', width: mobileBp },
  { path: '/assets/home/tablet/image-speaker-zx9.png', width: tabletBp },
  { path: '/assets/home/desktop/image-speaker-zx9.png' },
];
