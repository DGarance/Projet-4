$(function () {
  $("input,textarea").jqBootstrapValidation({
    preventSubmit: !0,
    submitSuccess: function (t, e) {
      var i, s;
      t.attr("action") ||
        (e.preventDefault(),
        (e = "./includes/" + (s = t).attr("id") + ".php"),
        s.attr("template-path") &&
          (e = s.attr("template-path") + "/includes/" + s.attr("id") + ".php"),
        (i = {}),
        t.find("input, textarea, option:selected").each(function (t) {
          var e = $(this).val(),
            s = $(this).attr("id");
          $(this).is(":checkbox")
            ? (e = $(this).is(":checked"))
            : $(this).is(":radio")
            ? (e = $(this).val() + " = " + $(this).is(":checked"))
            : $(this).is("option:selected") &&
              (s = $(this).parent().attr("id")),
            (i[s] = e);
        }),
        $.ajax({
          url: e,
          type: "POST",
          data: i,
          cache: !1,
          success: function () {
            t.is("[success-msg]")
              ? t.append(
                  "<div id='form-alert'><div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>" +
                    t.attr("success-msg") +
                    "</strong></div></div>"
                )
              : window.location.replace(t.attr("success-url")),
              t.trigger("reset");
          },
          error: function () {
            0 == $("#form-alert").length &&
              t.append(
                "<div id='form-alert'><div class='alert alert-danger'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>" +
                  t.attr("fail-msg") +
                  "</strong></div></div>"
              );
          },
        }));
    },
    filter: function () {
      return $(this).is(":visible");
    },
  });
});
