interface Setting {
  id: string;
  label: string;
  value: boolean;
}

export const settings: Setting[] = [
  {
    id: 'trimBreaks',
    label: 'remove breaks between same class and merge it into one event',
    value: true,
  },
];
