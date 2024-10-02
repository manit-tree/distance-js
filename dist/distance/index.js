var get_distance = function() {
  "use strict";
  function haversine_distance(x, y) {
    const R = 6371e3;
    const p1 = x.lat * Math.PI / 180;
    const p2 = y.lat * Math.PI / 180;
    const deltaLon = y.lng - x.lng;
    const deltaLambda = deltaLon * Math.PI / 180;
    const d = Math.acos(
      Math.sin(p1) * Math.sin(p2) + Math.cos(p1) * Math.cos(p2) * Math.cos(deltaLambda)
    ) * R;
    return d;
  }
  function cosine_distance(x, y) {
    const R = 6371e3;
    const p1 = x.lat * Math.PI / 180;
    const p2 = y.lat * Math.PI / 180;
    const deltaP = p2 - p1;
    const deltaLon = y.lng - x.lng;
    const deltaLambda = deltaLon * Math.PI / 180;
    const a = Math.sin(deltaP / 2) * Math.sin(deltaP / 2) + Math.cos(p1) * Math.cos(p2) * Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
    const d = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)) * R;
    return d;
  }
  function get_distance2(x, y, method = "cosine") {
    if (method == "cosine") {
      return cosine_distance(x, y);
    }
    return haversine_distance(x, y);
  }
  return get_distance2;
}();
