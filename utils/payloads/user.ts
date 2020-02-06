export enum GradeLevel {
  GradeSeven = 7,
  GradeEight = 8,
  GradeNine = 9,
  GradeTen = 10,
  GradeEleven = 11,
  GradeTwelve = 12,
}

export interface ISignUpPayload {
  readonly lrn: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly password: string;
  readonly gradeLevel: GradeLevel | undefined;
  readonly sectionId: string;
  readonly isAdmin: boolean;
}
