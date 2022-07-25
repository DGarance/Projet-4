var a, e, t, i, n;
(a = jQuery),
  (e = []),
  (t = {
    options: {
      prependExistingHelpBlock: !1,
      sniffHtml: !0,
      preventSubmit: !0,
      submitError: !1,
      submitSuccess: !1,
      semanticallyStrict: !1,
      autoAdd: { helpBlocks: !0 },
      filter: function () {
        return !0;
      },
    },
    methods: {
      init: function (o) {
        var r = a.extend(!0, {}, t);
        return (
          (r.options = a.extend(!0, r.options, o)),
          (o = a.unique(
            this.map(function () {
              return a(this).parents("form")[0];
            }).toArray()
          )),
          a(o).bind("submit", function (e) {
            var t = a(this),
              i = 0,
              n = t
                .find("input,textarea,select")
                .not("[type=submit],[type=image]")
                .filter(r.options.filter);
            n
              .trigger("submit.validation")
              .trigger("validationLostFocus.validation"),
              n.each(function (e, t) {
                (t = a(t).parents(".form-group, .checkbox").first()).hasClass(
                  "warning"
                ) && (t.removeClass("warning").addClass("error"), i++);
              }),
              n.trigger("validationLostFocus.validation"),
              i
                ? (r.options.preventSubmit && e.preventDefault(),
                  t.addClass("error"),
                  a.isFunction(r.options.submitError) &&
                    r.options.submitError(
                      t,
                      e,
                      n.jqBootstrapValidation("collectErrors", !0)
                    ))
                : (t.removeClass("error"),
                  a.isFunction(r.options.submitSuccess) &&
                    r.options.submitSuccess(t, e));
          }),
          this.each(function () {
            var t,
              o,
              l = a(this),
              s = l.parents(".form-group, .checkbox").first(),
              d = s.find(".help-block").first(),
              c = l.parents("form").first(),
              m = [];
            !d.length &&
              r.options.autoAdd &&
              r.options.autoAdd.helpBlocks &&
              ((d = a('<div class="help-block" />')),
              s.append(d),
              e.push(d[0])),
              r.options.sniffHtml &&
                ((t = ""),
                void 0 !== l.attr("pattern") &&
                  ((t =
                    "Not in the expected format\x3c!-- data-validation-pattern-message to override --\x3e"),
                  l.data("validationPatternMessage") &&
                    (t = l.data("validationPatternMessage")),
                  l.data("validationPatternMessage", t),
                  l.data("validationPatternRegex", l.attr("pattern"))),
                (void 0 === l.attr("max") &&
                  void 0 === l.attr("aria-valuemax")) ||
                  ((t =
                    "Too high: Maximum of '" +
                    (o =
                      void 0 !== l.attr("max")
                        ? l.attr("max")
                        : l.attr("aria-valuemax")) +
                    "'\x3c!-- data-validation-max-message to override --\x3e"),
                  l.data("validationMaxMessage") &&
                    (t = l.data("validationMaxMessage")),
                  l.data("validationMaxMessage", t),
                  l.data("validationMaxMax", o)),
                (void 0 === l.attr("min") &&
                  void 0 === l.attr("aria-valuemin")) ||
                  ((t =
                    "Too low: Minimum of '" +
                    (o =
                      void 0 !== l.attr("min")
                        ? l.attr("min")
                        : l.attr("aria-valuemin")) +
                    "'\x3c!-- data-validation-min-message to override --\x3e"),
                  l.data("validationMinMessage") &&
                    (t = l.data("validationMinMessage")),
                  l.data("validationMinMessage", t),
                  l.data("validationMinMin", o)),
                void 0 !== l.attr("maxlength") &&
                  ((t =
                    "Too long: Maximum of '" +
                    l.attr("maxlength") +
                    "' characters\x3c!-- data-validation-maxlength-message to override --\x3e"),
                  l.data("validationMaxlengthMessage") &&
                    (t = l.data("validationMaxlengthMessage")),
                  l.data("validationMaxlengthMessage", t),
                  l.data("validationMaxlengthMaxlength", l.attr("maxlength"))),
                void 0 !== l.attr("minlength") &&
                  ((t =
                    "Too short: Minimum of '" +
                    l.attr("minlength") +
                    "' characters\x3c!-- data-validation-minlength-message to override --\x3e"),
                  l.data("validationMinlengthMessage") &&
                    (t = l.data("validationMinlengthMessage")),
                  l.data("validationMinlengthMessage", t),
                  l.data("validationMinlengthMinlength", l.attr("minlength"))),
                (void 0 === l.attr("required") &&
                  void 0 === l.attr("aria-required")) ||
                  ((t = r.builtInValidators.required.message),
                  l.data("validationRequiredMessage") &&
                    (t = l.data("validationRequiredMessage")),
                  l.data("validationRequiredMessage", t)),
                void 0 !== l.attr("type") &&
                  "number" === l.attr("type").toLowerCase() &&
                  ((t = r.builtInValidators.number.message),
                  l.data("validationNumberMessage") &&
                    (t = l.data("validationNumberMessage")),
                  l.data("validationNumberMessage", t)),
                void 0 !== l.attr("type") &&
                  "email" === l.attr("type").toLowerCase() &&
                  ((t =
                    "Not a valid email address\x3c!-- data-validator-validemail-message to override --\x3e"),
                  l.data("validationValidemailMessage")
                    ? (t = l.data("validationValidemailMessage"))
                    : l.data("validationEmailMessage") &&
                      (t = l.data("validationEmailMessage")),
                  l.data("validationValidemailMessage", t)),
                void 0 !== l.attr("minchecked") &&
                  ((t =
                    "Not enough options checked; Minimum of '" +
                    l.attr("minchecked") +
                    "' required\x3c!-- data-validation-minchecked-message to override --\x3e"),
                  l.data("validationMincheckedMessage") &&
                    (t = l.data("validationMincheckedMessage")),
                  l.data("validationMincheckedMessage", t),
                  l.data(
                    "validationMincheckedMinchecked",
                    l.attr("minchecked")
                  )),
                void 0 !== l.attr("maxchecked") &&
                  ((t =
                    "Too many options checked; Maximum of '" +
                    l.attr("maxchecked") +
                    "' required\x3c!-- data-validation-maxchecked-message to override --\x3e"),
                  l.data("validationMaxcheckedMessage") &&
                    (t = l.data("validationMaxcheckedMessage")),
                  l.data("validationMaxcheckedMessage", t),
                  l.data(
                    "validationMaxcheckedMaxchecked",
                    l.attr("maxchecked")
                  ))),
              void 0 !== l.data("validation") &&
                (m = l.data("validation").split(",")),
              a.each(l.data(), function (a, e) {
                "validation" ===
                  (a = a.replace(/([A-Z])/g, ",$1").split(","))[0] &&
                  a[1] &&
                  m.push(a[1]);
              });
            for (
              var u = m, v = [];
              a.each(m, function (a, e) {
                m[a] = i(e);
              }),
                (m = a.unique(m)),
                (v = []),
                a.each(u, function (e, t) {
                  void 0 !== l.data("validation" + t + "Shortcut")
                    ? a.each(
                        l.data("validation" + t + "Shortcut").split(","),
                        function (a, e) {
                          v.push(e);
                        }
                      )
                    : !r.builtInValidators[t.toLowerCase()] ||
                      ("shortcut" ===
                        (t =
                          r.builtInValidators[
                            t.toLowerCase()
                          ]).type.toLowerCase() &&
                        a.each(t.shortcut.split(","), function (a, e) {
                          (e = i(e)), v.push(e), m.push(e);
                        }));
                }),
                0 < (u = v).length;

            );
            var g = {};
            a.each(m, function (e, t) {
              var n,
                o,
                s = void 0 !== (c = l.data("validation" + t + "Message")),
                d = !1,
                c =
                  c ||
                  "'" +
                    t +
                    "' validation failed \x3c!-- Add attribute 'data-validation-" +
                    t.toLowerCase() +
                    "-message' to input to change this message --\x3e";
              a.each(r.validatorTypes, function (e, n) {
                void 0 === g[e] && (g[e] = []),
                  d ||
                    void 0 === l.data("validation" + t + i(n.name)) ||
                    (g[e].push(
                      a.extend(
                        !0,
                        { name: i(n.name), message: c },
                        n.init(l, t)
                      )
                    ),
                    (d = !0));
              }),
                !d &&
                  r.builtInValidators[t.toLowerCase()] &&
                  ((n = a.extend(!0, {}, r.builtInValidators[t.toLowerCase()])),
                  s && (n.message = c),
                  "shortcut" === (o = n.type.toLowerCase())
                    ? (d = !0)
                    : a.each(r.validatorTypes, function (e, r) {
                        void 0 === g[e] && (g[e] = []),
                          d ||
                            o !== e.toLowerCase() ||
                            (l.data(
                              "validation" + t + i(r.name),
                              n[r.name.toLowerCase()]
                            ),
                            g[o].push(a.extend(n, r.init(l, t))),
                            (d = !0));
                      })),
                d || a.error("Cannot find validation info for '" + t + "'");
            }),
              d.data(
                "original-contents",
                d.data("original-contents")
                  ? d.data("original-contents")
                  : d.html()
              ),
              d.data(
                "original-role",
                d.data("original-role")
                  ? d.data("original-role")
                  : d.attr("role")
              ),
              s.data(
                "original-classes",
                s.data("original-clases")
                  ? s.data("original-classes")
                  : s.attr("class")
              ),
              l.data(
                "original-aria-invalid",
                l.data("original-aria-invalid")
                  ? l.data("original-aria-invalid")
                  : l.attr("aria-invalid")
              ),
              l.bind("validation.validation", function (e, t) {
                var i = n(l),
                  o = [];
                return (
                  a.each(g, function (e, n) {
                    (i ||
                      i.length ||
                      (t && t.includeEmpty) ||
                      (r.validatorTypes[e].blockSubmit && t && t.submitting)) &&
                      a.each(n, function (a, t) {
                        r.validatorTypes[e].validate(l, i, t) &&
                          o.push(t.message);
                      });
                  }),
                  o
                );
              }),
              l.bind("getValidators.validation", function () {
                return g;
              }),
              l.bind("submit.validation", function () {
                return l.triggerHandler("change.validation", {
                  submitting: !0,
                });
              }),
              l.bind(
                [
                  "keyup",
                  "focus",
                  "blur",
                  "click",
                  "keydown",
                  "keypress",
                  "change",
                ].join(".validation ") + ".validation",
                function (e, t) {
                  var i = n(l),
                    o = [];
                  s.find("input,textarea,select").each(function (e, i) {
                    var n = o.length;
                    a.each(
                      a(i).triggerHandler("validation.validation", t),
                      function (a, e) {
                        o.push(e);
                      }
                    ),
                      o.length > n
                        ? a(i).attr("aria-invalid", "true")
                        : ((n = l.data("original-aria-invalid")),
                          a(i).attr("aria-invalid", void 0 !== n && n));
                  }),
                    c
                      .find("input,select,textarea")
                      .not(l)
                      .not('[name="' + l.attr("name") + '"]')
                      .trigger("validationLostFocus.validation"),
                    (o = a.unique(o.sort())).length
                      ? (s.removeClass("success error").addClass("warning"),
                        r.options.semanticallyStrict && 1 === o.length
                          ? d.html(
                              o[0] +
                                (r.options.prependExistingHelpBlock
                                  ? d.data("original-contents")
                                  : "")
                            )
                          : d.html(
                              '<ul class="list-unstyled alert alert-warning" role="alert"><li>' +
                                o.join("</li><li>") +
                                "</li></ul>" +
                                (r.options.prependExistingHelpBlock
                                  ? d.data("original-contents")
                                  : "")
                            ))
                      : (s.removeClass("warning error success"),
                        0 < i.length && s.addClass("success"),
                        d.html(d.data("original-contents"))),
                    "blur" === e.type && s.removeClass("success");
                }
              ),
              l.bind("validationLostFocus.validation", function () {
                s.removeClass("success");
              });
          })
        );
      },
      destroy: function () {
        return this.each(function () {
          var t = a(this),
            i = t.parents(".form-group, .checkbox").first(),
            n = i.find(".help-block").first();
          t.unbind(".validation"),
            n.html(n.data("original-contents")),
            i.attr("class", i.data("original-classes")),
            t.attr("aria-invalid", t.data("original-aria-invalid")),
            n.attr("role", t.data("original-role")),
            -1 < e.indexOf(n[0]) && n.remove();
        });
      },
      collectErrors: function (e) {
        var t = {};
        return (
          this.each(function (e, i) {
            i = (n = a(i)).attr("name");
            var n = n.triggerHandler("validation.validation", {
              includeEmpty: !0,
            });
            t[i] = a.extend(!0, n, t[i]);
          }),
          a.each(t, function (a, e) {
            0 === e.length && delete t[a];
          }),
          t
        );
      },
      hasErrors: function () {
        var e = [];
        return (
          this.each(function (t, i) {
            e = e.concat(
              a(i).triggerHandler("getValidators.validation")
                ? a(i).triggerHandler("validation.validation", {
                    submitting: !0,
                  })
                : []
            );
          }),
          0 < e.length
        );
      },
      override: function (e) {
        t = a.extend(!0, t, e);
      },
    },
    validatorTypes: {
      callback: {
        name: "callback",
        init: function (a, e) {
          return {
            validatorName: e,
            callback: a.data("validation" + e + "Callback"),
            lastValue: a.val(),
            lastValid: !0,
            lastFinished: !0,
          };
        },
        validate: function (a, e, t) {
          return t.lastValue === e && t.lastFinished
            ? !t.lastValid
            : (!0 === t.lastFinished &&
                ((t.lastValue = e),
                (t.lastValid = !0),
                (t.lastFinished = !1),
                (n = a),
                (function (a, e) {
                  for (
                    var t = Array.prototype.slice.call(arguments).splice(2),
                      i = a.split("."),
                      n = i.pop(),
                      o = 0;
                    o < i.length;
                    o++
                  )
                    e = e[i[o]];
                  e[n].apply(this, t);
                })((i = t).callback, window, a, e, function (a) {
                  i.lastValue === a.value &&
                    ((i.lastValid = a.valid),
                    a.message && (i.message = a.message),
                    (i.lastFinished = !0),
                    n.data(
                      "validation" + i.validatorName + "Message",
                      i.message
                    ),
                    setTimeout(function () {
                      n.trigger("change.validation");
                    }, 1));
                })),
              !1);
          var i, n;
        },
      },
      ajax: {
        name: "ajax",
        init: function (a, e) {
          return {
            validatorName: e,
            url: a.data("validation" + e + "Ajax"),
            lastValue: a.val(),
            lastValid: !0,
            lastFinished: !0,
          };
        },
        validate: function (e, t, i) {
          return "" + i.lastValue == "" + t && !0 === i.lastFinished
            ? !1 === i.lastValid
            : (!0 === i.lastFinished &&
                ((i.lastValue = t),
                (i.lastValid = !0),
                (i.lastFinished = !1),
                a.ajax({
                  url: i.url,
                  data: "value=" + t + "&field=" + e.attr("name"),
                  dataType: "json",
                  success: function (a) {
                    "" + i.lastValue == "" + a.value &&
                      ((i.lastValid = !!a.valid),
                      a.message && (i.message = a.message),
                      (i.lastFinished = !0),
                      e.data(
                        "validation" + i.validatorName + "Message",
                        i.message
                      ),
                      setTimeout(function () {
                        e.trigger("change.validation");
                      }, 1));
                  },
                  failure: function () {
                    (i.lastValid = !0),
                      (i.message = "ajax call failed"),
                      (i.lastFinished = !0),
                      e.data(
                        "validation" + i.validatorName + "Message",
                        i.message
                      ),
                      setTimeout(function () {
                        e.trigger("change.validation");
                      }, 1);
                  },
                })),
              !1);
        },
      },
      regex: {
        name: "regex",
        init: function (a, e) {
          return {
            regex:
              ((e = a.data("validation" + e + "Regex")),
              new RegExp("^" + e + "$")),
          };
        },
        validate: function (a, e, t) {
          return (
            (!t.regex.test(e) && !t.negative) || (t.regex.test(e) && t.negative)
          );
        },
      },
      required: {
        name: "required",
        init: function (a, e) {
          return {};
        },
        validate: function (a, e, t) {
          return (
            !(0 !== e.length || t.negative) || !!(0 < e.length && t.negative)
          );
        },
        blockSubmit: !0,
      },
      match: {
        name: "match",
        init: function (a, e) {
          return (
            (e = a
              .parents("form")
              .first()
              .find('[name="' + a.data("validation" + e + "Match") + '"]')
              .first()).bind("validation.validation", function () {
              a.trigger("change.validation", { submitting: !0 });
            }),
            { element: e }
          );
        },
        validate: function (a, e, t) {
          return (
            (e !== t.element.val() && !t.negative) ||
            (e === t.element.val() && t.negative)
          );
        },
        blockSubmit: !0,
      },
      max: {
        name: "max",
        init: function (a, e) {
          return { max: a.data("validation" + e + "Max") };
        },
        validate: function (a, e, t) {
          return (
            (parseFloat(e, 10) > parseFloat(t.max, 10) && !t.negative) ||
            (parseFloat(e, 10) <= parseFloat(t.max, 10) && t.negative)
          );
        },
      },
      min: {
        name: "min",
        init: function (a, e) {
          return { min: a.data("validation" + e + "Min") };
        },
        validate: function (a, e, t) {
          return (
            (parseFloat(e) < parseFloat(t.min) && !t.negative) ||
            (parseFloat(e) >= parseFloat(t.min) && t.negative)
          );
        },
      },
      maxlength: {
        name: "maxlength",
        init: function (a, e) {
          return { maxlength: a.data("validation" + e + "Maxlength") };
        },
        validate: function (a, e, t) {
          return (
            (e.length > t.maxlength && !t.negative) ||
            (e.length <= t.maxlength && t.negative)
          );
        },
      },
      minlength: {
        name: "minlength",
        init: function (a, e) {
          return { minlength: a.data("validation" + e + "Minlength") };
        },
        validate: function (a, e, t) {
          return (
            (e.length < t.minlength && !t.negative) ||
            (e.length >= t.minlength && t.negative)
          );
        },
      },
      maxchecked: {
        name: "maxchecked",
        init: function (a, e) {
          var t = a
            .parents("form")
            .first()
            .find('[name="' + a.attr("name") + '"]');
          return (
            t.bind("click.validation", function () {
              a.trigger("change.validation", { includeEmpty: !0 });
            }),
            { maxchecked: a.data("validation" + e + "Maxchecked"), elements: t }
          );
        },
        validate: function (a, e, t) {
          return (
            (t.elements.filter(":checked").length > t.maxchecked &&
              !t.negative) ||
            (t.elements.filter(":checked").length <= t.maxchecked && t.negative)
          );
        },
        blockSubmit: !0,
      },
      minchecked: {
        name: "minchecked",
        init: function (a, e) {
          var t = a
            .parents("form")
            .first()
            .find('[name="' + a.attr("name") + '"]');
          return (
            t.bind("click.validation", function () {
              a.trigger("change.validation", { includeEmpty: !0 });
            }),
            { minchecked: a.data("validation" + e + "Minchecked"), elements: t }
          );
        },
        validate: function (a, e, t) {
          return (
            (t.elements.filter(":checked").length < t.minchecked &&
              !t.negative) ||
            (t.elements.filter(":checked").length >= t.minchecked && t.negative)
          );
        },
        blockSubmit: !0,
      },
    },
    builtInValidators: {
      email: { name: "Email", type: "shortcut", shortcut: "validemail" },
      validemail: {
        name: "Validemail",
        type: "regex",
        regex: "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,10}",
        message:
          "Not a valid email address\x3c!-- data-validator-validemail-message to override --\x3e",
      },
      passwordagain: {
        name: "Passwordagain",
        type: "match",
        match: "password",
        message:
          "Does not match the given password\x3c!-- data-validator-paswordagain-message to override --\x3e",
      },
      positive: {
        name: "Positive",
        type: "shortcut",
        shortcut: "number,positivenumber",
      },
      negative: {
        name: "Negative",
        type: "shortcut",
        shortcut: "number,negativenumber",
      },
      number: {
        name: "Number",
        type: "regex",
        regex: "([+-]?\\d+(\\.\\d*)?([eE][+-]?[0-9]+)?)?",
        message:
          "Must be a number\x3c!-- data-validator-number-message to override --\x3e",
      },
      integer: {
        name: "Integer",
        type: "regex",
        regex: "[+-]?\\d+",
        message:
          "No decimal places allowed\x3c!-- data-validator-integer-message to override --\x3e",
      },
      positivenumber: {
        name: "Positivenumber",
        type: "min",
        min: 0,
        message:
          "Must be a positive number\x3c!-- data-validator-positivenumber-message to override --\x3e",
      },
      negativenumber: {
        name: "Negativenumber",
        type: "max",
        max: 0,
        message:
          "Must be a negative number\x3c!-- data-validator-negativenumber-message to override --\x3e",
      },
      required: {
        name: "Required",
        type: "required",
        message:
          "This is required\x3c!-- data-validator-required-message to override --\x3e",
      },
      checkone: {
        name: "Checkone",
        type: "minchecked",
        minchecked: 1,
        message:
          "Check at least one option\x3c!-- data-validation-checkone-message to override --\x3e",
      },
    },
  }),
  (i = function (a) {
    return a.toLowerCase().replace(/(^|\s)([a-z])/g, function (a, e, t) {
      return e + t.toUpperCase();
    });
  }),
  (n = function (e) {
    var t = e.val(),
      i = e.attr("type");
    return (
      "checkbox" === i && (t = e.is(":checked") ? t : ""),
      "radio" === i &&
        (t =
          0 < a('input[name="' + e.attr("name") + '"]:checked').length
            ? t
            : ""),
      t
    );
  }),
  (a.fn.jqBootstrapValidation = function (e) {
    return t.methods[e]
      ? t.methods[e].apply(this, Array.prototype.slice.call(arguments, 1))
      : "object" != typeof e && e
      ? (a.error(
          "Method " + e + " does not exist on jQuery.jqBootstrapValidation"
        ),
        null)
      : t.methods.init.apply(this, arguments);
  }),
  (a.jqBootstrapValidation = function (e) {
    a(":input")
      .not("[type=image],[type=submit]")
      .jqBootstrapValidation.apply(this, arguments);
  });
