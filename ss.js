  $(document).ready(function () {
    const _token = '';
    const getDownloadUrl = '';
    var waitingTime = 5;

    function prepareDownloadLinkCountDown() {
      var td = $("#material-download-waiting-time");
      td.html(`${waitingTime--}`);

      if (waitingTime >= 0)
        setTimeout(prepareDownloadLinkCountDown, 1000);

      if (waitingTime == -1) {
        setTimeout(() => {
          $("#material-download-waiting").html(`<p class="text-center">تم تجهيز رابط التحميل ... يرجى الانتظار</p>`);

          setTimeout(() => {
            const params = {
              _token: _token
            };

            $.post(getDownloadUrl, params, function (data, textStatus, jqXHR) {
              if (textStatus == 'success') {
                var a = data.a;
                var name = data.name;

                var form = `
                  <form id="material-download-form" method="get" target="_blank">
                    <a href="${a}" type="button" class="btn btn-primary">بدء التحميل</a>
                  </form>
                `;
                $("#material-download-waiting").fadeOut();
                $("#material-download-waiting").parent().append(form);
              }
            });
          }, 1000);
        }, 1000);
      }
    }

    prepareDownloadLinkCountDown();
  });
