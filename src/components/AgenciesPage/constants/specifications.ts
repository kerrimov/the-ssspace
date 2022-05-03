enum Specification {
  TYPE = 'Type',
  ADMINISTRATOR = 'Administrator',
  COUNTRY_CODE = 'Country Code',
  LAUNCHERS = 'Launchers',
  SPACECRAFT = 'Spacecraft',
}

export const specificationHeadings: Specification[] = [
  Specification.TYPE,
  Specification.ADMINISTRATOR,
  Specification.COUNTRY_CODE,
  Specification.LAUNCHERS,
  Specification.SPACECRAFT,
];

export const specificationValueMapping: { [key: string]: string } = {
  [Specification.TYPE]: 'type',
  [Specification.ADMINISTRATOR]: 'administrator',
  [Specification.COUNTRY_CODE]: 'country_code',
  [Specification.LAUNCHERS]: 'launchers',
  [Specification.SPACECRAFT]: 'spacecraft',
};
