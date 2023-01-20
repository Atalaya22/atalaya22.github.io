export const MAX_PROJECTS_DISPLAY = 12;

export enum ProjectName {
  DITTO = 'ditto',
  FLAMEDRAMON = 'flamedramon',
  WARGREYMON = 'wargreymon',
  METALGARURUMON = 'metalgarurumon',
  CLONETROOPER = 'clonetrooper',
  DESCEND_THROUGH_CARCERUM = 'descend-through-carcerum',
  DRAG_THEM_OUT_INTO_SPACE = 'drag-them-out-into-space',
  FFVII_SWORD = 'ffvii-sword',
  HAND_DRAWN = 'hand-drawn',
  LAST_TRAVEL = 'last-travel',
  OVERWATCH = 'overwatch',
  SPIDERMAN = 'spiderman',
  VOXEL_LEGO = 'voxel-lego',
  ZELDA_LINK = 'zelda-link',
  CYBERPUNK = 'cyberpunk',
  DIGIMON = 'digimon',
  ENDLESS_DUNGEON = 'endless-dungeon',
  KH = 'kh',
  SELFPORTRAIT = 'selfportrait',
  THRESH = 'thresh',
  ZELDA_ROOM = 'zelda-room',
  DARK_DESCENDANT = 'dark-descendant',
  DRAGONBALL = 'dragonball',
  EVANGELION = 'evangelion',
  GOT_DRAGON = 'got-dragon',
  KIKYO = 'kikyo',
  NARUTO = 'naruto',
  SMOKEFIGHTER = 'smokefighter',
  UNITY_LIGHTS = 'unity-lights',
  YU_GI_OH = 'yu-gi-oh',
}

export class SketchfabInfo {
  constructor(
    public title: string,
    /** (!) Remember to add the `/embed?autostart=1` at the end */
    public src: string
  ) {}
}

export class YoutubeVideoInfo {
  constructor(
    public title: string,
    /** (!) Remember to add the `?autoplay=1` at the end */
    public src: string
  ) {}
}

export interface ProjectDetails {
  id: ProjectName;
  displayName: string;
  nImages: number;
  videoInfo?: YoutubeVideoInfo;
  sketchfabInfo?: SketchfabInfo;
  tags?: ProjectTag[];
}

export enum ProjectTag {
  THREE_D = '3d',
  ART = 'Art',
  DESIGN = 'Design',
  DEVELOPMENT = 'Development',
  GRAPHICS = 'Graphics',
  ILLUSTRATION = 'Illustration',
  MULTIMEDIA = 'Multimedia',
  VIDEO = 'Video',
  ANIME = 'Anime',
  FAN_ART = 'Fan Art',
  GAME_JAM = 'Game Jam',
  MANGA = 'Manga',
  PROPS = 'Props',
  VIDEOGAME = 'Videogame',
  DIGIMON = 'Digimon',
}

export const PROJECT_DETAILS: Record<ProjectName, ProjectDetails> = {
  [ProjectName.DITTO]: {
    id: ProjectName.DITTO,
    displayName: 'Ditto',
    nImages: 2,
    tags: [ProjectTag.THREE_D, ProjectTag.FAN_ART, ProjectTag.ANIME],
    sketchfabInfo: new SketchfabInfo(
      "Ditto メタモン (Metamon)",
      "https://sketchfab.com/models/612e0be1914d4209b61b821aaf4529c4/embed?autostart=1"
    )
  },
  [ProjectName.FLAMEDRAMON]: {
    id: ProjectName.FLAMEDRAMON,
    displayName: 'Flamedramon',
    nImages: 3,
    tags: [ProjectTag.THREE_D, ProjectTag.FAN_ART, ProjectTag.MANGA, ProjectTag.DIGIMON],
  },
  [ProjectName.WARGREYMON]: {
    id: ProjectName.WARGREYMON,
    displayName: 'Wargreymon',
    nImages: 4,
    tags: [ProjectTag.THREE_D, ProjectTag.FAN_ART, ProjectTag.MANGA, ProjectTag.DIGIMON],
  },
  [ProjectName.METALGARURUMON]: {
    id: ProjectName.METALGARURUMON,
    displayName: 'MetalGarurumon',
    nImages: 5,
    tags: [ProjectTag.THREE_D, ProjectTag.FAN_ART, ProjectTag.MANGA, ProjectTag.DIGIMON],
  },
  [ProjectName.CLONETROOPER]: {
    id: ProjectName.CLONETROOPER,
    displayName: 'Clone Trooper',
    nImages: 8,
    tags: [ProjectTag.THREE_D, ProjectTag.FAN_ART],
  },
  [ProjectName.DESCEND_THROUGH_CARCERUM]: {
    id: ProjectName.DESCEND_THROUGH_CARCERUM,
    displayName: 'Descend Through Carcerum',
    nImages: 8,
    videoInfo: new YoutubeVideoInfo(
      'Descend through Carcerum Teaser Trailer',
      'https://www.youtube.com/embed/I9Gw-kn_eSE?autoplay=1'
    ),
    tags: [ProjectTag.THREE_D, ProjectTag.VIDEOGAME, ProjectTag.VIDEO, ProjectTag.DEVELOPMENT],
  },
  [ProjectName.DRAG_THEM_OUT_INTO_SPACE]: {
    id: ProjectName.DRAG_THEM_OUT_INTO_SPACE,
    displayName: 'Drag Them Out Into Space',
    nImages: 6,
    tags: [ProjectTag.THREE_D, ProjectTag.GAME_JAM, ProjectTag.VIDEOGAME, ProjectTag.DEVELOPMENT],
  },
  [ProjectName.FFVII_SWORD]: {
    id: ProjectName.FFVII_SWORD,
    displayName: 'Final Fantasy VII Sword',
    nImages: 2,
    sketchfabInfo: new SketchfabInfo(
      'Cloud Sword FFVII',
      'https://sketchfab.com/models/ccd4423cfd1c46beb54aa3436b193a0c/embed?autostart=1'
    ),
    tags: [ProjectTag.THREE_D, ProjectTag.PROPS, ProjectTag.VIDEOGAME],
  },
  [ProjectName.HAND_DRAWN]: {
    id: ProjectName.HAND_DRAWN,
    displayName: 'Hand Drawings',
    nImages: 4,
    tags: [ProjectTag.ART, ProjectTag.FAN_ART, ProjectTag.ANIME],
  },
  [ProjectName.LAST_TRAVEL]: {
    id: ProjectName.LAST_TRAVEL,
    displayName: 'Last Travel',
    nImages: 5,
    tags: [ProjectTag.ART, ProjectTag.FAN_ART, ProjectTag.DEVELOPMENT, ProjectTag.ILLUSTRATION],
  },
  [ProjectName.OVERWATCH]: {
    id: ProjectName.OVERWATCH,
    displayName: 'Overwatch',
    nImages: 2,
    tags: [ProjectTag.FAN_ART, ProjectTag.VIDEOGAME, ProjectTag.ART],
  },
  [ProjectName.SPIDERMAN]: {
    id: ProjectName.SPIDERMAN,
    displayName: 'Spiderman drawings',
    nImages: 3,
    tags: [ProjectTag.ART, ProjectTag.FAN_ART, ProjectTag.MULTIMEDIA],
  },
  [ProjectName.VOXEL_LEGO]: {
    id: ProjectName.VOXEL_LEGO,
    displayName: 'Voxel LEGO',
    nImages: 4,
    tags: [ProjectTag.THREE_D, ProjectTag.GRAPHICS],
  },
  [ProjectName.ZELDA_LINK]: {
    id: ProjectName.ZELDA_LINK,
    displayName: 'Zelda Link',
    nImages: 1,
    tags: [ProjectTag.FAN_ART, ProjectTag.THREE_D, ProjectTag.VIDEOGAME],
  },
  [ProjectName.CYBERPUNK]: {
    id: ProjectName.CYBERPUNK,
    displayName: 'Cyberpunk Drawing',
    nImages: 1,
    tags: [ProjectTag.ART, ProjectTag.FAN_ART, ProjectTag.ILLUSTRATION],
  },
  [ProjectName.DIGIMON]: {
    id: ProjectName.DIGIMON,
    displayName: 'Digimon Drawing',
    nImages: 1,
    tags: [ProjectTag.ART, ProjectTag.FAN_ART, ProjectTag.DIGIMON],
  },
  [ProjectName.ENDLESS_DUNGEON]: {
    id: ProjectName.ENDLESS_DUNGEON,
    displayName: 'Endless Dungeon',
    nImages: 4,
    tags: [ProjectTag.GAME_JAM, ProjectTag.VIDEOGAME, ProjectTag.DEVELOPMENT],
  },
  [ProjectName.KH]: {
    id: ProjectName.KH,
    displayName: 'Kingdom Hearts Drawing',
    nImages: 1,
    tags: [ProjectTag.VIDEOGAME, ProjectTag.ART, ProjectTag.FAN_ART, ProjectTag.ILLUSTRATION],
  },
  [ProjectName.SELFPORTRAIT]: {
    id: ProjectName.SELFPORTRAIT,
    displayName: 'Self Portrait',
    nImages: 2,
    tags: [ProjectTag.ART, ProjectTag.DESIGN, ProjectTag.ILLUSTRATION],
  },
  [ProjectName.THRESH]: {
    id: ProjectName.THRESH,
    displayName: 'Thresh and Nasus Drawing',
    nImages: 1,
    tags: [ProjectTag.ANIME, ProjectTag.ART, ProjectTag.FAN_ART],
  },
  [ProjectName.ZELDA_ROOM]: {
    id: ProjectName.ZELDA_ROOM,
    displayName: 'Zelda Room Recreation',
    nImages: 3,
    tags: [ProjectTag.THREE_D, ProjectTag.VIDEOGAME, ProjectTag.DESIGN],
  },
  [ProjectName.DARK_DESCENDANT]: {
    id: ProjectName.DARK_DESCENDANT,
    displayName: 'Dark Descendant',
    nImages: 6,
    videoInfo: new YoutubeVideoInfo(
      'Dark Descendant - Trailer',
      'https://www.youtube.com/embed/2yAUf-qrvn0?autoplay=1'
    ),
    tags: [ProjectTag.THREE_D, ProjectTag.VIDEOGAME, ProjectTag.VIDEO, ProjectTag.DEVELOPMENT],
  },
  [ProjectName.DRAGONBALL]: {
    id: ProjectName.DRAGONBALL,
    displayName: 'Dragonball Drawing',
    nImages: 1,
    tags: [ProjectTag.ANIME, ProjectTag.ART, ProjectTag.FAN_ART, ProjectTag.MANGA],
  },
  [ProjectName.EVANGELION]: {
    id: ProjectName.EVANGELION,
    displayName: 'Evangelion Drawing',
    nImages: 2,
    tags: [ProjectTag.ANIME, ProjectTag.ART, ProjectTag.FAN_ART, ProjectTag.ILLUSTRATION],
  },
  [ProjectName.GOT_DRAGON]: {
    id: ProjectName.GOT_DRAGON,
    displayName: 'Game of Thrones Low Poly Dragon',
    nImages: 2,
    tags: [ProjectTag.THREE_D, ProjectTag.GRAPHICS],
  },
  [ProjectName.KIKYO]: {
    id: ProjectName.KIKYO,
    displayName: 'Kikyo Fan Art',
    nImages: 1,
    tags: [ProjectTag.ANIME, ProjectTag.ART, ProjectTag.FAN_ART, ProjectTag.MANGA],
  },
  [ProjectName.NARUTO]: {
    id: ProjectName.NARUTO,
    displayName: 'Naruto Fan Art',
    nImages: 1,
    tags: [ProjectTag.ANIME, ProjectTag.ART, ProjectTag.FAN_ART, ProjectTag.MANGA],
  },
  [ProjectName.SMOKEFIGHTER]: {
    id: ProjectName.SMOKEFIGHTER,
    displayName: 'Smokefighter',
    nImages: 4,
    tags: [ProjectTag.GAME_JAM, ProjectTag.VIDEOGAME, ProjectTag.DEVELOPMENT],
  },
  [ProjectName.UNITY_LIGHTS]: {
    id: ProjectName.UNITY_LIGHTS,
    displayName: 'Unity Lights Scene',
    nImages: 2,
    tags: [ProjectTag.GRAPHICS, ProjectTag.VIDEOGAME, ProjectTag.DEVELOPMENT],
  },
  [ProjectName.YU_GI_OH]: {
    id: ProjectName.YU_GI_OH,
    displayName: 'Yu-Gi-Oh Wall Painting',
    nImages: 2,
    tags: [ProjectTag.ANIME, ProjectTag.THREE_D, ProjectTag.MANGA, ProjectTag.FAN_ART, ProjectTag.GRAPHICS],
  },
};

const PROJECTS_TO_DISPLAY: ProjectName[] = Object.keys(PROJECT_DETAILS).map(v => v as ProjectName);

export const PROJECTS_TO_DISPLAY_INFO: ProjectDetails[] = PROJECTS_TO_DISPLAY.map(
  projectName => PROJECT_DETAILS[projectName]
);

export enum ShowMode {
  ALL,
  SOME
}
