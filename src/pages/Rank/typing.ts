export interface CoverProps {
  coverImgUrl: string;
  updateFrequency: string;
}

export interface RankTrack {
  first: string;
  second: string;
}

export interface RankItem extends CoverProps {
  id: number;
  tracks?: RankTrack[];
}

export interface RankPayload {
  globalList: RankItem[];
  officialList: RankItem[];
}
