import request from '@/utils/request'

// 获取七牛图片分页列表
export function fetchQnImgList(query) {
  return request({
    url: '/proxy/api/v1/admin/qnImgList',
    method: 'get',
    params: query
  })
}

// 获取诗集分页列表
export function fetchCollectionList(query) {
  return request({
    url: '/proxy/api/v1/admin/collectionList',
    method: 'get',
    params: query
  })
}

export function fetchArticle() {
  return request({
    url: '/article/detail',
    method: 'get'
  })
}

export function fetchPv(pv) {
  return request({
    url: '/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/article/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/article/update',
    method: 'post',
    data
  })
}
