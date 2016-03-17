$(function(){
	$(document).ready(function(){
		/* ご注意アコーディオン */
		$('[class=btn_showhide]')
			.show()
			.parent().addClass('closed')
			.prev().addClass('closed');

		/* 静的メニューアコーディオン */
		$('p.menu_dd+ul').hide();
		$('p.menu_dd.active+ul').show();
		
		/* 静的画面オペレーションフロー */
		$('.btn_showhide_wrap, .btn_showhide_operation').show();
		$('.btn_showhide_operation').next('ul,dl,div').hide();
		$('.btn_showhide_operation').parent().next('ul,dl,div').hide();
		$('.btn_hide_operation').show();
		
		/* 汎用リスト開閉 */
		var btn = $('.btn_showhide.dlist');
		var acc = btn.closest('dt').next('dd');
		acc.hide();
		btn.toggle();
	});


	//最下部ご注意のアコーディオン
	$('[class=btn_showhide]').click(function(){

		var bxHeight = $(this).parent().prev()[0].scrollHeight;
		$(this).parent().prev().css('height', bxHeight + 'px');

		$('.btn_open',this).toggle();
		$('.btn_close',this).toggle();
		$(this).parent().prev().toggleClass('closed');
		$(this).parent().toggleClass('closed');
		return false;

	});


	//静的メニューアコーディオン
	$('p.menu_dd').click(function(){
		if(!($(this).hasClass('active'))){
			$(this).next().slideToggle();
			$(this).toggleClass('menu_close');
		}
	});


	//静的画面オペレーションフロー
	$('.btn_showhide_operation').click(function(){
	
		$(this).toggleClass('closed');

		$(this).parent().next('ul,dl,div').slideToggle({complete:function(){
			var btn = $(this).prev();
			$('.btn_open', btn).toggle();
			$('.btn_close', btn).toggle();
		}});

	});


	//静的画面オペレーションフロー(close only)
	$('[class=btn_operation_close] > p').click(function(){

		$(this).parent().parent().slideToggle();

		var btn = $(this).closest('dd').find('.btn_showhide_operation').get(0);
		$('.btn_open', btn).toggle();
		$('.btn_close', btn).toggle();

		/* 閉じるボタンスクロール制御 */
		/* スクロール位置と要素の位置を比較 */
		var position = $(this).closest('dl').offset().top;
		if($(window).scrollTop() >= position){
			$("html,body").animate({
				scrollTop : position
			}, {
				queue : false
			});
		}
	});

	// 汎用リスト開閉ボタン
	$('.btn_showhide.dlist').click(function(){
		$(this).closest('dt').next('dd').slideToggle('fast');

		$('.btn_open',this).toggle();
		$('.btn_close',this).toggle();
		return false;
	});

	// 汎用リスト開閉ボタン（close only）
	$('.btn_operation_close.dlist').click(function(){
		$(this).closest('dd').slideToggle('fast');

		var btn = $(this).closest('dd').prev('dt').get(0);
		$('.btn_open', btn).toggle();
		$('.btn_close', btn).toggle();

		var position = $(this).closest('dd').prev('dt').offset().top;
		if($(window).scrollTop() >= position){
			$("html,body").animate({
				scrollTop : position
			}, {
				queue : false
			});
		}
	});

	/* 閉じるボタン */
	//$('#btn_close').click(function(){
	//	window.open('about:blank','_self').close();
	//});
	
});

