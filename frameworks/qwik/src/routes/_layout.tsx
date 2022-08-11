import { component$, Host, Slot } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { AppHeader as AppHeader_ } from '../components/generated-components';

export const AppHeader: any = AppHeader_;

export default component$(() => {
  const { pathname } = useLocation();

  return (
    <Host>
      <AppHeader framework="qwik" path={pathname} />
      <Slot />
    </Host>
  );
});
