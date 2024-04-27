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

export type ImgAttribute = {
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

export type RelatedProductImgs = {
  slug: string;
  name: string;
  category: string;
  images: ImgAttribute[];
};

type Products = {
  id: number;
  slug: string;
  name: string;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: { quantity: number; item: string }[];
  images: ImgAttribute[];
  preview: ImgAttribute[];
  gallery: { attribute: string; images: ImgAttribute[] }[];
  other: RelatedProductImgs[];
};

export const headphones: Products[] = [
  {
    id: 1,
    slug: 'xx99-mark-two-headphones',
    name: 'XX99 Mark II Headphones',
    new: true,
    price: 2999,
    description:
      'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
    features:
      'Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.\nThe advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.',
    includes: [
      {
        quantity: 1,
        item: 'Headphone unit',
      },
      {
        quantity: 2,
        item: 'Replacement earcups',
      },
      {
        quantity: 1,
        item: 'User manual',
      },
      {
        quantity: 1,
        item: '3.5mm 5m audio cable',
      },
      {
        quantity: 1,
        item: 'Travel bag',
      },
    ],
    images: [
      {
        path: '/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg',
        width: mobileBp,
      },
      {
        path: '/assets/product-xx99-mark-two-headphones/tablet/image-product.jpg',
        width: tabletBp,
      },
      {
        path: '/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg',
      },
    ],
    preview: [
      {
        path: '/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg',
        width: mobileBp,
      },
      {
        path: '/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg',
        width: tabletBp,
      },
      {
        path: '/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg',
      },
    ],
    gallery: [
      {
        attribute: 'first',
        images: [
          {
            path: '/assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg',
            width: mobileBp,
          },
          {
            path: '/assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg',
            width: tabletBp,
          },
          {
            path: '/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg',
          },
        ],
      },
      {
        attribute: 'second',
        images: [
          {
            path: '/assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg',
            width: mobileBp,
          },
          {
            path: '/assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg',
            width: tabletBp,
          },
          {
            path: '/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg',
          },
        ],
      },
      {
        attribute: 'third',
        images: [
          {
            path: '/assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg',
            width: mobileBp,
          },
          {
            path: '/assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg',
            width: tabletBp,
          },
          {
            path: '/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg',
          },
        ],
      },
    ],
    other: [
      {
        slug: 'xx99-mark-one-headphones',
        name: 'XX99 Mark I',
        category: 'headphones',
        images: [
          {
            path: '/assets/shared/mobile/image-xx99-mark-one-headphones.jpg',
            width: mobileBp,
          },
          {
            path: '/assets/shared/tablet/image-xx99-mark-one-headphones.jpg',
            width: tabletBp,
          },
          {
            path: '/assets/shared/desktop/image-xx99-mark-one-headphones.jpg',
          },
        ],
      },
      {
        slug: 'xx59-headphones',
        name: 'XX59',
        category: 'headphones',
        images: [
          {
            path: '/assets/shared/mobile/image-xx59-headphones.jpg',
            width: mobileBp,
          },
          {
            path: '/assets/shared/tablet/image-xx59-headphones.jpg',
            width: tabletBp,
          },
          {
            path: '/assets/shared/desktop/image-xx59-headphones.jpg',
          },
        ],
      },
      {
        slug: 'zx9-speaker',
        name: 'ZX9 Speaker',
        category: 'speakers',
        images: [
          {
            path: '/assets/shared/mobile/image-zx9-speaker.jpg',
            width: mobileBp,
          },
          {
            path: '/assets/shared/tablet/image-zx9-speaker.jpg',
            width: tabletBp,
          },
          {
            path: '/assets/shared/desktop/image-zx9-speaker.jpg',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    slug: 'xx99-mark-one-headphones',
    name: 'XX99 Mark I Headphones',
    new: false,
    price: 1750,
    description:
      'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
    features:
      'As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.\nFrom the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector.',
    includes: [
      {
        quantity: 1,
        item: 'Headphone unit',
      },
      {
        quantity: 2,
        item: 'Replacement earcups',
      },
      {
        quantity: 1,
        item: 'User manual',
      },
      {
        quantity: 1,
        item: '3.5mm 5m audio cable',
      },
    ],
    images: [
      {
        path: '/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg',
        width: mobileBp,
      },
      {
        path: '/assets/product-xx99-mark-one-headphones/tablet/image-product.jpg',
        width: tabletBp,
      },
      {
        path: '/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg',
      },
    ],
    preview: [
      {
        path: '/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg',
        width: mobileBp,
      },
      {
        path: '/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg',
        width: tabletBp,
      },
      {
        path: '/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg',
      },
    ],
    gallery: [
      {
        attribute: 'first',
        images: [
          {
            path: '/assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg',
            width: mobileBp,
          },
          {
            path: '/assets/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg',
            width: tabletBp,
          },
          {
            path: '/assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg',
          },
        ],
      },
      {
        attribute: 'second',
        images: [
          {
            path: '/assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg',
            width: mobileBp,
          },
          {
            path: '/assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg',
            width: mobileBp,
          },
          {
            path: '/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg',
          },
        ],
      },
      {
        attribute: 'third',
        images: [
          {
            path: '/assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg',
            width: mobileBp,
          },
          {
            path: '/assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg',
            width: tabletBp,
          },
          {
            path: '/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg',
          },
        ],
      },
    ],
    other: [
      {
        slug: 'xx99-mark-two-headphones',
        name: 'XX99 Mark II',
        category: 'headphones',
        images: [
          {
            path: '/assets/shared/mobile/image-xx99-mark-two-headphones.jpg',
            width: mobileBp,
          },
          {
            path: '/assets/shared/tablet/image-xx99-mark-two-headphones.jpg',
            width: tabletBp,
          },
          {
            path: '/assets/shared/desktop/image-xx99-mark-two-headphones.jpg',
          },
        ],
      },
      {
        slug: 'xx59-headphones',
        name: 'XX59',
        category: 'headphones',
        images: [
          {
            path: '/assets/shared/mobile/image-xx59-headphones.jpg',
            width: mobileBp,
          },
          {
            path: '/assets/shared/tablet/image-xx59-headphones.jpg',
            width: tabletBp,
          },
          {
            path: '/assets/shared/desktop/image-xx59-headphones.jpg',
          },
        ],
      },
      {
        slug: 'zx9-speaker',
        name: 'ZX9 Speaker',
        category: 'speakers',
        images: [
          {
            path: '/assets/shared/mobile/image-zx9-speaker.jpg',
            width: mobileBp,
          },
          {
            path: '/assets/shared/tablet/image-zx9-speaker.jpg',
            width: tabletBp,
          },
          {
            path: '/assets/shared/desktop/image-zx9-speaker.jpg',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    slug: 'xx59-headphones',
    name: 'XX59 Headphones',
    new: false,
    price: 899,
    description:
      'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
    features:
      'These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.\nMore than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.',
    includes: [
      {
        quantity: 1,
        item: 'Headphone unit',
      },
      {
        quantity: 2,
        item: 'Replacement earcups',
      },
      {
        quantity: 1,
        item: 'User manual',
      },
      {
        quantity: 1,
        item: '3.5mm 5m audio cable',
      },
    ],
    images: [
      {
        path: '/assets/product-xx59-headphones/mobile/image-product.jpg',
        width: mobileBp,
      },
      {
        path: '/assets/product-xx59-headphones/tablet/image-product.jpg',
        width: tabletBp,
      },
      {
        path: '/assets/product-xx59-headphones/desktop/image-product.jpg',
      },
    ],
    preview: [
      {
        path: '/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg',
        width: mobileBp,
      },
      {
        path: '/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg',
        width: tabletBp,
      },
      {
        path: '/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg',
      },
    ],
    gallery: [
      {
        attribute: 'first',
        images: [
          {
            path: '/assets/product-xx59-headphones/mobile/image-gallery-1.jpg',
            width: mobileBp,
          },
          {
            path: '/assets/product-xx59-headphones/tablet/image-gallery-1.jpg',
            width: tabletBp,
          },
          {
            path: '/assets/product-xx59-headphones/desktop/image-gallery-1.jpg',
          },
        ],
      },
      {
        attribute: 'second',
        images: [
          {
            path: '/assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg',
            width: mobileBp,
          },
          {
            path: '/assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg',
            width: mobileBp,
          },
          {
            path: '/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg',
          },
        ],
      },
      {
        attribute: 'third',
        images: [
          {
            path: '/assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg',
            width: mobileBp,
          },
          {
            path: '/assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg',
            width: tabletBp,
          },
          {
            path: '/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg',
          },
        ],
      },
    ],
    other: [
      {
        slug: 'xx99-mark-two-headphones',
        name: 'XX99 Mark II',
        category: 'headphones',
        images: [
          {
            path: '/assets/shared/mobile/image-xx99-mark-two-headphones.jpg',
            width: mobileBp,
          },
          {
            path: '/assets/shared/tablet/image-xx99-mark-two-headphones.jpg',
            width: tabletBp,
          },
          {
            path: '/assets/shared/desktop/image-xx99-mark-two-headphones.jpg',
          },
        ],
      },
      {
        slug: 'xx99-mark-one-headphones',
        name: 'XX99 Mark I',
        category: 'headphones',
        images: [
          {
            path: '/assets/shared/mobile/image-xx99-mark-one-headphones.jpg',
            width: mobileBp,
          },
          {
            path: '/assets/shared/tablet/image-xx99-mark-one-headphones.jpg',
            width: tabletBp,
          },
          {
            path: '/assets/shared/desktop/image-xx99-mark-one-headphones.jpg',
          },
        ],
      },
      {
        slug: 'zx9-speaker',
        name: 'ZX9 Speaker',
        category: 'speakers',
        images: [
          {
            path: '/assets/shared/mobile/image-zx9-speaker.jpg',
            width: mobileBp,
          },
          {
            path: '/assets/shared/tablet/image-zx9-speaker.jpg',
            width: tabletBp,
          },
          {
            path: '/assets/shared/desktop/image-zx9-speaker.jpg',
          },
        ],
      },
    ],
  },
];