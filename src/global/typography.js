export const typography = {
  primary: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
};

export function content(type) {
  switch (type) {
    case "xl":
      return `
      font-size: 1.25rem;
      line-height: 1.75rem;
      `;
    case "lg":
      return `
      font-size: 1.125rem;
      line-height: 1.75rem;
      `;
    case "sm":
      return `
      font-size: 0.875rem;
      line-height: 1.25rem;
      `;
    case "xs":
      return `
      font-size: 0.75rem;
      line-height: 1rem;
      `;
    default:
      return `
      font-size: 1rem;
      line-height: 1.5rem;
      `;
  }
}

export function textWeight(type) {
  switch (type) {
    case "medium":
      return `
      font-weight: 500;
      `;
    case "semiBold":
      return `
      font-weight: 600;
      `;
    case "bold":
      return `
      font-weight: 600;
      `;
    default:
      break;
  }
}
