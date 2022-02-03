export interface Event {
  artist?: Artist;
  datetime: string;
  description: string;
  id: string;
  title: string;
  offers: { status: string; type: string; url: string }[];
  lineup?: string[];
  venue: {
    name: string;
    location: string;
  };
}

export interface Artist {
  image_url: string;
  name: string;
  upcoming_event_count: number;
  links?: { type: string; url: string }[];
}

export interface ApiErrorMessage {
  errorMessage: string;
}
