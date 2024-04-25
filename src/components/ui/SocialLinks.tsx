import sprite from '/assets/svgs/social-links/sprite.svg';

type SocialLinksProps = {
  className: string;
};

type TSocialLinks = {
  logoName: string;
};

const socialLinks: TSocialLinks[] = [
  { logoName: 'facebook' },
  { logoName: 'twitter' },
  { logoName: 'instagram' },
];

function SocialLinks({ className }: SocialLinksProps) {
  return (
    <ul className={className} role='list' aria-label='Social Links'>
      {socialLinks.map((link, index) => (
        <li key={index}>
          <svg className='social-icons align-center'>
            <use xlinkHref={`${sprite}#icon-${link.logoName}`}></use>
          </svg>
        </li>
      ))}
    </ul>
  );
}
export default SocialLinks;
