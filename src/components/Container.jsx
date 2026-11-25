// The one horizontal layout box for the page chrome: the navbar card and the hero both live inside it,
// so their left and right edges always line up. Change the width/padding here and everything follows.
export const CONTAINER_CLASS = 'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8';

const Container = ({ as: Tag = 'div', className = '', children, ...props }) => (
  <Tag className={`${CONTAINER_CLASS} ${className}`.trim()} {...props}>
    {children}
  </Tag>
);

export default Container;
