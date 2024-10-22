// 接口响应数据类型
export interface AxiosResData<T> {
  data: T;
  message: string;
}
// 频道接口响应数据
export interface ChannelResData {
  channels: ChannelItem[];
}
// 频道对象
export interface ChannelItem {
  id: number;
  name: string;
}

// 文章对象
export interface ArticleItem {
  art_id: string;
  aut_id: string;
  aut_name: string;
  comm_count: number;
  cover: {
    cover: number;
    images: string[];
  };
  is_top: number;
  pubdate: string;
  title: string;
}

// 文章接口响应数据
export interface ArticleResData {
  pre_timestamp: string;
  results: ArticleItem[];
}
