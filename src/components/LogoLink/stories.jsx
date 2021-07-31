import { LogoLink } from '.';

export default {
  title: 'LogoLink',
  component: LogoLink,
};

export const ImageLogo = () => {
  return (
    <div>
      <LogoLink text="Minha logo" srcImg="assets/images/logo-lp.svg" link="#" />
    </div>
  );
};

export const TextLogo = () => {
  return (
    <div>
      <LogoLink text="Minha logo" link="#" />
    </div>
  );
};
