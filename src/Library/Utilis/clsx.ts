export const clsx = (...classes: string[]) => {
  return classes
    .filter(Boolean)
    .map((className) => className.trim())
    .join(" ");
};
