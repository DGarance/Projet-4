!(function (e, t) {
  "object" == typeof exports
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(["jquery", "googlemaps!"], t)
    : (e.GMaps = t());
})(this, function () {
  function t(e, t) {
    if (e === t) return e;
    for (var o in t) void 0 !== t[o] && (e[o] = t[o]);
    return e;
  }
  function o(e, t) {
    var o,
      n = Array.prototype.slice.call(arguments, 2),
      i = [],
      r = e.length;
    if (Array.prototype.map && e.map === Array.prototype.map)
      i = Array.prototype.map.call(e, function (e) {
        var o = n.slice(0);
        return o.splice(0, 0, e), t.apply(this, o);
      });
    else
      for (o = 0; o < r; o++)
        (callback_params = n),
          callback_params.splice(0, 0, e[o]),
          i.push(t.apply(this, callback_params));
    return i;
  }
  function n(e) {
    for (var t = [], o = 0; o < e.length; o++) t = t.concat(e[o]);
    return t;
  }
  function i(e, t) {
    return (
      (e = e.replace("#", "")),
      "jQuery" in window && t ? $("#" + e, t)[0] : document.getElementById(e)
    );
  }
  var r,
    s,
    a,
    l,
    p = function (e, t) {
      for (var o, n, i, r, s = 0; s < e.length; s++)
        e[s] instanceof google.maps.LatLng ||
          (0 < e[s].length && "object" == typeof e[s][0]
            ? (e[s] = p(e[s], t))
            : (e[s] =
                ((n = t),
                (r = i = void 0),
                (i = (o = e[s])[0]),
                (r = o[1]),
                n && ((i = o[1]), (r = o[0])),
                new google.maps.LatLng(i, r))));
      return e;
    },
    c =
      ((r = document),
      (s = function (e) {
        if ("object" != typeof window.google || !window.google.maps)
          return (
            "object" == typeof window.console &&
              window.console.error &&
              console.error(
                "Google Maps API is required. Please register the following JavaScript library https://maps.googleapis.com/maps/api/js."
              ),
            function () {}
          );
        if (!this) return new s(e);
        (e.zoom = e.zoom || 15), (e.mapType = e.mapType || "roadmap");
        var o,
          n = function (e, t) {
            return void 0 === e ? t : e;
          },
          a = this,
          l = [
            "bounds_changed",
            "center_changed",
            "click",
            "dblclick",
            "drag",
            "dragend",
            "dragstart",
            "idle",
            "maptypeid_changed",
            "projection_changed",
            "resize",
            "tilesloaded",
            "zoom_changed",
          ],
          p = ["mousemove", "mouseout", "mouseover"],
          c = [
            "el",
            "lat",
            "lng",
            "mapType",
            "width",
            "height",
            "markerClusterer",
            "enableNewStyle",
          ],
          g = e.el || e.div,
          h = e.markerClusterer,
          u = google.maps.MapTypeId[e.mapType.toUpperCase()],
          d = new google.maps.LatLng(e.lat, e.lng),
          m = n(e.zoomControl, !0),
          f =
            (k = e.zoomControlOpt || { style: "DEFAULT", position: "TOP_LEFT" })
              .style || "DEFAULT",
          y = k.position || "TOP_LEFT",
          v = n(e.panControl, !0),
          w = n(e.mapTypeControl, !0),
          k = n(e.scaleControl, !0),
          L = ((n = n(e.streetViewControl, !0)), {});
        (u = { zoom: this.zoom, center: d, mapTypeId: u }),
          (n = {
            panControl: v,
            zoomControl: m,
            zoomControlOptions: {
              style: google.maps.ZoomControlStyle[f],
              position: google.maps.ControlPosition[y],
            },
            mapTypeControl: w,
            scaleControl: k,
            streetViewControl: n,
            overviewMapControl: !0,
          });
        if (
          ("string" == typeof e.el || "string" == typeof e.div
            ? -1 < g.indexOf("#")
              ? (this.el = i(g, e.context))
              : (this.el = function (e, t) {
                  return (
                    (e = e.replace(".", "")),
                    ("jQuery" in this && t
                      ? $("." + e, t)
                      : document.getElementsByClassName(e))[0]
                  );
                }.apply(this, [g, e.context]))
            : (this.el = g),
          void 0 === this.el || null === this.el)
        )
          throw "No element defined.";
        for (
          window.context_menu = window.context_menu || {},
            window.context_menu[a.el.id] = {},
            this.controls = [],
            this.overlays = [],
            this.layers = [],
            this.singleLayers = {},
            this.markers = [],
            this.polylines = [],
            this.routes = [],
            this.polygons = [],
            this.infoWindow = null,
            this.overlay_el = null,
            this.zoom = e.zoom,
            this.registered_events = {},
            this.el.style.width =
              e.width || this.el.scrollWidth || this.el.offsetWidth,
            this.el.style.height =
              e.height || this.el.scrollHeight || this.el.offsetHeight,
            google.maps.visualRefresh = e.enableNewStyle,
            o = 0;
          o < c.length;
          o++
        )
          delete e[c[o]];
        for (
          1 != e.disableDefaultUI && (u = t(u, n)), L = t(u, e), o = 0;
          o < l.length;
          o++
        )
          delete L[l[o]];
        for (o = 0; o < p.length; o++) delete L[p[o]];
        function b(e, t) {
          var o,
            n = "",
            r = window.context_menu[a.el.id][e];
          for (l in r)
            r.hasOwnProperty(l) &&
              ((o = r[l]),
              (n +=
                '<li><a id="' +
                e +
                "_" +
                l +
                '" href="#">' +
                o.title +
                "</a></li>"));
          if (i("gmaps_context_menu")) {
            var s = i("gmaps_context_menu");
            s.innerHTML = n;
            var l,
              p = s.getElementsByTagName("a"),
              c = p.length;
            for (l = 0; l < c; l++) {
              var g = p[l];
              google.maps.event.clearListeners(g, "click"),
                google.maps.event.addDomListenerOnce(
                  g,
                  "click",
                  function (o) {
                    o.preventDefault(),
                      r[this.id.replace(e + "_", "")].action.apply(a, [t]),
                      a.hideContextMenu();
                  },
                  !1
                );
            }
            var h = function (e) {
                var t = 0,
                  o = 0;
                if (e.getBoundingClientRect) {
                  var n = e.getBoundingClientRect(),
                    i = -(window.scrollX || window.pageXOffset),
                    r = -(window.scrollY || window.pageYOffset);
                  return [n.left - i, n.top - r];
                }
                if (e.offsetParent)
                  for (
                    ;
                    (t += e.offsetLeft),
                      (o += e.offsetTop),
                      (e = e.offsetParent);

                  );
                return [t, o];
              }.apply(this, [a.el]),
              u = h[0] + t.pixel.x - 15;
            h = h[1] + t.pixel.y - 15;
            (s.style.left = u + "px"), (s.style.top = h + "px");
          }
        }
        function _(t, o) {
          google.maps.event.addListener(t, o, function (t) {
            null == t && (t = this), e[o].apply(this, [t]), a.hideContextMenu();
          });
        }
        (this.map = new google.maps.Map(this.el, L)),
          h && (this.markerClusterer = h.apply(this, [this.map])),
          (this.buildContextMenu = function (e, t) {
            var o;
            "marker" === e
              ? ((t.pixel = {}),
                (o = new google.maps.OverlayView()).setMap(a.map),
                (o.draw = function () {
                  var n = o.getProjection(),
                    i = t.marker.getPosition();
                  (t.pixel = n.fromLatLngToContainerPixel(i)), b(e, t);
                }))
              : b(e, t);
            var n = i("gmaps_context_menu");
            setTimeout(function () {
              n.style.display = "block";
            }, 0);
          }),
          (this.setContextMenu = function (e) {
            window.context_menu[a.el.id][e.control] = {};
            var t,
              o,
              n = r.createElement("ul");
            for (t in e.options)
              e.options.hasOwnProperty(t) &&
                ((o = e.options[t]),
                (window.context_menu[a.el.id][e.control][o.name] = {
                  title: o.title,
                  action: o.action,
                }));
            (n.id = "gmaps_context_menu"),
              (n.style.display = "none"),
              (n.style.position = "absolute"),
              (n.style.minWidth = "100px"),
              (n.style.background = "white"),
              (n.style.listStyle = "none"),
              (n.style.padding = "8px"),
              (n.style.boxShadow = "2px 2px 6px #ccc"),
              i("gmaps_context_menu") || r.body.appendChild(n);
            var s = i("gmaps_context_menu");
            google.maps.event.addDomListener(
              s,
              "mouseout",
              function (e) {
                (e.relatedTarget && this.contains(e.relatedTarget)) ||
                  window.setTimeout(function () {
                    s.style.display = "none";
                  }, 400);
              },
              !1
            );
          }),
          (this.hideContextMenu = function () {
            var e = i("gmaps_context_menu");
            e && (e.style.display = "none");
          }),
          google.maps.event.addListener(
            this.map,
            "zoom_changed",
            this.hideContextMenu
          );
        for (var M = 0; M < l.length; M++) (x = l[M]) in e && _(this.map, x);
        var x;
        for (M = 0; M < p.length; M++) (x = p[M]) in e && _(this.map, x);
        google.maps.event.addListener(this.map, "rightclick", function (t) {
          e.rightclick && e.rightclick.apply(this, [t]),
            null != window.context_menu[a.el.id].map &&
              a.buildContextMenu("map", t);
        }),
          (this.refresh = function () {
            google.maps.event.trigger(this.map, "resize");
          }),
          (this.fitZoom = function () {
            for (var e = [], t = this.markers.length, o = 0; o < t; o++)
              "boolean" == typeof this.markers[o].visible &&
                this.markers[o].visible &&
                e.push(this.markers[o].getPosition());
            this.fitLatLngBounds(e);
          }),
          (this.fitLatLngBounds = function (e) {
            for (
              var t = e.length, o = new google.maps.LatLngBounds(), n = 0;
              n < t;
              n++
            )
              o.extend(e[n]);
            this.map.fitBounds(o);
          }),
          (this.setCenter = function (e, t, o) {
            this.map.panTo(new google.maps.LatLng(e, t)), o && o();
          }),
          (this.getElement = function () {
            return this.el;
          }),
          (this.zoomIn = function (e) {
            (e = e || 1),
              (this.zoom = this.map.getZoom() + e),
              this.map.setZoom(this.zoom);
          }),
          (this.zoomOut = function (e) {
            (e = e || 1),
              (this.zoom = this.map.getZoom() - e),
              this.map.setZoom(this.zoom);
          });
        var C,
          O = [];
        for (C in this.map)
          "function" != typeof this.map[C] || this[C] || O.push(C);
        for (o = 0; o < O.length; o++)
          !(function (e, t, o) {
            e[o] = function () {
              return t[o].apply(t, arguments);
            };
          })(this, this.map, O[o]);
      }));
  return (
    (c.prototype.createControl = function (e) {
      var t,
        o,
        n = document.createElement("div");
      for (t in ((n.style.cursor = "pointer"),
      !0 !== e.disableDefaultStyles &&
        ((n.style.fontFamily = "Roboto, Arial, sans-serif"),
        (n.style.fontSize = "11px"),
        (n.style.boxShadow = "rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px")),
      e.style))
        n.style[t] = e.style[t];
      for (o in (e.id && (n.id = e.id),
      e.title && (n.title = e.title),
      e.classes && (n.className = e.classes),
      e.content &&
        ("string" == typeof e.content
          ? (n.innerHTML = e.content)
          : e.content instanceof HTMLElement && n.appendChild(e.content)),
      e.position &&
        (n.position = google.maps.ControlPosition[e.position.toUpperCase()]),
      e.events))
        !(function (t) {
          google.maps.event.addDomListener(n, t, function () {
            e.events[t].apply(this, [this]);
          });
        })(o);
      return (n.index = 1), n;
    }),
    (c.prototype.addControl = function (e) {
      return (
        (e = this.createControl(e)),
        this.controls.push(e),
        this.map.controls[e.position].push(e),
        e
      );
    }),
    (c.prototype.removeControl = function (e) {
      for (var t = null, o = 0; o < this.controls.length; o++)
        this.controls[o] == e &&
          ((t = this.controls[o].position), this.controls.splice(o, 1));
      if (t)
        for (o = 0; o < this.map.controls.length; o++) {
          var n = this.map.controls[e.position];
          if (n.getAt(o) == e) {
            n.removeAt(o);
            break;
          }
        }
      return e;
    }),
    (c.prototype.createMarker = function (e) {
      if (null == e.lat && null == e.lng && null == e.position)
        throw "No latitude or longitude defined.";
      var o,
        n = this,
        i = e.details,
        r = e.fences,
        s = e.outside;
      delete (o = t(
        (o = { position: new google.maps.LatLng(e.lat, e.lng), map: null }),
        e
      )).lat,
        delete o.lng,
        delete o.fences,
        delete o.outside;
      var a = new google.maps.Marker(o);
      if (((a.fences = r), e.infoWindow)) {
        a.infoWindow = new google.maps.InfoWindow(e.infoWindow);
        for (
          var l = [
              "closeclick",
              "content_changed",
              "domready",
              "position_changed",
              "zindex_changed",
            ],
            p = 0;
          p < l.length;
          p++
        )
          !(function (t, o) {
            e.infoWindow[o] &&
              google.maps.event.addListener(t, o, function (t) {
                e.infoWindow[o].apply(this, [t]);
              });
          })(a.infoWindow, l[p]);
      }
      var c = [
          "animation_changed",
          "clickable_changed",
          "cursor_changed",
          "draggable_changed",
          "flat_changed",
          "icon_changed",
          "position_changed",
          "shadow_changed",
          "shape_changed",
          "title_changed",
          "visible_changed",
          "zindex_changed",
        ],
        g = [
          "dblclick",
          "drag",
          "dragend",
          "dragstart",
          "mousedown",
          "mouseout",
          "mouseover",
          "mouseup",
        ];
      for (p = 0; p < c.length; p++)
        !(function (t) {
          e[t] &&
            google.maps.event.addListener(a, t, function () {
              e[t].apply(this, [this]);
            });
        })(c[p]);
      for (p = 0; p < g.length; p++)
        !(function (t, o) {
          e[o] &&
            google.maps.event.addListener(a, o, function (n) {
              n.pixel ||
                (n.pixel = t.getProjection().fromLatLngToPoint(n.latLng)),
                e[o].apply(this, [n]);
            });
        })(this.map, g[p]);
      return (
        google.maps.event.addListener(a, "click", function () {
          (this.details = i),
            e.click && e.click.apply(this, [this]),
            a.infoWindow && (n.hideInfoWindows(), a.infoWindow.open(n.map, a));
        }),
        google.maps.event.addListener(a, "rightclick", function (t) {
          (t.marker = this),
            e.rightclick && e.rightclick.apply(this, [t]),
            null != window.context_menu[n.el.id].marker &&
              n.buildContextMenu("marker", t);
        }),
        a.fences &&
          google.maps.event.addListener(a, "dragend", function () {
            n.checkMarkerGeofence(a, function (e, t) {
              s(e, t);
            });
          }),
        a
      );
    }),
    (c.prototype.addMarker = function (e) {
      var t;
      if (e.hasOwnProperty("gm_accessors_")) t = e;
      else {
        if (
          !((e.hasOwnProperty("lat") && e.hasOwnProperty("lng")) || e.position)
        )
          throw "No latitude or longitude defined.";
        t = this.createMarker(e);
      }
      return (
        t.setMap(this.map),
        this.markerClusterer && this.markerClusterer.addMarker(t),
        this.markers.push(t),
        c.fire("marker_added", t, this),
        t
      );
    }),
    (c.prototype.addMarkers = function (e) {
      for (var t, o = 0; (t = e[o]); o++) this.addMarker(t);
      return this.markers;
    }),
    (c.prototype.hideInfoWindows = function () {
      for (var e, t = 0; (e = this.markers[t]); t++)
        e.infoWindow && e.infoWindow.close();
    }),
    (c.prototype.removeMarker = function (e) {
      for (var t = 0; t < this.markers.length; t++)
        if (this.markers[t] === e) {
          this.markers[t].setMap(null),
            this.markers.splice(t, 1),
            this.markerClusterer && this.markerClusterer.removeMarker(e),
            c.fire("marker_removed", e, this);
          break;
        }
      return e;
    }),
    (c.prototype.removeMarkers = function (e) {
      var t = [];
      if (void 0 === e) {
        for (var o = 0; o < this.markers.length; o++)
          (i = this.markers[o]).setMap(null), c.fire("marker_removed", i, this);
        this.markerClusterer &&
          this.markerClusterer.clearMarkers &&
          this.markerClusterer.clearMarkers(),
          (this.markers = t);
      } else {
        for (o = 0; o < e.length; o++) {
          var n = this.markers.indexOf(e[o]);
          -1 < n &&
            ((i = this.markers[n]).setMap(null),
            this.markerClusterer && this.markerClusterer.removeMarker(i),
            c.fire("marker_removed", i, this));
        }
        var i;
        for (o = 0; o < this.markers.length; o++)
          null != (i = this.markers[o]).getMap() && t.push(i);
        this.markers = t;
      }
    }),
    (c.prototype.drawOverlay = function (e) {
      var t = new google.maps.OverlayView(),
        o = !0;
      return (
        t.setMap(this.map),
        null != e.auto_show && (o = e.auto_show),
        (t.onAdd = function () {
          var o = document.createElement("div");
          (o.style.borderStyle = "none"),
            (o.style.borderWidth = "0px"),
            (o.style.position = "absolute"),
            (o.style.zIndex = 100),
            (o.innerHTML = e.content),
            (t.el = o),
            e.layer || (e.layer = "overlayLayer");
          var n = this.getPanes(),
            i = ["contextmenu", "DOMMouseScroll", "dblclick", "mousedown"];
          n[e.layer].appendChild(o);
          for (var r, s = 0; s < i.length; s++)
            (r = i[s]),
              google.maps.event.addDomListener(o, r, function (e) {
                -1 != navigator.userAgent.toLowerCase().indexOf("msie") &&
                document.all
                  ? ((e.cancelBubble = !0), (e.returnValue = !1))
                  : e.stopPropagation();
              });
          e.click &&
            (n.overlayMouseTarget.appendChild(t.el),
            google.maps.event.addDomListener(t.el, "click", function () {
              e.click.apply(t, [t]);
            })),
            google.maps.event.trigger(this, "ready");
        }),
        (t.draw = function () {
          var n = this.getProjection().fromLatLngToDivPixel(
            new google.maps.LatLng(e.lat, e.lng)
          );
          (e.horizontalOffset = e.horizontalOffset || 0),
            (e.verticalOffset = e.verticalOffset || 0);
          var i = t.el,
            r = i.children[0],
            s = r.clientHeight,
            a = r.clientWidth;
          switch (e.verticalAlign) {
            case "top":
              i.style.top = n.y - s + e.verticalOffset + "px";
              break;
            default:
            case "middle":
              i.style.top = n.y - s / 2 + e.verticalOffset + "px";
              break;
            case "bottom":
              i.style.top = n.y + e.verticalOffset + "px";
          }
          switch (e.horizontalAlign) {
            case "left":
              i.style.left = n.x - a + e.horizontalOffset + "px";
              break;
            default:
            case "center":
              i.style.left = n.x - a / 2 + e.horizontalOffset + "px";
              break;
            case "right":
              i.style.left = n.x + e.horizontalOffset + "px";
          }
          (i.style.display = o ? "block" : "none"),
            o || e.show.apply(this, [i]);
        }),
        (t.onRemove = function () {
          var o = t.el;
          e.remove
            ? e.remove.apply(this, [o])
            : (t.el.parentNode.removeChild(t.el), (t.el = null));
        }),
        this.overlays.push(t),
        t
      );
    }),
    (c.prototype.removeOverlay = function (e) {
      for (var t = 0; t < this.overlays.length; t++)
        if (this.overlays[t] === e) {
          this.overlays[t].setMap(null), this.overlays.splice(t, 1);
          break;
        }
    }),
    (c.prototype.removeOverlays = function () {
      for (var e, t = 0; (e = this.overlays[t]); t++) e.setMap(null);
      this.overlays = [];
    }),
    (c.prototype.drawPolyline = function (e) {
      var t = [],
        o = e.path;
      if (o.length)
        if (void 0 === o[0][0]) t = o;
        else
          for (var n, i = 0; (n = o[i]); i++)
            t.push(new google.maps.LatLng(n[0], n[1]));
      var r = {
        map: this.map,
        path: t,
        strokeColor: e.strokeColor,
        strokeOpacity: e.strokeOpacity,
        strokeWeight: e.strokeWeight,
        geodesic: e.geodesic,
        clickable: !0,
        editable: !1,
        visible: !0,
      };
      e.hasOwnProperty("clickable") && (r.clickable = e.clickable),
        e.hasOwnProperty("editable") && (r.editable = e.editable),
        e.hasOwnProperty("icons") && (r.icons = e.icons),
        e.hasOwnProperty("zIndex") && (r.zIndex = e.zIndex);
      for (
        var s = new google.maps.Polyline(r),
          a = [
            "click",
            "dblclick",
            "mousedown",
            "mousemove",
            "mouseout",
            "mouseover",
            "mouseup",
            "rightclick",
          ],
          l = 0;
        l < a.length;
        l++
      )
        !(function (t) {
          e[t] &&
            google.maps.event.addListener(s, t, function (o) {
              e[t].apply(this, [o]);
            });
        })(a[l]);
      return this.polylines.push(s), c.fire("polyline_added", s, this), s;
    }),
    (c.prototype.removePolyline = function (e) {
      for (var t = 0; t < this.polylines.length; t++)
        if (this.polylines[t] === e) {
          this.polylines[t].setMap(null),
            this.polylines.splice(t, 1),
            c.fire("polyline_removed", e, this);
          break;
        }
    }),
    (c.prototype.removePolylines = function () {
      for (var e, t = 0; (e = this.polylines[t]); t++) e.setMap(null);
      this.polylines = [];
    }),
    (c.prototype.drawCircle = function (e) {
      delete (e = t(
        { map: this.map, center: new google.maps.LatLng(e.lat, e.lng) },
        e
      )).lat,
        delete e.lng;
      for (
        var o = new google.maps.Circle(e),
          n = [
            "click",
            "dblclick",
            "mousedown",
            "mousemove",
            "mouseout",
            "mouseover",
            "mouseup",
            "rightclick",
          ],
          i = 0;
        i < n.length;
        i++
      )
        !(function (t) {
          e[t] &&
            google.maps.event.addListener(o, t, function (o) {
              e[t].apply(this, [o]);
            });
        })(n[i]);
      return this.polygons.push(o), o;
    }),
    (c.prototype.drawRectangle = function (e) {
      e = t({ map: this.map }, e);
      var o = new google.maps.LatLngBounds(
        new google.maps.LatLng(e.bounds[0][0], e.bounds[0][1]),
        new google.maps.LatLng(e.bounds[1][0], e.bounds[1][1])
      );
      e.bounds = o;
      for (
        var n = new google.maps.Rectangle(e),
          i = [
            "click",
            "dblclick",
            "mousedown",
            "mousemove",
            "mouseout",
            "mouseover",
            "mouseup",
            "rightclick",
          ],
          r = 0;
        r < i.length;
        r++
      )
        !(function (t) {
          e[t] &&
            google.maps.event.addListener(n, t, function (o) {
              e[t].apply(this, [o]);
            });
        })(i[r]);
      return this.polygons.push(n), n;
    }),
    (c.prototype.drawPolygon = function (e) {
      var i = !1;
      e.hasOwnProperty("useGeoJSON") && (i = e.useGeoJSON),
        delete e.useGeoJSON,
        (e = t({ map: this.map }, e)),
        0 == i && (e.paths = [e.paths.slice(0)]),
        0 < e.paths.length &&
          0 < e.paths[0].length &&
          (e.paths = n(o(e.paths, p, i)));
      for (
        var r = new google.maps.Polygon(e),
          s = [
            "click",
            "dblclick",
            "mousedown",
            "mousemove",
            "mouseout",
            "mouseover",
            "mouseup",
            "rightclick",
          ],
          a = 0;
        a < s.length;
        a++
      )
        !(function (t) {
          e[t] &&
            google.maps.event.addListener(r, t, function (o) {
              e[t].apply(this, [o]);
            });
        })(s[a]);
      return this.polygons.push(r), c.fire("polygon_added", r, this), r;
    }),
    (c.prototype.removePolygon = function (e) {
      for (var t = 0; t < this.polygons.length; t++)
        if (this.polygons[t] === e) {
          this.polygons[t].setMap(null),
            this.polygons.splice(t, 1),
            c.fire("polygon_removed", e, this);
          break;
        }
    }),
    (c.prototype.removePolygons = function () {
      for (var e, t = 0; (e = this.polygons[t]); t++) e.setMap(null);
      this.polygons = [];
    }),
    (c.prototype.getFromFusionTables = function (e) {
      var t = e.events;
      delete e.events;
      var o,
        n = new google.maps.FusionTablesLayer(e);
      for (o in t)
        !(function (e) {
          google.maps.event.addListener(n, e, function (o) {
            t[e].apply(this, [o]);
          });
        })(o);
      return this.layers.push(n), n;
    }),
    (c.prototype.loadFromFusionTables = function (e) {
      return (e = this.getFromFusionTables(e)).setMap(this.map), e;
    }),
    (c.prototype.getFromKML = function (e) {
      var t = e.url,
        o = e.events;
      delete e.url, delete e.events;
      var n,
        i = new google.maps.KmlLayer(t, e);
      for (n in o)
        !(function (e) {
          google.maps.event.addListener(i, e, function (t) {
            o[e].apply(this, [t]);
          });
        })(n);
      return this.layers.push(i), i;
    }),
    (c.prototype.loadFromKML = function (e) {
      return (e = this.getFromKML(e)).setMap(this.map), e;
    }),
    (c.prototype.addLayer = function (e, t) {
      var o, n;
      switch (((t = t || {}), e)) {
        case "weather":
          this.singleLayers.weather = o =
            new google.maps.weather.WeatherLayer();
          break;
        case "clouds":
          this.singleLayers.clouds = o = new google.maps.weather.CloudLayer();
          break;
        case "traffic":
          this.singleLayers.traffic = o = new google.maps.TrafficLayer();
          break;
        case "transit":
          this.singleLayers.transit = o = new google.maps.TransitLayer();
          break;
        case "bicycling":
          this.singleLayers.bicycling = o = new google.maps.BicyclingLayer();
          break;
        case "panoramio":
          (this.singleLayers.panoramio = o =
            new google.maps.panoramio.PanoramioLayer()),
            o.setTag(t.filter),
            delete t.filter,
            t.click &&
              google.maps.event.addListener(o, "click", function (e) {
                t.click(e), delete t.click;
              });
          break;
        case "places":
          (this.singleLayers.places = o =
            new google.maps.places.PlacesService(this.map)),
            (t.search || t.nearbySearch || t.radarSearch) &&
              ((n = {
                bounds: t.bounds || null,
                keyword: t.keyword || null,
                location: t.location || null,
                name: t.name || null,
                radius: t.radius || null,
                rankBy: t.rankBy || null,
                types: t.types || null,
              }),
              t.radarSearch && o.radarSearch(n, t.radarSearch),
              t.search && o.search(n, t.search),
              t.nearbySearch && o.nearbySearch(n, t.nearbySearch)),
            t.textSearch &&
              ((n = {
                bounds: t.bounds || null,
                location: t.location || null,
                query: t.query || null,
                radius: t.radius || null,
              }),
              o.textSearch(n, t.textSearch));
      }
      return void 0 !== o
        ? ("function" == typeof o.setOptions && o.setOptions(t),
          "function" == typeof o.setMap && o.setMap(this.map),
          o)
        : void 0;
    }),
    (c.prototype.removeLayer = function (e) {
      if ("string" == typeof e && void 0 !== this.singleLayers[e])
        this.singleLayers[e].setMap(null), delete this.singleLayers[e];
      else
        for (var t = 0; t < this.layers.length; t++)
          if (this.layers[t] === e) {
            this.layers[t].setMap(null), this.layers.splice(t, 1);
            break;
          }
    }),
    (c.prototype.getRoutes = function (e) {
      switch (e.travelMode) {
        case "bicycling":
          a = google.maps.TravelMode.BICYCLING;
          break;
        case "transit":
          a = google.maps.TravelMode.TRANSIT;
          break;
        case "driving":
          a = google.maps.TravelMode.DRIVING;
          break;
        default:
          a = google.maps.TravelMode.WALKING;
      }
      l =
        "imperial" === e.unitSystem
          ? google.maps.UnitSystem.IMPERIAL
          : google.maps.UnitSystem.METRIC;
      var o = t(
        {
          avoidHighways: !1,
          avoidTolls: !1,
          optimizeWaypoints: !1,
          waypoints: [],
        },
        e
      );
      (o.origin = /string/.test(typeof e.origin)
        ? e.origin
        : new google.maps.LatLng(e.origin[0], e.origin[1])),
        (o.destination = /string/.test(typeof e.destination)
          ? e.destination
          : new google.maps.LatLng(e.destination[0], e.destination[1])),
        (o.travelMode = a),
        (o.unitSystem = l),
        delete o.callback,
        delete o.error;
      var n = [];
      new google.maps.DirectionsService().route(o, function (t, o) {
        if (o === google.maps.DirectionsStatus.OK) {
          for (var i in t.routes)
            t.routes.hasOwnProperty(i) && n.push(t.routes[i]);
          e.callback && e.callback(n, t, o);
        } else e.error && e.error(t, o);
      });
    }),
    (c.prototype.removeRoutes = function () {
      this.routes.length = 0;
    }),
    (c.prototype.getElevations = function (e) {
      0 <
        (e = t({ locations: [], path: !1, samples: 256 }, e)).locations
          .length &&
        0 < e.locations[0].length &&
        (e.locations = n(o([e.locations], p, !1)));
      var i = e.callback;
      delete e.callback;
      var r,
        s = new google.maps.ElevationService();
      e.path
        ? ((r = { path: e.locations, samples: e.samples }),
          s.getElevationAlongPath(r, function (e, t) {
            i && "function" == typeof i && i(e, t);
          }))
        : (delete e.path,
          delete e.samples,
          s.getElevationForLocations(e, function (e, t) {
            i && "function" == typeof i && i(e, t);
          }));
    }),
    (c.prototype.cleanRoute = c.prototype.removePolylines),
    (c.prototype.renderRoute = function (e, o) {
      var n,
        i =
          "string" == typeof o.panel
            ? document.getElementById(o.panel.replace("#", ""))
            : o.panel;
      (o.panel = i),
        (o = t({ map: this.map }, o)),
        (n = new google.maps.DirectionsRenderer(o)),
        this.getRoutes({
          origin: e.origin,
          destination: e.destination,
          travelMode: e.travelMode,
          waypoints: e.waypoints,
          unitSystem: e.unitSystem,
          error: e.error,
          avoidHighways: e.avoidHighways,
          avoidTolls: e.avoidTolls,
          optimizeWaypoints: e.optimizeWaypoints,
          callback: function (e, t, o) {
            o === google.maps.DirectionsStatus.OK && n.setDirections(t);
          },
        });
    }),
    (c.prototype.drawRoute = function (e) {
      var t = this;
      this.getRoutes({
        origin: e.origin,
        destination: e.destination,
        travelMode: e.travelMode,
        waypoints: e.waypoints,
        unitSystem: e.unitSystem,
        error: e.error,
        avoidHighways: e.avoidHighways,
        avoidTolls: e.avoidTolls,
        optimizeWaypoints: e.optimizeWaypoints,
        callback: function (o) {
          var n;
          0 < o.length &&
            ((n = {
              path: o[o.length - 1].overview_path,
              strokeColor: e.strokeColor,
              strokeOpacity: e.strokeOpacity,
              strokeWeight: e.strokeWeight,
            }),
            e.hasOwnProperty("icons") && (n.icons = e.icons),
            t.drawPolyline(n),
            e.callback && e.callback(o[o.length - 1]));
        },
      });
    }),
    (c.prototype.travelRoute = function (e) {
      if (e.origin && e.destination)
        this.getRoutes({
          origin: e.origin,
          destination: e.destination,
          travelMode: e.travelMode,
          waypoints: e.waypoints,
          unitSystem: e.unitSystem,
          error: e.error,
          callback: function (t) {
            if (
              (0 < t.length && e.start && e.start(t[t.length - 1]),
              0 < t.length && e.step)
            ) {
              var o = t[t.length - 1];
              if (0 < o.legs.length)
                for (var n, i = o.legs[0].steps, r = 0; (n = i[r]); r++)
                  (n.step_number = r), e.step(n, o.legs[0].steps.length - 1);
            }
            0 < t.length && e.end && e.end(t[t.length - 1]);
          },
        });
      else if (e.route && 0 < e.route.legs.length)
        for (var t, o = e.route.legs[0].steps, n = 0; (t = o[n]); n++)
          (t.step_number = n), e.step(t);
    }),
    (c.prototype.drawSteppedRoute = function (e) {
      var t = this;
      if (e.origin && e.destination)
        this.getRoutes({
          origin: e.origin,
          destination: e.destination,
          travelMode: e.travelMode,
          waypoints: e.waypoints,
          error: e.error,
          callback: function (o) {
            if (
              (0 < o.length && e.start && e.start(o[o.length - 1]),
              0 < o.length && e.step)
            ) {
              var n = o[o.length - 1];
              if (0 < n.legs.length)
                for (var i, r = n.legs[0].steps, s = 0; (i = r[s]); s++) {
                  i.step_number = s;
                  var a = {
                    path: i.path,
                    strokeColor: e.strokeColor,
                    strokeOpacity: e.strokeOpacity,
                    strokeWeight: e.strokeWeight,
                  };
                  e.hasOwnProperty("icons") && (a.icons = e.icons),
                    t.drawPolyline(a),
                    e.step(i, n.legs[0].steps.length - 1);
                }
            }
            0 < o.length && e.end && e.end(o[o.length - 1]);
          },
        });
      else if (e.route && 0 < e.route.legs.length)
        for (var o, n = e.route.legs[0].steps, i = 0; (o = n[i]); i++) {
          o.step_number = i;
          var r = {
            path: o.path,
            strokeColor: e.strokeColor,
            strokeOpacity: e.strokeOpacity,
            strokeWeight: e.strokeWeight,
          };
          e.hasOwnProperty("icons") && (r.icons = e.icons),
            t.drawPolyline(r),
            e.step(o);
        }
    }),
    (c.Route = function (e) {
      (this.origin = e.origin),
        (this.destination = e.destination),
        (this.waypoints = e.waypoints),
        (this.map = e.map),
        (this.route = e.route),
        (this.step_count = 0),
        (this.steps = this.route.legs[0].steps),
        (this.steps_length = this.steps.length);
      var t = {
        path: new google.maps.MVCArray(),
        strokeColor: e.strokeColor,
        strokeOpacity: e.strokeOpacity,
        strokeWeight: e.strokeWeight,
      };
      e.hasOwnProperty("icons") && (t.icons = e.icons),
        (this.polyline = this.map.drawPolyline(t).getPath());
    }),
    (c.Route.prototype.getRoute = function (t) {
      var o = this;
      this.map.getRoutes({
        origin: this.origin,
        destination: this.destination,
        travelMode: t.travelMode,
        waypoints: this.waypoints || [],
        error: t.error,
        callback: function () {
          (o.route = e[0]), t.callback && t.callback.call(o);
        },
      });
    }),
    (c.Route.prototype.back = function () {
      if (0 < this.step_count) {
        this.step_count--;
        var e,
          t = this.route.legs[0].steps[this.step_count].path;
        for (e in t) t.hasOwnProperty(e) && this.polyline.pop();
      }
    }),
    (c.Route.prototype.forward = function () {
      if (this.step_count < this.steps_length) {
        var e,
          t = this.route.legs[0].steps[this.step_count].path;
        for (e in t) t.hasOwnProperty(e) && this.polyline.push(t[e]);
        this.step_count++;
      }
    }),
    (c.prototype.checkGeofence = function (e, t, o) {
      return o.containsLatLng(new google.maps.LatLng(e, t));
    }),
    (c.prototype.checkMarkerGeofence = function (e, t) {
      if (e.fences)
        for (var o, n = 0; (o = e.fences[n]); n++) {
          var i = e.getPosition();
          this.checkGeofence(i.lat(), i.lng(), o) || t(e, o);
        }
    }),
    (c.prototype.toImage = function (e) {
      e = e || {};
      var t = {};
      if (
        ((t.size = e.size || [this.el.clientWidth, this.el.clientHeight]),
        (t.lat = this.getCenter().lat()),
        (t.lng = this.getCenter().lng()),
        0 < this.markers.length)
      ) {
        t.markers = [];
        for (var o = 0; o < this.markers.length; o++)
          t.markers.push({
            lat: this.markers[o].getPosition().lat(),
            lng: this.markers[o].getPosition().lng(),
          });
      }
      return (
        0 < this.polylines.length &&
          ((e = this.polylines[0]),
          (t.polyline = {}),
          (t.polyline.path = google.maps.geometry.encoding.encodePath(
            e.getPath()
          )),
          (t.polyline.strokeColor = e.strokeColor),
          (t.polyline.strokeOpacity = e.strokeOpacity),
          (t.polyline.strokeWeight = e.strokeWeight)),
        c.staticMapURL(t)
      );
    }),
    (c.staticMapURL = function (e) {
      function t(e, t) {
        if ("#" === e[0] && ((e = e.replace("#", "0x")), t)) {
          if (((t = parseFloat(t)), 0 === (t = Math.min(1, Math.max(t, 0)))))
            return "0x00000000";
          1 === (t = (255 * t).toString(16)).length && (t += t),
            (e = e.slice(0, 8) + t);
        }
        return e;
      }
      var o = [],
        n =
          ("file:" === location.protocol ? "http:" : location.protocol) +
          "//maps.googleapis.com/maps/api/staticmap";
      e.url && ((n = e.url), delete e.url), (n += "?");
      var i = e.markers;
      delete e.markers, !i && e.marker && ((i = [e.marker]), delete e.marker);
      var r = e.styles;
      delete e.styles;
      var s = e.polyline;
      delete e.polyline,
        e.center
          ? (o.push("center=" + e.center), delete e.center)
          : e.address
          ? (o.push("center=" + e.address), delete e.address)
          : e.lat
          ? (o.push(["center=", e.lat, ",", e.lng].join("")),
            delete e.lat,
            delete e.lng)
          : e.visible &&
            ((a = encodeURI(e.visible.join("|"))), o.push("visible=" + a));
      var a = e.size;
      for (g in (a
        ? (a.join && (a = a.join("x")), delete e.size)
        : (a = "630x300"),
      o.push("size=" + a),
      e.zoom || !1 === e.zoom || (e.zoom = 15),
      (a = !e.hasOwnProperty("sensor") || !!e.sensor),
      delete e.sensor,
      o.push("sensor=" + a),
      e))
        e.hasOwnProperty(g) && o.push(g + "=" + e[g]);
      if (i)
        for (var l, p, c = 0; (y = i[c]); c++) {
          for (var g in ((l = []),
          y.size && "normal" !== y.size
            ? (l.push("size:" + y.size), delete y.size)
            : y.icon && (l.push("icon:" + encodeURI(y.icon)), delete y.icon),
          y.color &&
            (l.push("color:" + y.color.replace("#", "0x")), delete y.color),
          y.label &&
            (l.push("label:" + y.label[0].toUpperCase()), delete y.label),
          (p = y.address || y.lat + "," + y.lng),
          delete y.address,
          delete y.lat,
          delete y.lng,
          y))
            y.hasOwnProperty(g) && l.push(g + ":" + y[g]);
          l.length || 0 === c
            ? (l.push(p), (l = l.join("|")), o.push("markers=" + encodeURI(l)))
            : ((l = o.pop() + encodeURI("|" + p)), o.push(l));
        }
      if (r)
        for (c = 0; c < r.length; c++) {
          var h = [];
          r[c].featureType &&
            h.push("feature:" + r[c].featureType.toLowerCase()),
            r[c].elementType &&
              h.push("element:" + r[c].elementType.toLowerCase());
          for (var u = 0; u < r[c].stylers.length; u++)
            for (var d in r[c].stylers[u]) {
              var m = r[c].stylers[u][d];
              ("hue" != d && "color" != d) || (m = "0x" + m.substring(1)),
                h.push(d + ":" + m);
            }
          var f = h.join("|");
          "" != f && o.push("style=" + f);
        }
      if (s) {
        var y = s;
        s = [];
        y.strokeWeight && s.push("weight:" + parseInt(y.strokeWeight, 10)),
          y.strokeColor &&
            ((a = t(y.strokeColor, y.strokeOpacity)), s.push("color:" + a)),
          y.fillColor &&
            ((k = t(y.fillColor, y.fillOpacity)), s.push("fillcolor:" + k));
        var v = y.path;
        if (v.join) {
          var w;
          for (u = 0; (w = v[u]); u++) s.push(w.join(","));
        } else s.push("enc:" + v);
        (s = s.join("|")), o.push("path=" + encodeURI(s));
      }
      var k = window.devicePixelRatio || 1;
      return o.push("scale=" + k), n + o.join("&");
    }),
    (c.prototype.addMapType = function (e, t) {
      if (!t.hasOwnProperty("getTileUrl") || "function" != typeof t.getTileUrl)
        throw "'getTileUrl' function required.";
      (t.tileSize = t.tileSize || new google.maps.Size(256, 256)),
        (t = new google.maps.ImageMapType(t)),
        this.map.mapTypes.set(e, t);
    }),
    (c.prototype.addOverlayMapType = function (e) {
      if (!e.hasOwnProperty("getTile") || "function" != typeof e.getTile)
        throw "'getTile' function required.";
      var t = e.index;
      delete e.index, this.map.overlayMapTypes.insertAt(t, e);
    }),
    (c.prototype.removeOverlayMapType = function (e) {
      this.map.overlayMapTypes.removeAt(e);
    }),
    (c.prototype.addStyle = function (e) {
      var t = new google.maps.StyledMapType(e.styles, {
        name: e.styledMapName,
      });
      this.map.mapTypes.set(e.mapTypeId, t);
    }),
    (c.prototype.setStyle = function (e) {
      this.map.setMapTypeId(e);
    }),
    (c.prototype.createPanorama = function (e) {
      return (
        (e.hasOwnProperty("lat") && e.hasOwnProperty("lng")) ||
          ((e.lat = this.getCenter().lat()), (e.lng = this.getCenter().lng())),
        (this.panorama = c.createPanorama(e)),
        this.map.setStreetView(this.panorama),
        this.panorama
      );
    }),
    (c.createPanorama = function (e) {
      var o = i(e.el, e.context);
      (e.position = new google.maps.LatLng(e.lat, e.lng)),
        delete e.el,
        delete e.context,
        delete e.lat,
        delete e.lng;
      for (
        var n = [
            "closeclick",
            "links_changed",
            "pano_changed",
            "position_changed",
            "pov_changed",
            "resize",
            "visible_changed",
          ],
          r = t({ visible: !0 }, e),
          s = 0;
        s < n.length;
        s++
      )
        delete r[n[s]];
      var a = new google.maps.StreetViewPanorama(o, r);
      for (s = 0; s < n.length; s++)
        !(function (t) {
          e[t] &&
            google.maps.event.addListener(a, t, function () {
              e[t].apply(this);
            });
        })(n[s]);
      return a;
    }),
    (c.prototype.on = function (e, t) {
      return c.on(e, this, t);
    }),
    (c.prototype.off = function (e) {
      c.off(e, this);
    }),
    (c.prototype.once = function (e, t) {
      return c.once(e, this, t);
    }),
    (c.custom_events = [
      "marker_added",
      "marker_removed",
      "polyline_added",
      "polyline_removed",
      "polygon_added",
      "polygon_removed",
      "geolocated",
      "geolocation_failed",
    ]),
    (c.on = function (e, t, o) {
      return -1 == c.custom_events.indexOf(e)
        ? (t instanceof c && (t = t.map),
          google.maps.event.addListener(t, e, o))
        : ((o = { handler: o, eventName: e }),
          (t.registered_events[e] = t.registered_events[e] || []),
          t.registered_events[e].push(o),
          o);
    }),
    (c.off = function (e, t) {
      -1 == c.custom_events.indexOf(e)
        ? (t instanceof c && (t = t.map),
          google.maps.event.clearListeners(t, e))
        : (t.registered_events[e] = []);
    }),
    (c.once = function (e, t, o) {
      return -1 == c.custom_events.indexOf(e)
        ? (t instanceof c && (t = t.map),
          google.maps.event.addListenerOnce(t, e, o))
        : void 0;
    }),
    (c.fire = function (e, t, o) {
      if (-1 == c.custom_events.indexOf(e))
        google.maps.event.trigger(
          t,
          e,
          Array.prototype.slice.apply(arguments).slice(2)
        );
      else if (e in o.registered_events)
        for (var n = o.registered_events[e], i = 0; i < n.length; i++)
          n[i].handler.apply(o, [t]);
    }),
    (c.geolocate = function (e) {
      var t = e.always || e.complete;
      navigator.geolocation
        ? navigator.geolocation.getCurrentPosition(
            function (o) {
              e.success(o), t && t();
            },
            function (o) {
              e.error(o), t && t();
            },
            e.options
          )
        : (e.not_supported(), t && t());
    }),
    (c.geocode = function (e) {
      this.geocoder = new google.maps.Geocoder();
      var t = e.callback;
      e.hasOwnProperty("lat") &&
        e.hasOwnProperty("lng") &&
        (e.latLng = new google.maps.LatLng(e.lat, e.lng)),
        delete e.lat,
        delete e.lng,
        delete e.callback,
        this.geocoder.geocode(e, function (e, o) {
          t(e, o);
        });
    }),
    "object" == typeof window.google &&
      window.google.maps &&
      (google.maps.Polygon.prototype.getBounds ||
        (google.maps.Polygon.prototype.getBounds = function (e) {
          for (
            var t,
              o = new google.maps.LatLngBounds(),
              n = this.getPaths(),
              i = 0;
            i < n.getLength();
            i++
          ) {
            t = n.getAt(i);
            for (var r = 0; r < t.getLength(); r++) o.extend(t.getAt(r));
          }
          return o;
        }),
      google.maps.Polygon.prototype.containsLatLng ||
        (google.maps.Polygon.prototype.containsLatLng = function (e) {
          var t = this.getBounds();
          if (null !== t && !t.contains(e)) return !1;
          for (var o = !1, n = this.getPaths().getLength(), i = 0; i < n; i++)
            for (
              var r = this.getPaths().getAt(i),
                s = r.getLength(),
                a = s - 1,
                l = 0;
              l < s;
              l++
            ) {
              var p = r.getAt(l),
                c = r.getAt(a);
              ((p.lng() < e.lng() && c.lng() >= e.lng()) ||
                (c.lng() < e.lng() && p.lng() >= e.lng())) &&
                p.lat() +
                  ((e.lng() - p.lng()) / (c.lng() - p.lng())) *
                    (c.lat() - p.lat()) <
                  e.lat() &&
                (o = !o),
                (a = l);
            }
          return o;
        }),
      google.maps.Circle.prototype.containsLatLng ||
        (google.maps.Circle.prototype.containsLatLng = function (e) {
          return (
            !google.maps.geometry ||
            google.maps.geometry.spherical.computeDistanceBetween(
              this.getCenter(),
              e
            ) <= this.getRadius()
          );
        }),
      (google.maps.Rectangle.prototype.containsLatLng = function (e) {
        return this.getBounds().contains(e);
      }),
      (google.maps.LatLngBounds.prototype.containsLatLng = function (e) {
        return this.contains(e);
      }),
      (google.maps.Marker.prototype.setFences = function (e) {
        this.fences = e;
      }),
      (google.maps.Marker.prototype.addFence = function (e) {
        this.fences.push(e);
      }),
      (google.maps.Marker.prototype.getId = function () {
        return this.__gm_id;
      })),
    Array.prototype.indexOf ||
      (Array.prototype.indexOf = function (e) {
        if (null == this) throw new TypeError();
        var t = Object(this),
          o = t.length >>> 0;
        if (0 == o) return -1;
        var n = 0;
        if (
          (1 < arguments.length &&
            ((n = Number(arguments[1])) != n
              ? (n = 0)
              : 0 != n &&
                n != 1 / 0 &&
                n != -1 / 0 &&
                (n = (0 < n || -1) * Math.floor(Math.abs(n)))),
          o <= n)
        )
          return -1;
        for (var i = 0 <= n ? n : Math.max(o - Math.abs(n), 0); i < o; i++)
          if (i in t && t[i] === e) return i;
        return -1;
      }),
    c
  );
});
