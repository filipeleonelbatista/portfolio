
import { jsx, NavLink as MenuLink, Link as A } from 'theme-ui';

export function NavLink({ path, label, children, ...rest }) {
  return (
    <a href={path}>
      <MenuLink {...rest}>{children ? children : label}</MenuLink>
    </a>
  );
}
export function Link({ path, label, children, ...rest }) {
  return (
    <a href={path}>
      <A {...rest}>{children ? children : label}</A>
    </a>
  );
}
