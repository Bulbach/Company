function applyHandler(formElement) {
   const data = $(formElement).serializeArray();
   console.log(formElement,data)
   $.ajax({
      url: 'Ajax.ashx',
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      success: function (msg) {
         alert(msg);
      },
      error: function () {
         alert("Something wrong!");
      }
         });
   return false;
}

// $(document).ready(function () {
//    $("form").submit(function () {
//       // Получение ID формы
//       var formID = $(this).attr('id');
//       // Добавление решётки к имени ID
//       var formNm = $('#' + formID);
//       $.ajax({
//          type: "POST",
//          url: 'mail.php',
//          data: formNm.serialize(),
//          success: function (data) {
//             // Вывод текста результата отправки
//             $(formNm).html(data);
//          },
//          error: function (jqXHR, text, error) {
//             // Вывод текста ошибки отправки
//             $(formNm).html(error);
//          }
//       });
//       return false;
//    });
// });