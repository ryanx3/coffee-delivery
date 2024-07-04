export function priceFormatter(value: number) {
  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  });
}

// const regexCEP = /^\d{5}-\d{3}$/;
