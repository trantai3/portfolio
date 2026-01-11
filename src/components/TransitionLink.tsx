import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Link, useNavigate } from 'react-router-dom';
import React, { ComponentProps } from 'react';

interface Props extends Omit<ComponentProps<typeof Link>, 'to'> {
  href: string;
  back?: boolean;
}

gsap.registerPlugin(useGSAP);

const TransitionLink = ({
  href,
  onClick,
  children,
  back = false,
  ...rest
}: Props) => {
  const navigate = useNavigate();

  const { contextSafe } = useGSAP(() => { });

  const handleLinkClick = contextSafe(
    async (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      gsap.set('.page-transition', { yPercent: 100 });
      gsap.set('.page-transition--inner', { yPercent: 100 });

      const tl = gsap.timeline();

      tl.to('.page-transition', {
        yPercent: 0,
        duration: 0.3,
      });

      tl.then(() => {
        if (back) {
          navigate(-1);
        } else if (href) {
          navigate(href);
        } else if (onClick) {
          onClick(e as any);
        }
      });
    },
  );

  return (
    <Link to={href} {...rest} onClick={handleLinkClick}>
      {children}
    </Link>
  );
};

export default TransitionLink;
