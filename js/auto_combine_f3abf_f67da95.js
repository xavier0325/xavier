var Common={};
;var Index=function(){function e(){var e=$(".con-wrap4 .center-show"),a=100/e.length;e.each(function(){$(this).width(a+"%")}),$(".con-wrap4").find(".center-show:last").addClass("last-child"),$(".g-yxtsBox .show-box").mouseover(function(){$(this).hasClass("cur-box")||($(".g-yxtsBox .cur-box").removeClass("cur-box"),$(this).addClass("cur-box"))}).mouseleave(function(){}),$(".rw-nav a").click(function(){var e=$(this),a=e.attr("data-id"),t=$(".rw-box-show.cur");e.hasClass("cur")||($(".rw-nav").find(".cur").removeClass("cur"),e.addClass("cur"),t.removeClass("cur"),$("#"+a).css("display","block"),setTimeout(function(){t.css("display","none"),$("#"+a).addClass("cur")},500))}),$("#gameHot .o-link").click(function(){if(!$(this).hasClass("active")){var e=$(this).index();$("#gameHot .o-link").removeClass("active"),$("#gameHot .g-hot-wrap").removeClass("active"),$(this).addClass("active"),$("#gameHot .g-hot-wrap").eq(e).addClass("active")}})}function a(){$(".head-box").each(function(){var e=$(this).attr("data-img");$(this).css("background-image","url("+e+")")});var e=$(".head-box").length;if(e>1){for(var a="",i=0;e>i;i++)a+='<a href="javascript:;"></a>';if($(".head-wrap .head-ctrl").html(a),$(".head-wrap .head-box").eq(0).addClass("cur").css("display","block"),$(".head-wrap .head-ctrl a").eq(0).addClass("cur"),t(e-1),g)return;{new n($(".head-wrap .head-box"),$(".head-wrap .head-ctrl a"),!0)}}else $(".head-ctrl-box,.head-sel").css("display","none")}function t(e){var a='<img src="'+$(".head-box").eq(1).attr("data-img")+'"><h2>'+$(".head-box").eq(1).find("h2").html()+"</h2><p>"+$(".head-box").eq(1).find("h3").html()+"</p>";$(".head-wrap .head-next").find(".sel-box").html(a),a='<img src="'+$(".head-box").eq(e).attr("data-img")+'"><h2>'+$(".head-box").eq(e).find("h2").html()+"</h2><p>"+$(".head-box").eq(e).find("h3").html()+"</p>",$(".head-wrap .head-prev").find(".sel-box").html(a)}function n(e,a,t){function n(e){t&&(w=setTimeout(function(){c.eq(e).click()},3e3))}function i(a){r=!0,c.removeClass("cur"),c.eq(a).addClass("cur");var t=e,i=o;s(a),t.eq(o).css("display","block").removeClass("cur"),t.eq(a).css({opacity:"0",filter:"alpha(opacity=0)",display:"block"}).addClass("cur").animate({opacity:"1",filter:"alpha(opacity=100)"},800),setTimeout(function(){r=!1,t.eq(i).css({opacity:"0",filter:"alpha(opacity=0)",display:"none"})},800),o=a;var l=o+1;o==c.length-1&&(l=0),n(l)}function s(a){var t=e,n=a+1,i=a-1;n==t.length&&(n=0),l.find("img").attr("src",t.eq(n).attr("data-img")),l.find("h2").html(t.eq(n).find("h2").html()),l.find("p").html(t.eq(n).find("h3").html()),0>i&&(i=t.length-1),d.find("img").attr("src",t.eq(i).attr("data-img")),d.find("h2").html(t.eq(i).find("h2").html()),d.find("p").html(t.eq(i).find("h3").html())}var o=0,c=a,r=!1,l=$(".head-wrap .head-next"),d=$(".head-wrap .head-prev");l.click(function(){if(!r){var e=o+1;e>=c.length&&(e=0),t&&clearTimeout(w),i(e)}}),d.click(function(){if(!r){var e=o-1;0>e&&(e=c.length-1),t&&clearTimeout(w),i(e)}}),c.click(function(){var e=$(this).index();e==o||r||(t&&clearTimeout(w),i(e))}),n(1)}function i(){for(var e=$(".carouse-box").length,a="",t=0;e>t;t++)a+='<a href="javascript:;"></a>';$(".g-banBox .ctrl").html(a);new s($(".g-banBox .carouse-box"),$(".g-banBox .ctrl a"))}function s(e,a){function t(a){s=!0,i.removeClass("cur"),i.eq(a).addClass("cur");var t=e;a>n?(t.eq(a).css({left:"100%"}).stop().animate({left:0},800),t.eq(n).stop().animate({left:"-100%"},800)):(t.eq(a).css({left:"-100%"}).stop().animate({left:0},800),t.eq(n).stop().animate({left:"100%"},800)),n=a,setTimeout(function(){s=!1},800)}{var n=0;e.eq(0).css({left:"0px"})}a.eq(0).addClass("cur");var i=a,s=!1;i.click(function(){var e=$(this).index();e==n||s||t(e)})}function o(e){function a(e,a,n){s=!0,n.eq(e).css("display","block"),n.eq(a).css("display","block"),t?(n.eq(e).removeClass("cur").css("display","none"),n.eq(a).addClass("cur").css("display","block"),s=!1):(setTimeout(function(){n.eq(e).removeClass("cur").addClass("hideing"),n.eq(a).addClass("cur").addClass("showing")},50),setTimeout(function(){n.eq(e).css("display","none").removeClass("hideing"),n.eq(a).css("display","block").removeClass("showing"),s=!1},1e3))}var t=c(),n=e.find(".reload"),i=e.find(".g-hot-wrap"),s=!1;i.each(function(){$(this).find(".cur-hot-box").eq(0).css("display","block").addClass("cur")}),n.click(function(){if(!s){var t=e.find(".g-hot-wrap.active").find(".cur-hot-box"),n=t.length,i=e.find(".g-hot-wrap.active").find(".cur").index(),o=i+1;i==n-1&&(o=0),a(i,o,t)}})}function c(){var e=navigator.appName;if("Microsoft Internet Explorer"==e){var a=navigator.appVersion,t=a.split(";"),n=t[1].replace(/[ ]/g,"");return"MSIE7.0"==n||"MSIE8.0"==n||"MSIE9.0"==n?!0:!1}return!1}function r(){var e=["JAN","FEB","MAR","APR","MAY","JUNE","JULY","AUG","SEPT","OCT","NOV","DEC"],a=new Date,t=parseInt(a.getMonth());$(".ctrl-mon").html(e[t]),$(".ctrl-mon-mun").html(t+1),$(".dayslef").each(function(){var e=$(this).attr("data-day");if(""!=e&&null!=e&&"<!--udf1-->"!=e){e=e.replace(/\-|\./g,"/");var t=new Date(e),n=parseInt((t-a)/864e5);0>n&&(n=0),$(this).css("display","block").find("span").html(n)}})}function l(){$(".ilikeSet").each(function(){{var e=$(this).attr("data-ilike");$(this).attr("id")}if(""!=e){new iLike({id:e,parent:$(this),style:2})}})}function d(){$("#mobileGameHot .score").find("em").each(function(){var e=parseInt($(this).attr("data-star"));$(this).width(20*e+"%")})}function h(){function e(t){var t=t||window.event;t.preventDefault&&t.preventDefault(),t.returnValue=!1,a(i),setTimeout(function(){document.removeEventListener&&document.removeEventListener("DOMMouseScroll",e,!1),window.onmousewheel=document.onmousewheel=null},800)}function a(e){e.animate({height:0},800,function(){$(this).css("display","none")}),$(".topBar,.head-wrap").removeClass("hasAd"),g=!1;new n($(".head-wrap .head-box"),$(".head-wrap .head-ctrl a"),!0);$("#Jvideo").html("")}var t=m("hasReadVideo");if(""!==t&&null!==t)g=!1;else{f("hasReadVideo","read",365);var i=$("#headAdBox");i.css("display","block"),$(".topBar,.head-wrap").addClass("hasAd"),u(),$(".hadClose").click(function(){a(i)}),document.addEventListener&&document.addEventListener("DOMMouseScroll",e,!1),window.onmousewheel=document.onmousewheel=e}}function u(){var e=$("#Jvideo");nie.use(["util.swfobject"],function(){if(b){e.append("<video style='width:100%;height:100%' src='http://v.nie.netease.com/nie/2015/1211/babb6353634b5e01f03b3881881c1f10qt.mp4' />");var a=$("#Jvideo video")[0];a.play()}else $.flash.available&&e.flash({swf:"http://res.nie.netease.com/nie/flash/nie/2015/1211/mainII.swf",width:"100%",height:"100%",allowScriptAccess:"always",wmode:"opaque"})})}function f(e,a,t){var n=new Date;n.setDate(n.getDate()+t),document.cookie=e+"="+escape(a)+(null==t?"":";expires="+n.toGMTString())}function m(e){if(document.cookie.length>0){var a=document.cookie.indexOf(e+"=");if(-1!=a){a=a+e.length+1;var t=document.cookie.indexOf(";",a);return-1==t&&(t=document.cookie.length),unescape(document.cookie.substring(a,t))}}return""}function p(){}function v(){p(),h(),i(),a(),d(),r(),l(),o($("#mobileGameHot")),o($("#gameHot")),e()}{var w=null,g=!0,b=!!document.createElement("video").canPlayType,x=($("#share_url").html(),$("#share_pic").attr("data-src")),q=$("#share_desc").html();$("#share_title").html()}nie.use(["nie.util.shareV3"],function(){nie.util.share({fat:"#share",type:1,title:q,img:x})});var C=getGlobalNews(),y=$(".con-wrap1 .newsBoxlist").find('li:not(".all-news"):last'),k=C.ShowTime.split("-");k.shift();var T='<a href="'+C.NewsUrl+'" title="'+C.ShortTitle+'" target="_blank">['+C.KindShortName+"]"+C.ShortTitle+"</a><span>"+k.join("-")+"</span>";return y.html(T),nie.config.copyRight.setWhite(),{Init:v}}();Index.Init(),topNav();
;var NavChange=function(){function n(){var n=0;v[0]=o(d,"width"),v[1]=0,r.each(function(){l[n]=o($(this),"width");var i=$(this).find("li").length,t=parseInt(i/3),e=i%3,a=110*t+55*e+2;f[n]=a+50,v[1]+=a+52,2>e&&(e=1),h[n]=parseInt(e+t-1),n++}),r.find("li").each(function(){var n=$(this).find("a").text(),i='<p class="li-txt">'+n+"</p>";$(this).append(i),$(this).find("a").append('<div class="li-bg"></div>')})}function i(){$("#fisChange").click(function(){var n=$(this);n.hasClass("cur")||t()}),$("#sedChange").click(function(){var n=$(this);n.hasClass("cur")||e()})}function t(){$("#fisChange").addClass("cur"),$("#sedChange").removeClass("cur");var n=0;r.each(function(){$(this).width(l[n]+"px"),$(this).find("ul").width("100%"),n++}),s(),u.removeClass("sedStyle"),d.css({width:v[0]+"px",margin:"0 auto",left:"0"})}function e(){$("#sedChange").addClass("cur"),$("#fisChange").removeClass("cur");var n=0;r.each(function(){var i=$(this);i.width(f[n]+"px"),i.children("ul").addClass("f-cb").width(f[n]-50),i.find("li").eq(h[n]).addClass("ebox"),n++}),u.addClass("sedStyle"),d.width(v[1]),d.css({width:v[1]+"px","margin-left":"0"}),a()}function a(){$(window).bind("resize",m),m(),$(".sedStyle .con-box").bind("mouseover",function(n){g(n)}).bind("mouseout",function(){clearTimeout(c)}),$(".sedStyle .nav-li-box a").bind("mouseover",function(){var n=$(this).parent().index();setTimeout(function(){n==b&&(p=!0),b=n},100)}).bind("mouseout",function(){p=!1})}function s(){clearTimeout(c),$(window).unbind("resize"),$(".sedStyle .con-box").unbind("mouseover").unbind("mouseout"),$(".sedStyle .nav-li-box a").unbind("mouseover").unbind("mouseout")}function o(n,i){return parseFloat(n.css(i))}var c,u=$(".con-wrap3"),d=u.children(".con-box"),r=$(".con-wrap3 .nav-li-box"),l=[],f=[],h=[],v=[],p=!1,b=null,m=function(){var n=o(d,"margin-left"),i=(v[1]-u.width())/-2;d.css("left",i+"px"),Math.abs(n)>Math.abs(i)&&(n>0?d.css("margin-left",Math.abs(i)+"px"):d.css("margin-left",-Math.abs(i)+"px"))},g=function(n){if(!p){var i=u.width()/2,t=o(d,"margin-left"),e=o(d,"left");n.pageX>i&&t>e?(t+=(i-n.pageX)/200,d.css("margin-left",t+"px")):n.pageX<i&&-e>t&&(t+=(i-n.pageX)/200,d.css("margin-left",t+"px")),c=setTimeout(function(){g(n)},10)}},x={init:function(){n(),i()}};return x}();NavChange.init();