define(function(){

this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/templates/auto.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<td class="table__photo">\n    <img src="' +
((__t = ( photo )) == null ? '' : __t) +
'">\n</td>\n<td class="table__model">';
 print(brand + ' ' + model) ;
__p += '</td>\n<td class="table__description">' +
((__t = ( description )) == null ? '' : __t) +
'</td>\n<td class="table__add-favorite">\n    <button type="button" class="table__button ';
 !!isFavorite && print('table__button--disable') ;
__p += '">Добавить в избранное</button>\n</td>\n';

}
return __p
};

this["JST"]["app/scripts/templates/favorite.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<td class="table__photo">\n    <img src="' +
((__t = ( photo )) == null ? '' : __t) +
'">\n</td>\n<td class="table__model">';
 print(brand + ' ' + model) ;
__p += '</td>\n<td class="table__description">' +
((__t = ( description )) == null ? '' : __t) +
'</td>\n<td class="table__add-favorite">\n    <button type="button" class="table__button">Исключить</button>\n</td>\n';

}
return __p
};

this["JST"]["app/scripts/templates/filter.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<li class="filter__item" data-brand="' +
((__t = ( brand )) == null ? '' : __t) +
'">' +
((__t = ( brand )) == null ? '' : __t) +
'</li>\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/photo.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<img src="' +
((__t = (photo)) == null ? '' : __t) +
'">\n';

}
return __p
};

  return this["JST"];

});