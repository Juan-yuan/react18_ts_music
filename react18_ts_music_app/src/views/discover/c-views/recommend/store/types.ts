export interface IBannerData {
  imageUrl: string
  targetId: number
  targetType: number
  titleColor: string
  typeTitle: string
  url: string
  exclusive: boolean
  scm: string
  bannerBizType: string
}

export interface IRecommendState {
  banners: IBannerData[]
  hotRecommends: any[]
  newAlbums: any[]
}
