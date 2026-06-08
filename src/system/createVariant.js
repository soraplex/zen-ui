export function createVariant(config) {
  const { base, variants = {}, defaultVariants = {} } = config;

  return function getClasses(props = {}) {
    const classes = [base];

    Object.entries(variants).forEach(([variantName, variantValues]) => {
      const value = props[variantName] ?? defaultVariants[variantName];
      if (!value) return;
      const variantClass = variantValues[value];
      if (variantClass) classes.push(variantClass);
    });

    return classes.join(" ");
  };
}