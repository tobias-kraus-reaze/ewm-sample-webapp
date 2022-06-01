class GeoLocation {
  longitude: string = '';
  latitude: string = '';
}

class Location {
  name: string = '';
  geoLocation: GeoLocation = new GeoLocation();
  street: string = '';
  city: string = '';
  zip: string = '';
}

class Tag {
  name: string = '';
}

export class EventModel {
  id: number = 0;
  tags: Array<Tag> = [];
  topline: string = '';
  headline: string = '';
  introduction: string = '';
  date: string = '';
  timeStart: string = '';
  timeEnd: string = '';
  slug: string = '';
  eventLanguage: string = '';
  options: {[k: string]: any} = {};
  seoTitle: string = '';
  seoDescription: string = '';
  seoKeywords: string = '';
  inheritMetadata: boolean = false;
  location: Location = new Location();
  page: any;
  media: any;
  pageGql: PageGql = new PageGql();
  image: any;
  video: any;
  type?: string;
}

// GraphQL specific models
class PageGql {
  fullpath: string = '';
}
