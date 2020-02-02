export enum IGradeLevel {
  GradeSeven = 7,
  GradeEight = 8,
  GradeNine = 9,
  GradeTen = 10,
  GradeEleven = 11,
  GradeTwelve = 12,
}

export interface ISection {
  gradeLevel: IGradeLevel;
  section: string;
}
