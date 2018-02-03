$(document).ready(function(){
	//系统公告最后一个LI
	$(".lui-notice-list ul li:last-child").addClass("li-last");
	//footer 最后一个LI
	$(".lui-footer-box ul li:last-child").addClass("lui-footer-lilast");

	//系统公告文字超出2行用省略号代替
 	$(".lui-list-Intro").text(function(){
			return $(this).html().length >106 ? $(this).text().substring(0,106)+"..." :$(this).text();
     });
});