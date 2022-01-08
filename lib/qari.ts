export type QariType = {
  id: number;
  name: string;
  name_ar?: string;
  image: string;
  desc?: string;
  social?: Social;
};

export type Social = {
  youtube?: string;
  instagram?: string;
  telegram?: string;
  twitter?: string;
  web?: string;
};
