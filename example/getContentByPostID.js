// Demo program for Dcard data retriever.
// Author: John-Lin(https://github.com/John-Lin), lockys(https://github.com/lockys)
// For all forum name refer to:
// https://github.com/lockys/0card/blob/master/dacrdAPI.md#forum-list
var DcardJS = require('dcard');
var dcardDataGetter = new DcardJS();

/**
 * Get Dcard Posts title and content
 * @param {Number} post id
 * @return {String} title, content of post.
 * @return {object} raw object of a post.
 */
dcardDataGetter.getContentByPostID(328484, function(err, post) {
  if (!err) {
    console.log('Title: ' + post.title);
    console.log('Content: ' + post.content);
    console.log('POST URL: ' + post.url);
    console.log('Raw Contect Obj ' + post.rawObject);
  } else {
    console.log(err);
  }
});
