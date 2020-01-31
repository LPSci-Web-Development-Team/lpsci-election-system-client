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
  Treauser = 'Treasurer',
  Auditor = 'Auditor',
  PeaceOfficer = 'Peace Officer',
  PublicInformationOfficer = 'Public Information Officer',
  GradeEightLevelRepresentative = 'Grade 8 Level Representative',
  GradeNineLevelRepresentative = 'Grade 9 Representative',
  GradeTenLevelRepresentative = 'Grade 10 Level Representative',
  GradeElevenLevelRepresentative = 'Grade 11 Level Representative',
  GradeTwelveLevelRepresentative = 'Grade 12 Level Representative',
}

export interface IParty {
  partyName: string;
  colorHex: string;
}
