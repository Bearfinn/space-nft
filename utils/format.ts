export const shortenAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(address.length - 4)}`;
};

export const formatNumber = (number: any) => {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(
    number
  );
};
