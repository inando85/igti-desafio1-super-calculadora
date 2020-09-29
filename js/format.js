const formatCurrency = (value) => {
  return Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(value)
}

const formatNumber = (value) => {
  return Intl.NumberFormat("pt-BR", { maximumFractionDigits: 2 }).format(value)
}

const formatNumberInteger = (value) => {
  return parseInt(+value, 10)
}

const formatPercent = (value) => {
  return value.toFixed(2).replace(".", ",") + "%"
}

export { formatCurrency, formatNumber, formatNumberInteger, formatPercent }