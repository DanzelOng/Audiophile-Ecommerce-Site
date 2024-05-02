import rightArrow from '/assets/svgs/icon-arrow-right.svg';
import headphoneImg from '/assets/navigation-imgs/image-category-thumbnail-headphones.png';
import speakerImg from '/assets/navigation-imgs/image-category-thumbnail-speakers.png';
import earphoneImg from '/assets/navigation-imgs/image-category-thumbnail-earphones.png';

export const categoryMetaInfo = {
  headphones:
    'Dive into pristine sound with our premium headphone range. Discover comfort and clarity for your listening pleasure.',
  speakers:
    'Elevate your sound experience with our premium speaker collection. Explore precision-engineered models for every space.',
  earphones:
    'Experience clarity on-the-go with our premium earphones. Crafted for comfort and quality sound.',
};

export type TMetaInfo = typeof categoryMetaInfo;

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

type Product = {
  id: number;
  slug: string;
  name: string;
  cartName: string;
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

export const headphones: Product[] = [
  {
    id: 1,
    slug: 'xx99-mark-two-headphones',
    name: 'XX99 Mark II Headphones',
    cartName: 'XX99 MK II',
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
    cartName: 'XX99 MK I',
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
    cartName: 'XX59',
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

export const speakers: Product[] = [
  {
    id: 1,
    slug: 'zx9-speaker',
    name: 'ZX9 Speaker',
    cartName: 'ZX9',
    new: true,
    price: 4500,
    description:
      'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
    features:
      'Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).\nDiscover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.',
    includes: [
      {
        quantity: 2,
        item: 'Speaker unit',
      },
      {
        quantity: 2,
        item: 'Speaker cloth panel',
      },
      {
        quantity: 1,
        item: 'User manual',
      },
      {
        quantity: 1,
        item: '3.5mm 10m audio cable',
      },
      {
        quantity: 1,
        item: '10m optical cable',
      },
    ],
    images: [
      {
        path: '/assets/product-zx9-speaker/mobile/image-product.jpg',
        width: mobileBp,
      },
      {
        path: '/assets/product-zx9-speaker/tablet/image-product.jpg',
        width: tabletBp,
      },
      {
        path: '/assets/product-zx9-speaker/desktop/image-product.jpg',
      },
    ],
    preview: [
      {
        path: '/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg',
        width: mobileBp,
      },
      {
        path: '/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg',
        width: tabletBp,
      },
      {
        path: '/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg',
      },
    ],
    gallery: [
      {
        attribute: 'first',
        images: [
          {
            path: '/assets/product-zx9-speaker/mobile/image-gallery-1.jpg',
            width: mobileBp,
          },
          {
            path: '/assets/product-zx9-speaker/tablet/image-gallery-1.jpg',
            width: tabletBp,
          },
          {
            path: '/assets/product-zx9-speaker/desktop/image-gallery-1.jpg',
          },
        ],
      },
      {
        attribute: 'second',
        images: [
          {
            path: '/assets/product-zx9-speaker/mobile/image-gallery-2.jpg',
            width: mobileBp,
          },
          {
            path: '/assets/product-zx9-speaker/tablet/image-gallery-2.jpg',
            width: mobileBp,
          },
          {
            path: '/assets/product-zx9-speaker/desktop/image-gallery-2.jpg',
          },
        ],
      },
      {
        attribute: 'third',
        images: [
          {
            path: '/assets/product-zx9-speaker/mobile/image-gallery-3.jpg',
            width: mobileBp,
          },
          {
            path: '/assets/product-zx9-speaker/tablet/image-gallery-3.jpg',
            width: tabletBp,
          },
          {
            path: '/assets/product-zx9-speaker/desktop/image-gallery-3.jpg',
          },
        ],
      },
    ],
    other: [
      {
        slug: 'zx7-speaker',
        name: 'ZX7 Speaker',
        category: 'speakers',
        images: [
          {
            path: '/assets/shared/mobile/image-zx7-speaker.jpg',
            width: mobileBp,
          },
          {
            path: '/assets/shared/tablet/image-zx7-speaker.jpg',
            width: tabletBp,
          },
          {
            path: '/assets/shared/desktop/image-zx7-speaker.jpg',
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
    ],
  },
  {
    id: 2,
    slug: 'zx7-speaker',
    name: 'ZX7 Speaker',
    cartName: 'ZX7',
    new: false,
    price: 3500,
    description:
      'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
    features:
      'Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.\nThe ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.',
    includes: [
      {
        quantity: 2,
        item: 'Speaker unit',
      },
      {
        quantity: 2,
        item: 'Speaker cloth panel',
      },
      {
        quantity: 1,
        item: 'User manual',
      },
      {
        quantity: 1,
        item: '3.5mm 7.5m audio cable',
      },
      {
        quantity: 1,
        item: '7.5m optical cable',
      },
    ],
    images: [
      {
        path: '/assets/product-zx7-speaker/mobile/image-product.jpg',
        width: mobileBp,
      },
      {
        path: '/assets/product-zx7-speaker/tablet/image-product.jpg',
        width: tabletBp,
      },
      {
        path: '/assets/product-zx7-speaker/desktop/image-product.jpg',
      },
    ],
    preview: [
      {
        path: '/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg',
        width: mobileBp,
      },
      {
        path: '/assets/product-zx7-speaker/tablet/image-category-page-preview.jpg',
        width: tabletBp,
      },
      {
        path: '/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg',
      },
    ],
    gallery: [
      {
        attribute: 'first',
        images: [
          {
            path: '/assets/product-zx7-speaker/mobile/image-gallery-1.jpg',
            width: mobileBp,
          },
          {
            path: '/assets/product-zx7-speaker/tablet/image-gallery-1.jpg',
            width: tabletBp,
          },
          {
            path: '/assets/product-zx7-speaker/desktop/image-gallery-1.jpg',
          },
        ],
      },
      {
        attribute: 'second',
        images: [
          {
            path: '/assets/product-zx7-speaker/mobile/image-gallery-2.jpg',
            width: mobileBp,
          },
          {
            path: '/assets/product-zx7-speaker/tablet/image-gallery-2.jpg',
            width: mobileBp,
          },
          {
            path: '/assets/product-zx7-speaker/desktop/image-gallery-2.jpg',
          },
        ],
      },
      {
        attribute: 'third',
        images: [
          {
            path: '/assets/product-zx7-speaker/mobile/image-gallery-3.jpg',
            width: mobileBp,
          },
          {
            path: '/assets/product-zx7-speaker/tablet/image-gallery-3.jpg',
            width: tabletBp,
          },
          {
            path: '/assets/product-zx7-speaker/desktop/image-gallery-3.jpg',
          },
        ],
      },
    ],
    other: [
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
    ],
  },
];

export const earphones: Product[] = [
  {
    id: 1,
    slug: 'yx1-wireless-earphones',
    name: 'YX1 Wireless Earphones',
    cartName: 'YX1',
    new: true,
    price: 599,
    description:
      'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
    features:
      'Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.\nThe YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.',
    includes: [
      {
        quantity: 2,
        item: 'Earphone unit',
      },
      {
        quantity: 6,
        item: 'Multi-size earplugs',
      },
      {
        quantity: 1,
        item: 'User manual',
      },
      {
        quantity: 1,
        item: 'USB-C charging cable',
      },
      {
        quantity: 1,
        item: 'Travel pouch',
      },
    ],
    images: [
      {
        path: '/assets/product-yx1-earphones/mobile/image-product.jpg',
        width: mobileBp,
      },
      {
        path: '/assets/product-yx1-earphones/tablet/image-product.jpg',
        width: tabletBp,
      },
      {
        path: '/assets/product-yx1-earphones/desktop/image-product.jpg',
      },
    ],
    preview: [
      {
        path: '/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg',
        width: mobileBp,
      },
      {
        path: '/assets/product-yx1-earphones/tablet/image-category-page-preview.jpg',
        width: tabletBp,
      },
      {
        path: '/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg',
      },
    ],
    gallery: [
      {
        attribute: 'first',
        images: [
          {
            path: '/assets/product-yx1-earphones/mobile/image-gallery-1.jpg',
            width: mobileBp,
          },
          {
            path: '/assets/product-yx1-earphones/tablet/image-gallery-1.jpg',
            width: tabletBp,
          },
          {
            path: '/assets/product-yx1-earphones/desktop/image-gallery-1.jpg',
          },
        ],
      },
      {
        attribute: 'second',
        images: [
          {
            path: '/assets/product-yx1-earphones/mobile/image-gallery-2.jpg',
            width: mobileBp,
          },
          {
            path: '/assets/product-yx1-earphones/tablet/image-gallery-2.jpg',
            width: mobileBp,
          },
          {
            path: '/assets/product-yx1-earphones/desktop/image-gallery-2.jpg',
          },
        ],
      },
      {
        attribute: 'third',
        images: [
          {
            path: '/assets/product-yx1-earphones/mobile/image-gallery-3.jpg',
            width: mobileBp,
          },
          {
            path: '/assets/product-yx1-earphones/tablet/image-gallery-3.jpg',
            width: tabletBp,
          },
          {
            path: '/assets/product-yx1-earphones/desktop/image-gallery-3.jpg',
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
];

export const getProducts = {
  headphones,
  speakers,
  earphones,
};
