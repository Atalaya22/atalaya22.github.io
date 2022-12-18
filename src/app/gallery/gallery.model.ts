export enum ProjectName {
  FLAMEDRAMON = 'flamedramon',
  WARGREYMON = 'wargreymon',
  METALGARURUMON = 'metalgarurumon',
  CLONETROOPER = 'clonetrooper',
}

export interface ProjectDetails {
  id: ProjectName;
  displayName: string;
  coverImageSrc: string;
  nImages: number;
  // publishDate: Date;
  // description: string;
  // toolsUsed?: Tool[];
}

export const PROJECT_DETAILS: Record<ProjectName, ProjectDetails> = {
  [ProjectName.FLAMEDRAMON]: {
    id: ProjectName.FLAMEDRAMON,
    displayName: 'Flamedramon',
    nImages: 3,
    coverImageSrc: buildCoverImageSrc(ProjectName.FLAMEDRAMON),
  },
  [ProjectName.WARGREYMON]: {
    id: ProjectName.WARGREYMON,
    displayName: 'Wargreymon',
    nImages: 4,
    coverImageSrc: buildCoverImageSrc(ProjectName.WARGREYMON),
  },
  [ProjectName.METALGARURUMON]: {
    id: ProjectName.METALGARURUMON,
    displayName: 'MetalGarurumon',
    nImages: 5,
    coverImageSrc: buildCoverImageSrc(ProjectName.METALGARURUMON),
  },
  [ProjectName.CLONETROOPER]: {
    id: ProjectName.CLONETROOPER,
    displayName: 'Clone Trooper',
    nImages: 8,
    coverImageSrc: buildCoverImageSrc(ProjectName.CLONETROOPER),
  },
};

function buildCoverImageSrc(projectName: ProjectName): string {
  return `assets/images/projects/${projectName}/${projectName}0.jpg`;
}

const PROJECTS_TO_DISPLAY: ProjectName[] = [
  ProjectName.FLAMEDRAMON,
  ProjectName.WARGREYMON,
  ProjectName.METALGARURUMON,
  ProjectName.CLONETROOPER,
  ProjectName.FLAMEDRAMON,
  ProjectName.WARGREYMON,
  ProjectName.METALGARURUMON,
  ProjectName.CLONETROOPER,
  ProjectName.FLAMEDRAMON,
  ProjectName.WARGREYMON,
  ProjectName.METALGARURUMON,
  ProjectName.CLONETROOPER,
  ProjectName.FLAMEDRAMON,
  ProjectName.WARGREYMON,
  ProjectName.METALGARURUMON,
];

export const PROJECTS_TO_DISPLAY_INFO: ProjectDetails[] = PROJECTS_TO_DISPLAY.map(
  projectName => PROJECT_DETAILS[projectName]
);
