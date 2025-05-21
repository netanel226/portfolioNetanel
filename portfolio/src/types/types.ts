export interface Media {
  type: 'image' | 'video';
  url: string;
  alt?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  media: Media[];
  githubUrl?: string;
  liveUrl?: string;
  buildProcess: string;
}

export interface Section {
  id: string;
  title: string;
  projects: Project[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Theme {
  direction: 'ltr' | 'rtl';
  palette: {
    mode: 'light' | 'dark';
    primary: {
      main: string;
    };
    secondary: {
      main: string;
    };
    background: {
      default: string;
      paper: string;
    };
    text: {
      primary: string;
      secondary: string;
    };
  };
} 