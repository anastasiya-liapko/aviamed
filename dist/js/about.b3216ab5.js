(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{7062:function(t,e,s){},"975f":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"news"},[s("div",{staticClass:"container"},[t._l(t.posts,function(e){return s("router-link",{staticClass:"news-item mb-3",staticStyle:{border:"1px solid red"},attrs:{to:{name:"newsItem",params:{id:e.id}},tag:"a"}},[s("div",{},[t._v(t._s(e.id))])])}),s("br")],2)])},i=[],o=(s("cadf"),s("551c"),s("f751"),s("097d"),s("bc3a")),a=s.n(o),r={data:function(){return{isFinished:!1,row:0,rowperpage:10,buttonText:"Все услуги и направления",posts:""}},methods:{getPosts:function(){var t=this;a.a.post("/ajaxfile.php",{row:this.row,rowperpage:this.rowperpage}).then(function(e){if(""!==e.data){t.row+=t.rowperpage;var s=t.posts.length;s>0?(t.buttonText="Загрузка ...",setTimeout(function(){t.buttonText="Ещё услуги и направления";for(var s=0;s<e.data.length;s++)t.posts.push(e.data[s])},500)):t.posts=e.data}else t.buttonText="Записей больше нет.",t.isFinished=!0})},isVisible:function(t){var e=t.getBoundingClientRect(),s=document.documentElement.clientHeight,n=2*s,i=e.bottom<n;return i},showVisible:function(){var t=document.getElementsByClassName("news-item"),e=t[t.length-1];this.isVisible(e)&&this.getPosts()}},created:function(){window.onscroll=this.showVisible,this.getPosts()}},u=r,c=(s("f320"),s("2877")),l=Object(c["a"])(u,n,i,!1,null,null,null);e["default"]=l.exports},f320:function(t,e,s){"use strict";var n=s("7062"),i=s.n(n);i.a}}]);
//# sourceMappingURL=about.b3216ab5.js.map