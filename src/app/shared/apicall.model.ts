export interface apicallModel {
  movieTitle:string;
  type?: 'movie'| 'series' | 'episode'
  yearOfRelease?:number;
}