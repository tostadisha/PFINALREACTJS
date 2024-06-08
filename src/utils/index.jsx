export const currencyFormatter = (amount) => {
  return amount.toLocaleString("es-ar", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2,
  });
};
