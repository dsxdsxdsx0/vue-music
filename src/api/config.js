// 常用请求配置项
export const  commonParams = {
  g_tk: 1928093487,
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0,
  format: 'jsonp'
}

export const options = {
  /**
   * 注意是param，不是params，否则会导致回调函数返回的参数不正确，
   * 因为没有按照服务器的要求，将返回jsonp的数据正确的拼接到回调函数的参数中
   * 参照完整的请求链接:
   * https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=1928093487
   * &inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&platform=h5
   * &uin=0&needNewCode=1&jsonpCallback=jp0
   */
  param: 'jsonpCallback',
  prefix: 'jp'
}

export const ERR_OK = 0
