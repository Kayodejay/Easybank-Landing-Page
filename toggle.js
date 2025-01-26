let toggleNavStatus = false;

let toogleNav = function(){
    let getMobileToggle = document.querySelector(".mobile-toggle")

    switch (toggleNavStatus) {
        case false:
        getMobileToggle.style.visibility = "visible";

        toggleNavStatus = true;
        console.log(111)
        break;
        case true:
        getMobileToggle.style.visibility = "hidden";

        toggleNavStatus = false;
        break;
        default:
        console.log(alert('hello modatuka'));
    }
}