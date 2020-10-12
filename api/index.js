import request from './request.js';
const url = 'http://api.weido.top/api';

<<<<<<< HEAD
/* 获取所有分类  */
=======
/* 获取所有分类 */
>>>>>>> 2ce4292b66c028087e0345f66b4c86fdd1840ec2
export const CategoryList = () => request(`${url}/book/category/list`);

/* 根据分类id查询图书信息 */
export const BookList = (cid,page = 1,rows =6) => request(`${url}/book/books/pageByCid`,{cid,page,rows});

/* 根据图书id查找图书 */
export const Book = (bid) => request(`${url}/book/books/bid/`+bid) 

/* 根据章节id获取章节主要信息 */
export const Chapters = ({bid,page,rows}) => request(`${url}/book/chapter/page`,{bid,page,rows});

 /* 根据章节id查询章节信息 */
export const Chapter = ({cid}) => request(`${url}/book//chapter/cid/`+cid); 

/* 搜索 */
export const Search = ({key}) => request(`${url}/search/page`,{key},'POST');

/* 请求该分类下的热门图书 */
export const getHotBook = ({cid,rows = 4}) => request(`${url}/book/books/pageByCidAndHot`,{cid,rows});