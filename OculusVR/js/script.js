function openPopup(name){
	$('#shadow').fadeIn(500);
	$('#popup_'+name).fadeIn(700);
}
function closePopup(){
	$('.popup').fadeOut(500);
	$('#shadow').fadeOut(700);
}
function closePopupS(){
	$('#popup_call').fadeOut(500);
}
function clear(obj){
	$(obj).find('input[type="text"]').each(function(){
		$(this).val('');
	});
	$(obj).find('input[type="file"]').val('').change();
}
function check(obj){
	ret = true;
	texts = $(obj).find('input[type="text"]');
	texts.each(function(){
		if(($(this).val().length==0)){
			$(this).addClass('error');
			ret = false;
		}
	});
	if(ret){
		closePopupS();
		openPopup('message');
		setTimeout(function(){
			closePopup();
			clear(obj);
		},3000);
	}
	return ret;
}

$(document).ready(function(){
	$('.access').click(function(){
		
	});


	$('#shadow').click(function(){
		closePopup();
	});
	$('.call').click(function(){
		openPopup('call');
		return false;
	});
	$('.close').click(function(){
		closePopup();
	});
	$('input[type="text"]').focus(function(){
		if($(this).hasClass('error'))
			$(this).removeClass('error');
	});
	jQuery.mask.definitions["1"] = "[01234569]";
	$("input[name=phone]").mask("+7 (199) 999-9999",{placeholder:" "});
	
	
			$('.slider_certs').bxSlider({
				pager: false,
				slideWidth: 253,
				minSlides: 3,
				maxSlides: 3,
				moveSlides: 1,
				slideMargin: 40
			});
	
	if (!$.browser.webkit) {
		
		$('INPUT[type="text"][placeholder], TEXTAREA[placeholder]').blur(function(){ 
			
			if ($(this).val()=='') {
				$(this).val($(this).attr('placeholder'));
				$(this).addClass('m-placeholder');
			}
			
		}).focus(function(){
			
			$(this).removeClass('m-placeholder');
			if ($(this).val()==$(this).attr('placeholder'))
				$(this).val('');
		}).each(function(){
			
			if ( ($(this).val()=='') || ($(this).val()==$(this).attr('placeholder')) ) {
				$(this).val( $(this).attr('placeholder') );
				$(this).addClass('m-placeholder');
			}
			
			var form = $(this).closest('FORM');
			if (form.length)
				form.submit(function(){
					if ($(this).val()==$(this).attr('placeholder'))
						$(this).val('');
				});
			
		});
		
	}
	
});
$(window).load(function(){ //$(window).load() must be used instead of $(document).ready() because of Webkit compatibility

	$(".carousel-demo2").sliderkit({
		shownavitems:3,
		scroll:1,
		mousewheel:true,
		circular:true,
		start:2
	});
	
});