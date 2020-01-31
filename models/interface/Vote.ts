export interface ICandidate {
  firstName: string;
  lastName: string;
  party: IParty;
  position: IPosition;
  imageURL: string;
}

export enum IPosition {
  President = 'President',
  VicePresident = 'Vice President',
  Secretary = 'Secretary',
  Treasurer = 'Treasurer',
  Auditor = 'Auditor',
  PeaceOfficer = 'Peace Officer',
  PublicInformationOfficer = 'P.I.O',
  GradeEightLevelRepresentative = 'Level Rep (8)',
  GradeNineLevelRepresentative = 'Level Rep (9)',
  GradeTenLevelRepresentative = 'Level Rep (10)',
  GradeElevenLevelRepresentative = 'Level Rep (11)',
  GradeTwelveLevelRepresentative = 'Level Rep (12)',
}

export interface IParty {
  name: string;
  colorHex: string;
}
