
export interface Collection {
    id: any;
    displayedName: string;
    author: string;
    tracks: Track [];
  }
  
  export interface Track {
    id: any;
    name: string;
    artists: Artist[];
    duration: number;
  }
  
  export interface Artist {
    id: any;
    name: string;
  }