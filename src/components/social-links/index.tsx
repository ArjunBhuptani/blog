import { useMemo, type CSSProperties } from 'react';
import classNames from 'classnames';
import slateConfig from '~@/slate.config';
import type { SocialLink } from '@/typings/config';
import './index.css';

export interface SocialLinksProps {
  className?: string;
  list?: SocialLink[];
}

interface SocialIconProps {
  className?: string;
  style?: CSSProperties;
}

function SocialIcon({ className, style }: SocialIconProps) {
  const classes = classNames('sb-social-icon', className);
  return <span className={classes} style={style}></span>;
}

function SocialLinks(props: SocialLinksProps) {
  const { className, list = slateConfig.socialLinks ?? [] } = props;

  const classes = classNames('flex items-center gap-6 flex-wrap', className);

  const socialLinks = useMemo(() => {
    return list.map((item) => {
      let icon;
      if (typeof item.icon !== 'string') {
        const iconBase64 = `data:image/svg+xml;base64,${btoa(item.icon.svg)}`;
        // @ts-expect-error ''--icon'' does not exist in type CSSProperties
        icon = <SocialIcon style={{ '--icon': `url(${iconBase64})` }} />;
      } else {
        icon = <SocialIcon className={item.icon} />;
      }

      return {
        ...item,
        icon,
      };
    });
  }, [list]);

  return (
    <section className={classes}>
      {socialLinks.map((socialLink, index) => (
        <a
          className="h-5 w-5 cursor-pointer text-slate10 hover:text-slate12 transition-all"
          href={socialLink.link}
          target="_blank"
          rel="noopener"
          aria-label={socialLink.ariaLabel}
          key={index}
        >
          {socialLink.icon}
        </a>
      ))}
    </section>
  );
}

export default SocialLinks;
