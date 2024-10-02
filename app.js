$.ready(() => {
    let x = { lat: 13.833376940811988, lng: 100.53567015463454 };
    let y = { lat: 13.832318896514575, lng: 100.53928319445563 };
    let d1 = get_distance(x, y, 'cosine');
    let d2 = get_distance(x, y, 'haversine');

    console.log(d1, d2);
})