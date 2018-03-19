import request from '@/utils/request'

// 获取诗列表
export function fetchList(query) {
  return request({
    url: '/proxy/api/v1/admin/poemList',
    method: 'get',
    params: query
  })
}

// 获取诗作者列表
export function fetchList1(query) {
  return request({
    url: '/proxy/api/v1/admin/poemList',
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
