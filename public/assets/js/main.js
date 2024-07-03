const overlay = document.querySelector("#overlay"),
    btnScrollTop = document.querySelector("#btn-scroll-top"),
    siteNotification = document.querySelector('#siteNotification'),
    closeNotification = document.querySelector('#closeNotification'),
    mobileMenuIcon = document.querySelector("#mobileMenuIcon"),
    MobileMenuSection = document.querySelector("#MobileMenuSection"),
    MenuCloseIcon = document.querySelector("#MenuCloseIcon"),
    tabsTitle = document.querySelectorAll(".tabs-title"),
    contentTab = document.querySelectorAll(".tab-content"),
    menuMobileChild = document.querySelectorAll('.mobile-menu > ul.menu li.menu-item.menu-item-has-children > a');

if (closeNotification){
    closeNotification.addEventListener('click', ()=>{
        siteNotification.style.height = '0px';
        setTimeout(() => {
            siteNotification.remove();
        }, 600);
    })
}
menuMobileChild.forEach((element) => {
    element.addEventListener("click", function () {
        this.parentElement.classList.toggle('active');
    });
});
let overlayFunc = function ($type) {
    if ($type) {
        overlay.classList.remove("hidden");
        setTimeout(() => {
            overlay.classList.remove("scale-0");
        }, 100);
    }
    if (!$type) {
        overlay.classList.add("scale-0");
        setTimeout(() => {
            overlay.classList.add("hidden");
        }, 300);
    }
};
let menuSectionFunc = function ($type) {
    if ($type) {
        MobileMenuSection.classList.remove("translate-x-80");
    }
    if (!$type) {
        MobileMenuSection.classList.add("translate-x-80");
    }
};
let MenuCloseIconFunc = function ($type) {
    if ($type) {
        MenuCloseIcon.classList.remove("-translate-x-20");
    }
    if (!$type) {
        MenuCloseIcon.classList.add("-translate-x-20");
    }
};
let tabActive = function () {
    tabsTitle.forEach((element) => {
        element.classList.remove("active");
    });
};
let contentTabActive = function () {
    contentTab.forEach((element) => {
        element.classList.add("hidden");
    });
};

overlay.addEventListener("click", () => {
    overlayFunc();
    menuSectionFunc();
    MenuCloseIconFunc();
});

mobileMenuIcon.addEventListener("click", () => {
    overlayFunc("open");
    menuSectionFunc("open");
    MenuCloseIconFunc("open");
});
MenuCloseIcon.addEventListener("click", () => {
    overlayFunc();
    menuSectionFunc();
    MenuCloseIconFunc();
});
tabsTitle.forEach((element) => {
    element.addEventListener("click", function () {
        tabActive();
        let typeMenu = element.getAttribute("data-menu");
        let typeContent = document.getElementById(typeMenu);
        element.classList.add("active");
        contentTabActive();
        typeContent.classList.remove("hidden");
    });
});

// ShowCase Slider
document.addEventListener("DOMContentLoaded", () => {
    const swiper_product = new Swiper(".showcase_slider", {
        cssWidthAndHeight: true,
        slidesPerView: "3",
        spaceBetween: 0,
        initialSlide: 1,
        loop: true,
        centeredSlides: true,
        centeredSlidesBounds: true,
        visibilityFullFit: true,
        autoResize: false,

        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        }
    });
});

btnScrollTop.addEventListener('click', ()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
})

// SaveBlog
const saveBlog = document.querySelectorAll(".blog-save");
saveBlog.forEach((element) => {
    element.addEventListener("click", function () {
        let dataLikeAtt = this.getAttribute("data-like");
        let dontLikeIcon = this.children[0];
        let LikeIcon = this.children[1];
        let likeType = function ($type) {
            if ($type) {
                dontLikeIcon.style.display = "none";
                LikeIcon.style.display = "block";
            }
            if (!$type) {
                dontLikeIcon.style.display = "block";
                LikeIcon.style.display = "none";
            }
        };
        switch (dataLikeAtt) {
            case "false":
                Swal.fire({
                    position: "bottom-start",
                    icon: "success",
                    title: "دوره به لیست علاقه‌مندی‌ها افزوده شد",
                    showConfirmButton: false,
                    timer: 1500,
                });
                likeType("like");
                this.setAttribute("data-like", "true");
                break;
            case "true":
                Swal.fire({
                    position: "bottom-start",
                    icon: "success",
                    title: "دوره از لیست علاقه‌مندی‌ها حذف شد",
                    showConfirmButton: false,
                    timer: 1500,
                });
                likeType();
                this.setAttribute("data-like", "false");
                break;
            case "no-login":
                Swal.fire({
                    text: "برای افزودن دوره به لیست علاقه‌مندی‌ها وارد حساب کاربری شوید.",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#003637",
                    cancelButtonColor: "#d33",
                    cancelButtonText: "لغو",
                    confirmButtonText: "ورود | ثبت نام",
                }).then((result) => {
                    if (result.isConfirmed) {
                        console.log("login");
                    }
                });
                break;
        }
    });
});

// SaveCourse
const saveCourse = document.querySelectorAll(".save");
saveCourse.forEach((element) => {
    element.addEventListener("click", function () {
        let dataLikeAtt = this.getAttribute("data-like");
        let dontLikeIcon = this.children[0];
        let LikeIcon = this.children[1];
        let likeType = function ($type) {
            if ($type) {
                dontLikeIcon.style.display = "none";
                LikeIcon.style.display = "block";
            }
            if (!$type) {
                dontLikeIcon.style.display = "block";
                LikeIcon.style.display = "none";
            }
        };
        switch (dataLikeAtt) {
            case "false":
                Swal.fire({
                    position: "bottom-start",
                    icon: "success",
                    title: "دوره به لیست علاقه‌مندی‌ها افزوده شد",
                    showConfirmButton: false,
                    timer: 1500,
                });
                likeType("like");
                this.setAttribute("data-like", "true");
                break;
            case "true":
                Swal.fire({
                    position: "bottom-start",
                    icon: "success",
                    title: "دوره از لیست علاقه‌مندی‌ها حذف شد",
                    showConfirmButton: false,
                    timer: 1500,
                });
                likeType();
                this.setAttribute("data-like", "false");
                break;
            case "no-login":
                Swal.fire({
                    text: "برای افزودن دوره به لیست علاقه‌مندی‌ها وارد حساب کاربری شوید.",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#003637",
                    cancelButtonColor: "#d33",
                    cancelButtonText: "لغو",
                    confirmButtonText: "ورود | ثبت نام",
                }).then((result) => {
                    if (result.isConfirmed) {
                        console.log("login");
                    }
                });
                break;
        }
    });
});

// CourseSection Slider
document.addEventListener("DOMContentLoaded", () => {
    const swiper_teacher_section = new Swiper(".course-card-slider", {
        slidesPerView: "auto",
        spaceBetween: 20,
    });
});

// TeacherSection Slider
document.addEventListener("DOMContentLoaded", () => {
    const swiper_teacher_section = new Swiper(".teacher_section_slider", {
        slidesPerView: "auto",
        spaceBetween: 16,
        navigation: {
            nextEl: ".teacher_section_slider_next",
            prevEl: ".teacher_section_slider_prev",
        },
    });
});

// BlogSection Slider
document.addEventListener("DOMContentLoaded", () => {
    const swiper_blog_section = new Swiper(".blog_section_slider", {
        direction: "vertical",
        effect: "fade",
        loop: true,
        mousewheel: true,
        pagination: {
            el: ".blog_section_slider_pagination",
            clickable: true,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
    });
});

// add to card => single
const addToCard = document.querySelector(".add-to-card");
if (addToCard) {
    addToCard.addEventListener("click", function () {
        let addToCardAtt = this.getAttribute("data-course-card");
        switch (addToCardAtt) {
            case "false":
                Swal.fire({
                    position: "bottom-start",
                    icon: "success",
                    title: "به سبد خرید افزوده شد",
                    showConfirmButton: false,
                    timer: 1500,
                });
                this.setAttribute("data-course-card", "true");
                this.innerText = "به سبد خرید اضافه شده";
                break;
            case "true":
                Swal.fire({
                    text: "دوره قبلا به سبد خرید اضافه شده است.",
                    icon: "info",
                    confirmButtonColor: "#003637",
                    confirmButtonText: "مشاهده سبد خرید",
                }).then((result) => {
                    if (result.isConfirmed) {
                        console.log("login");
                    }
                });
                break;
        }
    });
}

// add to cart => courseCard
const addToCardIcon = document.querySelectorAll(".add-to-card-icon");
if (addToCardIcon) {
    addToCardIcon.forEach(element => {
        element.addEventListener('click', function () {
            let addToCardAtt = this.getAttribute("data-course-card");
            switch (addToCardAtt) {
                case "false":
                    Swal.fire({
                        position: "bottom-start",
                        icon: "success",
                        title: "به سبد خرید افزوده شد",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    this.setAttribute("data-course-card", "true");
                    break;
                case "true":
                    Swal.fire({
                        text: "دوره قبلا به سبد خرید اضافه شده است.",
                        icon: "info",
                        confirmButtonColor: "#003637",
                        confirmButtonText: "مشاهده سبد خرید",
                    }).then((result) => {
                        if (result.isConfirmed) {
                            console.log("login");
                        }
                    });
                    break;
                case "register":
                    Swal.fire({
                        text: "دانشجوی دوره هستید.",
                        icon: "info",
                        confirmButtonColor: "#FF4500",
                        confirmButtonText: "مشاهده دوره",
                    }).then((result) => {
                        if (result.isConfirmed) {
                            console.log("show-course-page");
                        }
                    });
                    break;
            }
        })
    })
}

// faq section
const askTab = document.querySelectorAll(".ask-tab");

askTab.forEach((element) => {
    element.addEventListener("click", function () {
        this.classList.toggle("active");
    });
});

// course section
const courseTitleList = document.querySelectorAll(".course-title-list"),
    courseContentList = document.querySelectorAll(".course-content-list");

courseContentList.forEach((element) => {
    let contentHeight = element.offsetHeight;
    element.setAttribute("data-content-height", contentHeight);
    element.style.height = 0;
});
courseTitleList.forEach((element) => {
    element.addEventListener("click", function () {
        this.classList.toggle("active");
        let contetnId = this.getAttribute("data-curse");
        let contentSection = document.getElementById(contetnId);
        let contentSectionHeight = contentSection.offsetHeight;
        let contentSectionHeightAtt = contentSection.getAttribute(
            "data-content-height"
        );
        contentSection.style.height =
            contentSectionHeight == contentSectionHeightAtt
                ? "0"
                : contentSectionHeightAtt + "px";
        contentSection.style.marginTop =
            contentSectionHeight == contentSectionHeightAtt ? "0px" : "32px";
    });
});

// comment course
const commentTab = document.querySelectorAll(".comment-tab"),
    commentContent = document.querySelectorAll(".comment-content");

let commentContentActive = function () {
    commentContent.forEach((element) => {
        element.style.display = "none";
    });
};
let commentTabActive = function () {
    commentTab.forEach((element) => {
        element.classList.remove("active");
    });
};

commentTab.forEach((element) => {
    element.addEventListener("click", function () {
        let commentAtt = this.getAttribute("data-comment-type");
        commentTabActive();
        this.classList.add("active");
        commentContentActive();
        let commentContentSection = document.getElementById(commentAtt);
        commentContentSection.style.display = "block";
    });
});


// creadit-card user
const detailCreaditCard = document.querySelectorAll('.detail-creadit-card'),
    closeCreaditModal = document.querySelectorAll('.close-creadit-modal');
let creaditDetailFunc = function ($type, $modal) {
    if ($type) {
        $modal.classList.remove('hidden');
        setTimeout(() => {
            $modal.classList.remove('opacity-0', 'invisible', 'scale-0');
        }, 100);
    }
    if (!$type) {
        $modal.classList.add('opacity-0', 'invisible', 'scale-0');
        setTimeout(() => {
            $modal.classList.add('hidden');
        }, 300);
    }
};
detailCreaditCard.forEach(element => {
    element.addEventListener('click', function () {
        let modalAtt = this.getAttribute('data-creadit-detail');
        let ModalContent = document.getElementById(modalAtt);
        creaditDetailFunc('open', ModalContent);

    })
});
closeCreaditModal.forEach(element => {
    element.addEventListener('click', function () {
        let modalClose = this.getAttribute('data-creadit-close');
        let modalSectionClose = document.getElementById(modalClose);
        creaditDetailFunc('', modalSectionClose);
    })
});

// user panel
const userPanelTab = document.querySelectorAll('.user-panel-tab'),
    userPanelContent = document.querySelectorAll('.user-panel-content'),
    panelLogout = document.querySelector('#panel-logout');

let userPanelContentActive = function () {
    userPanelContent.forEach(element => {
        element.style.display = 'none';
    });
}
let userPanelTabActive = function () {
    userPanelTab.forEach(element => {
        element.classList.remove('active');
    });
}
userPanelTab.forEach(element => {
    element.addEventListener('click', function () {
        let userContentAtt = this.getAttribute('data-panel-tab');
        userPanelTabActive();
        userPanelContentActive();
        let userContent = document.getElementById(userContentAtt);
        this.classList.add('active');
        userContent.style.display = 'block';
    })
});


if (panelLogout) {
    panelLogout.addEventListener('click', () => {
        Swal.fire({
            text: "آیا می‌خواهید از حساب کاربری خود خارج شوید؟",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#003637",
            cancelButtonColor: "#d33",
            cancelButtonText: "لغو",
            confirmButtonText: "خروج از حساب",
        }).then((result) => {
            if (result.isConfirmed) {
                console.log("logout");
            }
        });
    })
}

// teacher charts
// all course
// const teachAllCourse = document.getElementById('teachAllCourse');
// Chart.defaults.font.size = 12;
// Chart.defaults.font.family = 'IranSans';
// new Chart(teachAllCourse, {
//   type: 'line',
//   data: {
//     labels: ['اسفند', 'بهمن','دی', 'آذر','آبان', 'مهر', 'شهریور', 'مرداد', 'تیر', 'خرداد', 'اردیبهشت', 'فروردین'],
//     datasets: [{
//       label: '1400',
//       data: [12, 3, 0, 16, 18, 20, 2, 5, 9, 1, 12, 20],
//       order: 1,
//       borderColor: 'red',
//       backgroundColor: 'red',
//       pointRadius: 4,
//       pointHoverRadius: 5
//     }, {
//       label: '1401',
//       data: [8, 17, 32, 30, 20, 1, 12, 8, 13, 10, 11, 17],
//       order: 2,
//       borderColor: 'blue',
//       backgroundColor: 'blue',
//       pointRadius: 4,
//       pointHoverRadius: 5
//     },
//       {
//         label: '1402',
//         data: [0, 12, 32, 28, 12, 8, 12, 10,1, 12, 11, 20],
//         order: 3,
//         borderColor: 'orange',
//         backgroundColor: 'orange',
//         pointRadius: 4,
//       pointHoverRadius: 5
//       }
//     ],
//   }
// });
// count course
// const data = {
//   labels: [
//     'آشنایی با دسته بندی استانداردهای ASTM',
//     'مواد و متالورژی کاربردی (علم مواد)',
//     'انتخاب فولاد در صنعت',
//     'آشنایی با پوشش های توربین',
//     'آشنایی با دسته بندی استانداردهای ASME'
//   ],
//   datasets: [{
//     label: 'تعداد فروش این دوره(عدد)',
//     data: [28, 13, 47, 2, 36],
//     backgroundColor: [
//       'rgb(255, 99, 132)',
//       'rgb(54, 162, 235)',
//       'rgb(255, 205, 86)',
//       'rgb(174,127,255)',
//       'rgb(86,255,134)'
//     ],
//     hoverOffset: 4
//   }]
// };
// const countOfCourse = document.getElementById('countOfCourse');
// Chart.defaults.font.size = 12;
// Chart.defaults.font.family = 'IranSans';
// new Chart(countOfCourse, {
//   type: 'doughnut',
//   data: data,});

// SingleBlog Slider
var swiper = new Swiper(".blogSingleSlider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

// CourseShowVideo
const courseItemButton = document.querySelectorAll('.course-item-button'),
    videoContainerCloseIcon = document.querySelector('#videoContainerCloseIcon'),
    videoItem = document.querySelector('#videoItem'),
    videoIframe = document.querySelector('#videoIframe');
courseItemButton.forEach(element => {
    element.addEventListener('click', function (){
        let videoName = this.getAttribute('data-video-name');
        let videoConfig = this.getAttribute('data-video-config');
        let videoStatus = this.getAttribute('data-status');
        if (videoStatus == 'on'){
            overlayFunc("open");
            videoItem.classList.add('active');
            videoContainerCloseIcon.classList.add('active');
            videoIframe.classList.add('active');
            videoIframe.setAttribute('src', `https://player.arvancloud.ir/index.html?config=${videoConfig}&skin=shaka`);
            videoIframe.setAttribute('name', videoName);
        } else {
            Swal.fire({
                position: "bottom-start",
                icon: "warning",
                title: "در این دوره ثبت نام نکرده‌اید",
                showConfirmButton: false,
                timer: 1500,
            });
        }
    })
});
if (videoContainerCloseIcon){
    videoContainerCloseIcon.addEventListener('click', ()=>{
        overlayFunc();
        videoItem.classList.remove('active');
        videoContainerCloseIcon.classList.remove('active');
        videoIframe.classList.remove('active');
        videoIframe.setAttribute('src', '');
        videoIframe.setAttribute('name', '');
    })
}
overlay.addEventListener('click', ()=>{
    overlayFunc();
    videoItem.classList.remove('active');
    videoContainerCloseIcon.classList.remove('active');
    videoIframe.classList.remove('active');
    videoIframe.setAttribute('src', '');
    videoIframe.setAttribute('name', '');
})

// tab search page
const searchTab = document.querySelectorAll(".search-tab"),
    searchContent = document.querySelectorAll(".search-content");

let searchTabActive = function () {
    searchTab.forEach(element => {
        element.classList.remove('active');
    });
}
let searchContentActive = function () {
    searchContent.forEach(element => {
        element.style.display = 'none';
    });
}
searchTab.forEach(element => {
    element.addEventListener('click', function (){
        let searchContentAtt = this.getAttribute('data-name');
        let searchContentSection = document.getElementById(searchContentAtt);
        searchTabActive();
        searchContentActive();
        this.classList.add('active');
        searchContentSection.style.display = 'block';
    })
});

// acc tab favorite
const favoriteBtnAcc = document.querySelectorAll('.favorite-btn-acc'),
    favoriteContent = document.querySelectorAll('.favorite-content');
let favoriteBtnAccActive = function () {
    favoriteBtnAcc.forEach(element => {
        element.classList.remove('active');
    });
}
let favoriteContentActive = function () {
    favoriteContent.forEach(element => {
        element.style.display = 'none';
    });
}
favoriteBtnAcc.forEach(element => {
    element.addEventListener('click', function (){
        let favoriteBtnAtt = this.getAttribute('data-content');
        let favoriteContentActivation = document.getElementById(favoriteBtnAtt);
        favoriteBtnAccActive();
        favoriteContentActive();
        this.classList.add('active');
        favoriteContentActivation.style.display = 'block';
    })
});

// TopNavbar

/*
document.addEventListener("DOMContentLoaded", () => {
    function getValue(d, timePart) {
        var val = 0
        switch (timePart) {
            case "hours":
                val = 23 - parseInt(d.getHours());
                break;
            case "minutes":
                val = 59 - parseInt(d.getMinutes())
                break;
            case "seconds":
                val = 59 - parseInt(d.getSeconds())
                break;

            default:
                break;
        }
        return val.toString().padStart(2, '0');
    }
    function init() {
        setInterval(function () {
            var d = new Date();
            var h = getValue(d, "hours");
            var m = getValue(d, "minutes");
            var s = getValue(d, "seconds");

            document.getElementById("clock").innerHTML = "<div>" + s + "</div><div>" + m + "</div><div>" + h + "</div>";

        }, 1000);
    }
    init()
});
*/
// player for comments
const playPauseComment = document.querySelectorAll('.play-pause-comment');
let curr_track,
    updateTimer,
    totalDuration,
    currentTime,
    seekSlider,
    buttonClick;

function playActive(){
    playPauseComment.forEach((element) => {
        let playStatus = element.getAttribute('data-play');
        if (playStatus == 'yes'){
            curr_track.pause();
            element.setAttribute('data-play', 'no');
            element.innerHTML = '<svg class="w-8 h-8"><use href="#video-play-icon"></use></svg>';
        }
    })
}
playPauseComment.forEach((element) => {
    element.addEventListener('click', function (){
        buttonClick = this;
        let playStatus = this.getAttribute('data-play');
        let commentLink = this.getAttribute('data-comment-link');
        let commentID = this.getAttribute('data-comment');
        let totalDurationID = commentID+'-total-duration';
        let currentTimeID = commentID+'-current-time';
        let seekSliderID = commentID+'-seek-slider';
        totalDuration = document.getElementById(totalDurationID);
        currentTime = document.getElementById(currentTimeID);
        seekSlider = document.getElementById(seekSliderID);
        clearInterval(updateTimer);
        if (playStatus == 'no'){
            playActive();
            curr_track = document.createElement('audio')
            curr_track.src = commentLink;
            curr_track.play();
            updateTimer = setInterval(setUpdate, 1000);
            buttonClick.innerHTML = '<svg class="w-8 h-8"><use href="#video-pause-icon"></use></svg>';
            buttonClick.setAttribute('data-play', 'yes');
        } else {
            curr_track.pause();
            buttonClick.setAttribute('data-play', 'no');
            buttonClick.innerHTML = '<svg class="w-8 h-8"><use href="#video-play-icon"></use></svg>';
        }
        curr_track.addEventListener('ended', ()=>{
            reset(totalDuration,currentTime,seekSlider);
            curr_track.pause();
        });
    })
})

function reset(totalDuration,currentTime,seekSlider) {
    currentTime.textContent = "0";
    totalDuration.textContent = "00:00";
    seekSlider.value = 0;
}
function seekTo(e) {
    let seekto = curr_track.duration * (e.value / 100);
    curr_track.currentTime = seekto;
}

function setUpdate() {
    let seekPosition = 0;
    if (!isNaN(curr_track.duration)) {
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seekSlider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
        if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
        if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
        if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }

        currentTime.textContent = currentMinutes + ":" + currentSeconds;
        totalDuration.textContent = durationMinutes + ":" + durationSeconds;
    }
}