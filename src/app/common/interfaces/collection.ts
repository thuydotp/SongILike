
export interface Collection {
    id: any;
    displayedName: string;
    author: string;
    tracks: Track [];
    coverImage: string;
    _coverImageURL: string;
    _numberOfTracks: string;
  }
  
  export interface Track {
    id: any;
    name: string;
    artists: Artist[];
    duration: number;
    coverImage: string;
    _displayedDuration: string;
    _coverImageURL: string;
  }
  
  export interface Artist {
    id: any;
    name: string;
    coverImage: string;
    _coverImageURL: string;
  }