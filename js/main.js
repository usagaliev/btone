$(document).ready(function () {
    $('a[href^="#"]').on('click', function (event) {
        // отменяем стандартное действие
        event.preventDefault();

        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        /*
        * sc - в переменную заносим информацию о том, к какому блоку надо перейти
        * dn - определяем положение блока на странице
        */

        $('html, body').animate({ scrollTop: dn }, 1000);
        /*$("#main").css( { marginLeft : "260px"});*/
        /*
        * 1000 скорость перехода в миллисекундах
        */
    });
});


var lang = $.cookie('lang');
$(document).ready(function () {
    var shadow = $("#shadow");

    $("#reg-driver").on("click", function () {
        shadow.show();
        $("#window-reg-driver").show();
    });
    $(".reg-driver").on("click", function () {
        shadow.show();
        $("#window-reg-driver").show();
    });
    $("#reg-company").on("click", function () {
        shadow.show();
        $("#window-reg-company").show();
    });
    $(".reg-company").on("click", function () {
        shadow.show();
        $("#window-reg-company").show();
    });
    $("#reg-corp").on("click", function () {
        shadow.show();
        $("#window-reg-customer").show();
    });
    $(".reg-corp").on("click", function () {
        shadow.show();
        $("#window-reg-customer").show();
    });
    $(".tab_tranbut").on("click", function () {
        shadow.show();
        $("#window-transfer_table").show();
    });

    //for all modal windows
    $(".close").on("click", function () {
        $(this).parent().hide();
        shadow.hide();
    });
    shadow.on("click", function () {
        shadow.hide();
        $('.window').hide();
    });



    //плавная прокрутка и сворачивание меню на телефоне, так же обработчик стрелки
    var $page = $('html, body');
    if ($(window).width() > 1200) {
        $('a[href*="#"]').click(function () {
            var ind_page = $(this).attr('href').split('#');
            ind_page = '#' + ind_page[1];
            if ($(ind_page).length > 0) {
                $page.animate({
                    scrollTop: $(ind_page).offset().top
                }, 2000);
            } else if ($(this).attr('id') == 'up-arrow') {
                $page.animate({
                    scrollTop: $('body').offset().top
                }, 2000);
            }
        });
    }
    else {
        $('a[href*="#"]').click(function () {
            if ($(this).attr('id') == 'up-arrow') {
                var ind_page = $(this).attr('href').split('#');
                ind_page = '#' + ind_page[1];
                if ($(ind_page).length > 0) {
                    $page.animate({
                        scrollTop: $(ind_page).offset().top
                    }, 0);
                } else {
                    $page.animate({
                        scrollTop: $('body').offset().top
                    }, 0);
                }
            } else {
                $('.navbar-toggler').addClass('collapsed');
                $('.navbar-toggler').attr('aria-expanded', 'false');
                $('.navbar-collapse').removeClass('in');
            }
        });
    }

    //не отображать стрелку вниз на первом экране
    $("#up-arrow").removeClass('hidden');
    if ($(window).scrollTop() > $(window).height()) $("#up-arrow").fadeIn("slow");
    else $("#up-arrow").fadeOut(0);
    $(window).scroll(function () {
        if ($(window).scrollTop() <= $(window).height()) $("#up-arrow").fadeOut("slow");
        else $("#up-arrow").fadeIn("slow");
    });

    $(".navbar-toggler-icon").on("click", function () {
        if ($(this).parent().hasClass("collapsed")) {
            //$('body').css("overflow", "hidden");
            //$(this).parent().css("background", "transparent");
        }
        else {
            //$('body').css("overflow", "auto");
            //$(this).parent().css("background", "rgba(0, 0, 0, 0.5)");
        }
    });

});


$(function () {
    $('#carousel-top .carousel-item:first').addClass('active');
    $('.carousel-indicators li:first').addClass('active');
    $('.autopark_slidind .item:first').addClass('active');
    $('.autopark_slidind ol li:first').addClass('active');
    $('.partnersl_slidind .item:first').addClass('active');
    $('.partnersl_slidind ol li:first').addClass('active');
    $('.indicat_auto li:first').addClass('active');
    $('.carousel-inner-auto .item_rev:first').addClass('active');
    $('.indicat_part li:first').addClass('active');
    $('.carousel-inner-part .item_rev:first').addClass('active');
    $('.carousel-inner .item_rev:first').addClass('active');
    $('#theCarousel-xs .item_rev:first').addClass('active');
});
$(document).ready(function () {
    let arr = [], c = 0;
    $.each($('.carousel-inner-auto .item'), function (i, item) {
        $(item).find('.title_sl_auto').clone().appendTo($('.indicat_auto').find('li')[c++])
    });
});
$(document).ready(function () {
    let arr = [], c = 0;
    $.each($('.carousel-inner-part .item'), function (i, item) {
        $(item).find('.title_sl_part').clone().appendTo($('.indicat_part').find('li')[c++])
    });
});

$('.multi-item-carousel').carousel({
    interval: false
});

$('.multi-item-carousel .item').each(function () {
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    if (next.next().length > 0) {
        next.next().children(':first-child').clone().appendTo($(this));
    } else {
        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
    }
});






/** ----------------------------------------------------------------------------------------------------------* */

//Спец.тарифы
//Показ окна отправки данных
$('#more-info').click(function () {
    $('#shadow').show();
    $('#window-special').show();
});

//отмена отправки
$('#window-special #cancel-special').click(function () {
    $('#window-special').hide();
    $('#shadow').hide();
});

//Скрытие спец. тарифов, если уже скрывалось
if ($.cookie("hide_special") == "1") {
    $('#special').hide();
}
//Скрытие формы по клику "Мне не интересно"
$('#hide_special').click(function () {
    $('#special').hide();
    $.cookie("hide_special", "1", { expires: 7 });
});

//Скрытие спец. тарифов, если уже скрывалось
if ($.cookie("spec") == "1") {
    $('#spec').hide();
}
//Скрытие формы по клику "Мне не интересно"
$('#hide_spec').click(function () {
    $('#spec').hide();
    $.cookie("spec", "1", { expires: 7 });
});


$("#privpol").show("5000")
//Скрытие политики, если уже скрывалось (PrivPol)
if ($.cookie("privpol") == "1") {
    $('#privpol').hide();
}
//Скрытие политики по клику "Согласен"
$('#privpol_agree').click(function () {
    $('#privpol').hide();
    $.cookie("privpol", "1", { expires: 7 });
});


/*
$('.input-element').toArray().forEach(function (field) {
    new Cleave(field, {
        delimiter: ':',
        time: true,
        timePattern: ['h', 'm']
    })
});

$('.input-element-date').toArray().forEach(function (field) {
    new Cleave(field, {
        delimiter: '-',
        date: true,
        datePattern: ['d', 'm', 'Y']
    });
});
$('input#s3-date-start').toArray().forEach(function (field) {
    new Cleave(field, {
        delimiter: '-',
        date: true,
        datePattern: ['d', 'm', 'Y']
    });
});
$('input#s3-time-start').toArray().forEach(function (field) {
    new Cleave(field, {
        delimiter: ':',
        time: true,
        timePattern: ['h', 'm']
    });
});
*/


var cur_step = 1;   //Количество доступных шагов

/*$('#t1-from').change(function(){
    $(this).val().length>0?($("#t1-to").prop('disabled', false), $("#t1-to").focus()):$("#t1-to").prop('disabled', true)
})
*/
/*$('#t1-from').keyup(function(){
  $(this).val().length>0?$("#t1-to").prop('disabled', false):$("#t1-to").prop('disabled', true)
})*/
$('#t1-to').keyup(function () {
    $(this).val().length > 0 ? $(".form-part-2").show(500) : $(".form-part-2").hide();
    $('#form-step-2').removeClass("step-disabled");
    cur_step = 2;
    stepForm(2);
})
$('#t1-from').keydown(function (e) {
    $("#t1-to").prop('disabled', false);
    switch (e.keyCode) {
        case 8: // Backspace
            if ($(this).val().length <= 1)
                $("#t1-to").prop('disabled', true);
            break;
        case 46: //delete
            if ($(this).val().length <= 1)
                $("#t1-to").prop('disabled', true);
            break;
    }
})

/* $('#t1-to').on('change', function(){
      $(".form-part-2").show(500);
   });*/
$("input.typing").on("click", function () {
    $("input.typing").each(function (i, item) {
        (($(item).prop("checked")) ? ($('#' + $(this).attr('id') + '-content').css({ display: 'block' }), $(this).siblings(".radio-check").addClass('checked')) : ($('#' + $(this).attr('id') + '-content').css({ display: 'none' }), $(this).siblings(".radio-check").removeClass('checked')));
    })
    $(".form-part-2").hide();
    $(".form-part-3").hide();
    $(".form-part-4").hide();
    $('#t1-to').val('');
    $('#t1-from').val('');
    cur_step = 1;
    stepForm(1);

});

const stepForm = (num = 1) => {
    let arr = [];
    if (num > $('.form-step').length) {
        return false;
    }
    $('.form-step').each(function (i, item) {
        let modif = i + 1;
        if (num == modif)
            $('#order-form-step-' + modif).addClass('step-now');
        else if (num > modif) {
            $('#order-form-step-' + modif).removeClass('step-now');
            $('#order-form-step-' + modif).addClass('step-passed');
        }
    })

}


$(".conteyner").on("click", '.car-class .calc', function () {
    if ($('#type2').prop('checked')) {
        $(".form-part-1").hide(100);
        $(".form-part-3").hide();
        $(".form-part-4").show(500);
        $(".form-part-2").hide();
        $('#form-step-3').removeClass("step-disabled");
        cur_step = 3;
        stepForm(3);
    } else {
        $(".form-part-1").hide(100);
        $(".form-part-3").show(500);
        $(".form-part-2").hide();
        $('#form-step-3').removeClass("step-disabled");
        cur_step = 3;
        stepForm(3);
    }
    document.getElementById('order-route').innerHTML = $('[name="from"]').val();
    document.getElementById('s3-address-1').value = $('[name="from"]').val();
    document.getElementById('order-route-1').innerHTML = $('[name="to"]').val();
    document.getElementById('s3-address-2').value = $('[name="to"]').val();
    document.getElementById('order-route-3').innerHTML = $('[name="from1"]').val();
    document.getElementById('s3-time-start-1').value = document.getElementById('time1').value;
    document.getElementById('s3-time-start-2').value = document.getElementById('time2').value;
});

$('.btn').on('click', function () {
    $('#s3-class-auto').val($(this).parents('.car-class').find('strong').text());
    $('#s3-class-auto-2').val($(this).parents('.car-class').find('strong').text())
});

$('#time2').change(function () {
    $(this).val().length > 0 ? $(".form-part-2").show(500) : $(".form-part-2").hide();
    $('#form-step-2').removeClass("step-disabled");
    cur_step = 2;
    stepForm(2);
})

$('#t2-from').keydown(function (e) {
    $(".time1").prop('disabled', false);
    switch (e.keyCode) {
        case 8: // Backspace
            if ($(this).val().length <= 1)
                $(".time1").prop('disabled', true);
            break;
        case 46: //delete
            if ($(this).val().length <= 1)
                $(".time1").prop('disabled', true);
            break;
    }
})
$('.time1').change(function (e) {
    $(".time2").prop('disabled', false);
    switch (e.keyCode) {
        case 8: // Backspace
            if ($(this).val().length <= 1)
                $(".time2").prop('disabled', true);
            break;
        case 46: //delete
            if ($(this).val().length <= 1)
                $(".time2").prop('disabled', true);
            break;
    }
})


//переменные - шаги
var step1 = $('#form-step-1');
var step2 = $('#form-step-2');
var step3 = $('#form-step-3');
var part1 = $('.form-part-1');
var part2 = $('.form-part-2');
var part3 = $('.form-part-3');
var part4 = $('.form-part-4');

//верхние кружочки - шаги
step1.on('click', function () {
    part1.show();
    part2.hide();
    part3.hide();
    part4.hide();
    step1.children('div').addClass('step-now');
    step1.children('div').removeClass('step-passed');
    step2.children('div').removeClass('step-now');
    step2.children('div').removeClass('step-passed');
    step3.children('div').removeClass('step-now');
    step3.children('div').removeClass('step-passed');
});
step2.on('click', function () {
    if (cur_step >= 2) {
        part1.show();
        part2.show();
        part3.hide();
        part4.hide();
        step1.children('div').removeClass('step-now');
        step1.children('div').addClass('step-passed');
        step2.children('div').addClass('step-now');
        step2.children('div').removeClass('step-passed');
        step3.children('div').removeClass('step-now');
        step3.children('div').removeClass('step-passed');
    }
});
step3.on('click', function () {
    if ($('#type2').prop('checked')) {
        if (cur_step == 3) {
            part1.hide();
            part2.hide();
            part3.hide();
            part4.show();
            step1.children('div').removeClass('step-now');
            step1.children('div').addClass('step-passed');
            step2.children('div').removeClass('step-now');
            step2.children('div').addClass('step-passed');
            step3.children('div').addClass('step-now');
            step3.children('div').removeClass('step-passed');
        }
    } else {
        if (cur_step == 3) {
            part1.hide();
            part2.hide();
            part3.show();
            step1.children('div').removeClass('step-now');
            step1.children('div').addClass('step-passed');
            step2.children('div').removeClass('step-now');
            step2.children('div').addClass('step-passed');
            step3.children('div').addClass('step-now');
            step3.children('div').removeClass('step-passed');
        }
    }

});




/**************************************************************************************************************** */

/*

jQuery(document).ready(function($) {
	$("#order-form").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "/wp-content/themes/bt_one/ajax/sendmail.php", // здесь указываем путь ко второму файлу
			data: str,
			success: function(msg) {
             
                alert(msg)
                }, error: function(e){
                console.error(e)
                }
		});
		return false;
	});
});

*/

document.addEventListener('wpcf7mailsent', function (event) {
    cur_step = 1;
    stepForm(1);
    part1.show();
    part2.hide();
    part3.hide();
    part4.hide();
    $(".form-part-1").show();
    $(".form-part-2").hide();
    $(".form-part-3").hide();
    $("#shadow").hide();
    $("#window-reg-driver").hide();
    $("#window-reg-driver").hide();
    $("#window-reg-company").hide();
    $("#window-reg-customer").hide();
    $("#window-reg-customer").hide();
    $('#window-special').hide();
    $('#order-form-step-3').removeClass('step-now');
    $('#order-form-step-2').removeClass('step-passed');
    $("#window-msg").show();
    $('#window-transfer_table').hide();
    $('html,body').stop().animate({ scrollTop: $('#order-form-block').offset().top }, 1000);
    e.preventDefault();
}, false);
/*
document.addEventListener('wpcf7invalid', function (event) {
    Swal.fire({
        title: '<strong>Одно или несколько полей содержат ошибочные данные. </strong>',
        icon: 'warning',
        html:
            'Пожалуйста, проверьте их и попробуйте ещё раз.',
        showCloseButton: true,
    })
}, false);

document.addEventListener('wpcf7invalid', function (event) {
    Swal.fire({
        title: '<strong>Одно или несколько полей содержат ошибочные данные. </strong>',
        icon: 'warning',
        html:
            'Пожалуйста, проверьте их и попробуйте ещё раз.',
        showCloseButton: true,
    })
}, false);
*/

(function ($) {
    $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

    $('.accordion a').click(function (j) {
        var dropDown = $(this).closest('li').find('.ac_div');

        $(this).closest('.accordion').find('.ac_div').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
})(jQuery);



//   JQuery Validate

// #driver_form 
$(document).ready(function () {
    $("#driver_form").validate({
        rules: {
            driver_city: "required",
            driver_exp: "required",
            driver_fio: {
                required: true,
                minlength: 3
            },
            driver_car: "required",
            driver_phone: "required",
            driver_email: {
                required: true,
                email: true
            },
        },
        errorElement: "em",
        errorPlacement: function (error, element) {
            return true;
        },
        highlight: function (element, errorClass, validClass) {
            $(element).parents(".col-md-6").addClass("has-error").removeClass("has-success");
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).parents(".col-md-6").addClass("has-success").removeClass("has-error");
        }
    });

    // company_form
    $("#company_form").validate({
        rules: {
            company_name: "required",
            company_city: "required",
            company_contact: {
                required: true,
                minlength: 3
            },
            company_amount: "required",
            company_phone: "required",
            company_email: {
                required: true,
                email: true
            },
        },
        errorElement: "em",
        errorPlacement: function (error, element) {
            return true;
        },
        highlight: function (element, errorClass, validClass) {
            $(element).parents(".col-md-6").addClass("has-error").removeClass("has-success");
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).parents(".col-md-6").addClass("has-success").removeClass("has-error");
        }
    });

    // corporate_form
    $("#corporate_form").validate({
        rules: {
            customer_name: "required",
            customer_contact: {
                required: true,
                minlength: 3
            },
            customer_phone: "required",
            customer_email: {
                required: true,
                email: true
            },
        },
        errorElement: "em",
        errorPlacement: function (error, element) {
            return true;
        },
        highlight: function (element, errorClass, validClass) {
            $(element).parents(".col-md-6").addClass("has-error").removeClass("has-success");
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).parents(".col-md-6").addClass("has-success").removeClass("has-error");
        }
    });

    // special_form
    $("#special_form").validate({
        rules: {
            special_name: {
                required: true,
                minlength: 3
            },
            special_phone: "required",
            special_email: {
                required: true,
                email: true
            },
        },
        errorElement: "em",
        errorPlacement: function (error, element) {
            return true;
        },
        highlight: function (element, errorClass, validClass) {
            $(element).parents(".field-mail").addClass("has-error").removeClass("has-success");
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).parents(".field-mail").addClass("has-success").removeClass("has-error");
        }
    });

    // transferOrder_cont_form
    $("#transferOrder_cont_form").validate({
        rules: {
            t3_name: {
                required: true,
                minlength: 3
            },
            t3_phone: "required",
            t3_email: {
                required: true,
                email: true
            },
        },
        errorElement: "em",
        errorPlacement: function (error, element) {
            return true;
        },
        errorClass: "myErrorCssClass",
    });

    // transferOrder_form
    /*$("#transferOrder_form").validate({
        rules: {
            fio__1: {
                required: true,
                minlength: 3
            },
            phone_number__1: "required",
            email_mail__1: {
                required: true,
                email: true
            },
            order_date_1: "required",
            order_time_1: "required",
            s3_address_1: "required",
            s3_address_2: "required",
            s3_class_auto: "required",
            passengers_number: {
                required: true,
                number: true
            },
        },
        errorElement: "em",
        errorPlacement: function (error, element) {
            return true;
        },
        errorClass: "myErrorCssClass",
    });
*/
    // transferOrder_time_form
    $("#transferOrder_time_form").validate({
        rules: {
            fio_2__1: {
                required: true,
                minlength: 3
            },
            phone_number_2__1: "required",
            email_mail_2__1: {
                required: true,
                email: true
            },
            order_date_2: "required",
            order_time_2: "required",
            order_date_end: "required",
            order_time_end: "required",
            s3_address_end_2: "required",
            s3_class_auto_2: "required",
            passengers_number_2: {
                required: true,
                number: true
            },
        },
        errorElement: "em",
        errorPlacement: function (error, element) {
            return true;
        },
        errorClass: "myErrorCssClass",

    });

});



$(".time_flat").flatpickr({
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    time_24hr: true,
    locale: "ru",
});
$(".datepicker-here").flatpickr({
    enableTime: false,
    dateFormat: "d-m-Y",
    locale: "ru",
});



/*===================================
================= Autocomplete form input ========================
====================================*/


/** Input one **/
/*
$(document).ready(function () {

    var componentForm = {
        street_number: 'short_name',
        route: 'long_name',
        locality: 'long_name',
        administrative_area_level_1: 'short_name',
        country: 'long_name',
        postal_code: 'short_name'
    },
        dataCoordInput = {
            street_number: '',
            route: '',
            locality: '',
            administrative_area_level_1: '',
            country: '',
            postal_code: ''
        };

    function initAutocomplete() {
        // Create the autocomplete object, restricting the search predictions to
        // geographical location types.
        autocomplete = new google.maps.places.Autocomplete(
            document.getElementById('t1-from'), {
            types: ['geocode']
        });

        // Avoid paying for data that you don't need by restricting the set of
        // place fields that are returned to just the address components.
        autocomplete.setFields(['address_component']);

        // When the user selects an address from the drop-down, populate the
        // address fields in the form.
        autocomplete.addListener('place_changed', fillInAddress);
    }

    function fillInAddress() {
        // Get the place details from the autocomplete object.
        var place = autocomplete.getPlace();

        // Get each component of the address from the place details,
        // and then fill-in the corresponding field on the form.
        for (var i = 0; i < place.address_components.length; i++) {
            var addressType = place.address_components[i].types[0];
            if (componentForm[addressType]) {
                if (Object.keys(dataCoordInput).indexOf(addressType) != -1)
                    dataCoordInput[addressType] = place.address_components[i][componentForm[addressType]]
            }
        }
    }

    initAutocomplete();

    $("#t1-from").change(function () { //Пример использования данных
        //Событие следит за изменением input's и выводит объект с данными
        console.log(dataCoordInput);
    })

});


function createGeoListeners() {
    var options = {types: ['geocode']};
    var inputs = $('.autocomplete');
    var autocompletes = [];
    for (var i = 0; i < inputs.length; i++) {
        var autocomplete = new google.maps.places.Autocomplete(inputs[i], options);
        autocomplete.inputId = inputs[i].id;
        autocomplete.addListener('place_changed', fillInAddressFields);
        autocompletes.push(autocomplete);
    }
}

function fillInAddressFields() {
    var place = this.getPlace();
    for (var i = 0; i < place.address_components.length; i++) {

        var addressType = place.address_components[i].types[0];
        var val = place.address_components[i].long_name;
        console.log("address Type " + addressType + " val " + val);
        $('#facility_address').find("."+addressType).val(val);
        $('#facility_address').find("."+addressType).attr('disabled', false);

    }

}



createGeoListeners();
*/



$(document).ready(function () {
    createGeoListeners();
});
// Perhaps put these into a javascript library
function createGeoListeners() {
    var options = { types: ["geocode", "establishment"] };
    var inputs = $('#t1-from');
    var autocompletes = [];
    for (var i = 0; i < inputs.length; i++) {
        var autocomplete = new google.maps.places.Autocomplete(inputs[i], options);
        autocomplete.inputId = inputs[i].id;
        autocomplete.setFields(['address_component']);
        autocomplete.addListener('place_changed', fillInAddressFields);
        autocompletes.push(autocomplete);
    }
}
function fillInAddressFields() {
    var place = this.getPlace();
    for (var i = 0; i < place.address_components.length; i++) {
        var addressType = place.address_components[i].types[0];
        var val = place.address_components[i].long_name;
        //console.log("address Type " + addressType + " val " + val);
        $('#facility_address').find("." + addressType).val(val);
        // mitin = $('#facility_address').find("."+addressType).val();
        //console.log(mitin);
        street_number = $('#facility_address').find(".street_number").val();
        route = $('#facility_address').find(".route").val();
        locality = $('#facility_address').find(".locality").val();
        premise = $('#facility_address').find(".premise").val();
        neighborhood = $('#facility_address').find(".neighborhood").val();
    }
    t1_form = $("input[name='from']").val();
    $("input[name='s3_address_1']").val(t1_form);
    // console.log(t1_form);
    if (!street_number || !route || !locality) {
        $("#s3-address-1-box").find(".sp_notif").show();
    }

}



/*-----*/
$(document).ready(function () {
    createGeoListenerso();
});
// Perhaps put these into a javascript library
function createGeoListenerso() {
    var options = { types: ["geocode", "establishment"] };
    var inputs = $('#t1-to');
    var autocompletes = [];
    for (var i = 0; i < inputs.length; i++) {
        var autocomplete = new google.maps.places.Autocomplete(inputs[i], options);
        autocomplete.inputId = inputs[i].id;
        autocomplete.addListener('place_changed', fillInAddressFieldso);
        autocompletes.push(autocomplete);
    }
}
function fillInAddressFieldso() {
    var place = this.getPlace();
    for (var i = 0; i < place.address_components.length; i++) {
        var addressType = place.address_components[i].types[0];
        var val = place.address_components[i].long_name;
        //console.log("address Type " + addressType + " val " + val);
        $('#facility_address').find("." + addressType).val(val);
        // mitin = $('#facility_address').find("."+addressType).val();
        //console.log(mitin);
        street_number = $('#facility_address').find(".street_number").val();
        route = $('#facility_address').find(".route").val();
        locality = $('#facility_address').find(".locality").val();
        premise = $('#facility_address').find(".premise").val();
        neighborhood = $('#facility_address').find(".neighborhood").val();
    }
    t1_to = $("input[name='to']").val();
    $("input[name='s3_address_2']").val(t1_to);
    // console.log(t1_to);
    if (!street_number || !route || !locality) {
        $("#s3-address-2-box").find(".sp_notif").show();
    }
}



/*------*/
$(document).ready(function () {
    createGeoListenerst();
});
// Perhaps put these into a javascript library
function createGeoListenerst() {
    var options = { types: ["geocode", "establishment"] };
    var inputs = $('#t2-from');
    var autocompletes = [];
    for (var i = 0; i < inputs.length; i++) {
        var autocomplete = new google.maps.places.Autocomplete(inputs[i], options);
        autocomplete.inputId = inputs[i].id;
        autocomplete.addListener('place_changed', fillInAddressFieldst);
        autocompletes.push(autocomplete);
    }
}
function fillInAddressFieldst() {
    var place = this.getPlace();
    for (var i = 0; i < place.address_components.length; i++) {
        var addressType = place.address_components[i].types[0];
        var val = place.address_components[i].long_name;
        //console.log("address Type " + addressType + " val " + val);
        $('#facility_address').find("." + addressType).val(val);
        // mitin = $('#facility_address').find("."+addressType).val();
        //console.log(mitin);
        street_number = $('#facility_address').find(".street_number").val();
        route = $('#facility_address').find(".route").val();
        locality = $('#facility_address').find(".locality").val();
        premise = $('#facility_address').find(".premise").val();
        neighborhood = $('#facility_address').find(".neighborhood").val();
    }
    t1_form1 = $("input[name='from1']").val();
    $("input[name='s3_address_end_2']").val(t1_form1);
    //console.log(t1_form1);
    if (!street_number || !route || !locality) {
        $("#s3-address-end-1-box").find(".sp_notif").show();
    }
}


$(document).ready(function () {
    createGeoListenersn();
});
// Perhaps put these into a javascript library
function createGeoListenersn() {
    var options = { types: ["geocode", "establishment"] };
    var inputs = $('.autocomplete');
    var autocompletes = [];
    for (var i = 0; i < inputs.length; i++) {
        var autocomplete = new google.maps.places.Autocomplete(inputs[i], options);
        autocomplete.inputId = inputs[i].id;
        autocomplete.addListener('place_changed', fillInAddressFieldsn);
        autocompletes.push(autocomplete);
    }
}
function fillInAddressFieldsn() {
    var place = this.getPlace();
    for (var i = 0; i < place.address_components.length; i++) {
        var addressType = place.address_components[i].types[0];
        var val = place.address_components[i].long_name;
        $('#facility_address').find("." + addressType).val(val);
    }
}


$('.autocomplete').change(function () {
    $(this).siblings('.sp_notif').hide();
})


$('.slider-single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    adaptiveHeight: true,
    infinite: false,
    useTransform: true,
    speed: 400,
});

$('.slider-nav')
    .on('init', function (event, slick) {
        $('.slider-nav .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        nav: false,
        arrows: false,
        focusOnSelect: false,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 640,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 420,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }]
    });

$('.slider-single').on('afterChange', function (event, slick, currentSlide) {
    $('.slider-nav').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider-nav .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
});

$('.slider-nav').on('click', '.slick-slide', function (event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');

    $('.slider-single').slick('slickGoTo', goToSingleSlide);
});


function scrollWidthDiv(selector) {
    var sumMove = 400,
        delt = 0,
        delta = 8,
        item = selector.innerWidth(),
        value = selector.scrollLeft() + sumMove,
        scroll = selector.scrollLeft(),
        scrollr = selector.get(0).scrollWidth;


    let animated = setTimeout(function anim() {
        let move = scroll + delt;
        if (move < value) {
            delt += delta;
            //console.log('item' + item, 'value' + value, 'scroll' + scroll, 'move' + move, delt, item + delta < move, 'scrWidth' + scrollr);
            if (item + value > scrollr) {
                selector.scrollLeft(0);
                clearTimeout(animated);

            } else {
                setTimeout(anim, 10);
                selector.scrollLeft(move);
            }
        } else
            clearTimeout(animated);

    }, 10);


};

$(document).ready(function () {

    $(".link_but").click(function () {
        scrollWidthDiv($($(this).parent('.block_auto').find('.block_auto_scroll')));
    });
});


$(document).ready(function () {
    var agree = document.getElementsByClassName("agree");
    var i;
    for (i = 0; i < agree.length; i++) {
        agree[i].checked = false;
    }
    jQuery('.agree').prop('checked', false);
});





//добавить адрес :addaddr
var subaddr_count = 0;
$('#add-subaddress').on('click', function () {
    subaddr_count++;
    $('#sub-addresses-box').append('<div id="sub-address-box-' + subaddr_count + '">' +
        '<label class="form-left" for="sub-address-' + subaddr_count + '">Дополнительный адрес:</label>' +
        '<input class="sub-addr-fixed-width sub-address" id="sub-address-' + subaddr_count + '" name="sub-address-' + subaddr_count + '">' +
        '<span class="del-sub-addr"></span>' +
        '</div>');
    updateTransferCostWithSubAddr();
});
//удалить доп.адрес
$('#sub-addresses-box').on('click', '.del-sub-addr', function () {
    $(this).parent().remove();
    updateTransferCostWithSubAddr();
    //$(this).after("<tr><td>test</td></tr>");
});
$("#subaddr_count").val(subaddr_count);
//добавить пассажира :addpass
var pass_count = 1;
$('#add-passenger').on('click', function () {
    pass_count++;
    $('#passengers').append('<div class="passenger-box">' +
        '<label class="form-left" for="fio">ФИО:</label>' +
        '<input class="order-fixed-width" name="fio-' + pass_count + '">' + '<span class="del-passenger"></span><br>' +
        '<label class="form-left" for="order-date">Мобильный телефон:</label>' +
        '<input class="order-fixed-width" name="phone-' + pass_count + '"><br>' +
        '<label class="form-left" for="order-date">Электронная почта:</label>' +
        '<input class="order-fixed-width" name="email-' + pass_count + '"><br>' +
        '</div>');
    $(".del-passenger").show();
    if (parseInt($('#passengers_number').attr('num-max')) == pass_count) {
        $('#add-passenger').addClass('disabled');
    }
    var pass_val = $('#passengers_number').val();
    updatePassengersSelector(pass_count, 0);
    if (pass_val > pass_count) {
        $('#passengers_number').val(pass_val);
    }
});
$("#pass_count").val(pass_count);
//Удалить пассажира
$('#passengers').on('click', '.del-passenger', function () {
    $(this).parent().remove();
    pass_count--;
    if (pass_count == 1) {
        $(".del-passenger").hide();
    }
    if (parseInt($('#passengers_number').attr('num-max')) > pass_count) {
        $('#add-passenger').removeClass('disabled');
    }
    var pass_val = $('#passengers_number').val();
    updatePassengersSelector(pass_count, 0);
    if (pass_val < pass_count) {
        $('#passengers_number').val(pass_val);
    }
});

jQuery(document).ready(function ($) {
    $("#contact").submit(function () {
        var str = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "/wp-content/themes/bt_one/mail.php",
            data: str,
            success: function (msg) {
                if (msg == 'OK') {
                    result = '<div class="ok">Сообщение отправлено</div>';
                    $("#fields").hide();
                }
                else { result = msg; }
                $('#note').html(result);
            }
        });
        return false;
    });
});
$(document).ready(function () {
    $(".order-form-btn").click(function () {
        $('html, body').animate({
            scrollTop: $(".order-form").offset().top
        }, 0000);
    });


    $('.tab_tranbut').on('click', function () {
        $('#transfer_table_form .tr_punkt_1').val($(this).parents('td').siblings('.city_item').find('.citytr_1').text());
        $('#transfer_table_form .tr_punkt_2').val($(this).parents('td').siblings('.city_item').find('.citytr_2').text());
        $('#transfer_table_form .tr_clss_auto').val($(this).parents('td').siblings('.class_auto').find('select.autovallabl option:selected').text());
        $('#transfer_table_form .tr_distance').val($(this).parents('td').siblings('.distance').text());
        $('#transfer_table_form .tr_time').val($(this).parents('td').siblings('.time').text());
        $('#transfer_table_form .tr_price').val($(this).parents('td').siblings('.price').find('select option:selected').text());
    });

    // transfer_table_form
    $("#transfer_table_form").validate({
        rules: {
            ttr_name: "required",
            ttr_phone: "required",
            ttr_email: {
                required: true,
                email: true
            },
        },
        errorElement: "em",
        errorPlacement: function (error, element) {
            return true;
        },
        errorClass: "myErrorCssClass",
    });






    $('select.autovallabl').on('change', function () {
        var someVar = $(this).val();
        switch (someVar) {
            case 'vali_1':
                //execute code block
                $(this).parents('td').find('.desc .item select option.sel2n_1').prop('selected', true);
                $(this).parents('td').siblings('td.price').find('select option.valis_1').prop('selected', true);
                $(this).parents('td').siblings('td').find('select option.sel4n_1').prop('selected', true);
                break;
            case 'vali_2':
                //execute code block
                $(this).parents('td').find('.desc .item select option.sel2n_2').prop('selected', true);
                $(this).parents('td').siblings('td.price').find('select option.valis_2').prop('selected', true);
                $(this).parents('td').siblings('td').find('select option.sel4n_2').prop('selected', true);
                break;
            case 'vali_3':
                //execute code block
                $(this).parents('td').find('.desc .item select option.sel2n_3').prop('selected', true);
                $(this).parents('td').siblings('td.price').find('select option.valis_3').prop('selected', true);
                $(this).parents('td').siblings('td').find('select option.sel4n_3').prop('selected', true);
                break;
            case 'vali_4':
                //execute code block
                $(this).parents('td').find('.desc .item select option.sel2n_4').prop('selected', true);
                $(this).parents('td').siblings('td.price').find('select option.valis_4').prop('selected', true);
                $(this).parents('td').siblings('td').find('select option.sel4n_4').prop('selected', true);
                break;
            case 'vali_5':
                //execute code block
                $(this).parents('td').find('.desc .item select option.sel2n_5').prop('selected', true);
                $(this).parents('td').siblings('td.price').find('select option.valis_5').prop('selected', true);
                $(this).parents('td').siblings('td').find('select option.sel4n_5').prop('selected', true);
                break;
            case 'vali_6':
                //execute code block
                $(this).parents('td').find('.desc .item select option.sel2n_6').prop('selected', true);
                $(this).parents('td').siblings('td.price').find('select option.valis_6').prop('selected', true);
                $(this).parents('td').siblings('td').find('select option.sel4n_6').prop('selected', true);
                break;
            case 'vali_7':
                //execute code block
                $(this).parents('td').find('.desc .item select option.sel2n_7').prop('selected', true);
                $(this).parents('td').siblings('td.price').find('select option.valis_7').prop('selected', true);
                $(this).parents('td').siblings('td').find('select option.sel4n_7').prop('selected', true);
                break;
            case 'vali_8':
                //execute code block
                $(this).parents('td').find('.desc .item select option.sel2n_8').prop('selected', true);
                $(this).parents('td').siblings('td.price').find('select option.valis_8').prop('selected', true);
                $(this).parents('td').siblings('td').find('select option.sel4n_8').prop('selected', true);
                break;
            case 'vali_9':
                //execute code block
                $(this).parents('td').find('.desc .item select option.sel2n_9').prop('selected', true);
                $(this).parents('td').siblings('td.price').find('select option.valis_9').prop('selected', true);
                $(this).parents('td').siblings('td').find('select option.sel4n_9').prop('selected', true);
                break;
            case 'vali_10':
                //execute code block
                $(this).parents('td').find('.desc .item select option.sel2n_10').prop('selected', true);
                $(this).parents('td').siblings('td.price').find('select option.valis_10').prop('selected', true);
                $(this).parents('td').siblings('td').find('select option.sel4n_10').prop('selected', true);
                break;
            default:
            // code to be executed if n is different from case 1 and 2
        }
    });

});
