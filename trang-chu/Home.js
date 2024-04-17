//cam-chup-mh:
document.addEventListener('keydown', function(event) {
  // Kiểm tra phím Print Screen (PrtScn)
  if (event.keyCode === 44) {
    // Ngăn chặn hành động mặc định
    event.preventDefault();

    // Hiển thị thông báo cho người dùng
    alert('Chụp màn hình không được phép!');
  }
});



//toan-man-hinh
const fullScreenButton = document.getElementById('thu-phong');

fullScreenButton.addEventListener('click', () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen();
  }
});




//ngan-quay-lai
/*window.addEventListener('beforeunload', function(event) {
  event.preventDefault();
  event.returnValue = '';
});*/



//xoa-chu-input
const resettkButton = document.querySelector(".reset");

resettkButton.addEventListener("click", function() {
  const inputrsElementtk = document.querySelector(".search input");
  inputrsElementtk.value = "";
});

const resettkButton2 = document.querySelector(".reset2");

resettkButton2.addEventListener("click", function() {
  const inputrsElementtk2 = document.querySelector("#form-quet #input-quet");
  inputrsElementtk2.value = "";
});


//chu-chay
const spans = document.querySelectorAll(".chu-chay span");

for (let i = 0; i < spans.length; i++) {
  spans[i].style.animationDelay = `${i * 0.5}s`;
}






/*const mainImage = document.querySelector(".slideshow-main-image img");
const thumbnails = document.querySelectorAll(".slideshow-thumbnails img");
let currentIndex = 0; // Current image index

// Function to change main image based on clicked thumbnail or button click
function changeImage(image) {
  mainImage.src = image.src;
  currentIndex = Array.prototype.indexOf.call(thumbnails, image);
}*/

// Handle previous image button click
/*function prevImage() {
  if (currentIndex >= 0) {
    currentIndex--;
    mainImage.src = thumbnails[currentIndex].src;
  }
}*/

//duoi
/*function prevImage() {
  if (currentIndex === 0) {
    currentIndex = thumbnails.length - 1; // Quay lại ảnh cuối cùng
  } else {
    currentIndex--;
  }
  mainImage.src = thumbnails[currentIndex].src;
}*/



// Handle next image button click
/*function nextImage() {
  if (currentIndex < thumbnails.length) {
    currentIndex++;
    mainImage.src = thumbnails[currentIndex].src;
  }
}*/


//duoi
/*
function nextImage() {
  if (currentIndex < thumbnails.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Quay lại ảnh đầu tiên khi ở ảnh cuối cùng
  }
  mainImage.src = thumbnails[currentIndex].src;
}



// Add click event listeners for thumbnails
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => changeImage(thumbnail));
});

// Add click event listeners for prev and next buttons (if they exist)
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

if (prevButton) {
  prevButton.addEventListener("click", prevImage);
}

if (nextButton) {
  nextButton.addEventListener("click", nextImage);
}

// Optional: Auto-play slideshow after 5 seconds
//setInterval(nextImage, 2000);

/* //dang phong an










//bang thong bao
  /*  alert ("Xin chào tiểu thư") */
  var thongbao = document.getElementById("thongbao");
        var backdrop = document.getElementById("backdrop");
        var dongy = document.getElementById("dongy");
        var khongdongy = document.getElementById("khongdongy");
        
        dongy.onclick = function() {
        document.cookie = "dongy=true"; //;expires= Mon, 01 Dec 2025 12:00:00 GMT
            thongbao.style.display = "none"; 
            backdrop.style.display = "none"; 
                    };
        
        khongdongy.onclick = function() {
            
     document.write ("Hỏi chấm?????");

     // window.close();
        };

//doi-bg:

const doiBgElement = document.getElementById("doi-bg");
const hienBgElement = document.getElementById("hien-bg");
let bgState = "default"; // "default" hoặc "changed"

doiBgElement.addEventListener("click", function() {
  if (bgState === "default") {
    // Ẩn background của div "Đổi bg"
    this.style.backgroundImage = "none";
    
    // Hiển thị div "Hiện bg"
    hienBgElement.style.display = "block";
    
    // Cập nhật trạng thái background
    bgState = "changed";
  } else {
    // Hiển thị lại background ban đầu của div "Đổi bg"
    this.style.backgroundImage = ""; // Thay đổi giá trị này cho phù hợp với background ban đầu
    
    // Ẩn div "Hiện bg"
    hienBgElement.style.display = "none";
    
    // Cập nhật trạng thái background
    bgState = "default";
  }
});








        

//back-to-top
const backToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});



/*
const inputurl = document.getElementById("usrls");

const valueurlElement = inputurl.querySelector(".value");

if (valueurlElement.textContent === "https://") {
  valueurlElement.style.color = "red";
} else {
  valueurlElement.style.color = "white";
};*/


        // Kiểm tra xem người dùng đã đồng ý hay chưa
        var cookieDongy = document.cookie.split(';').find(function(row) {
            return row.startsWith('dongy=');
        });
        if (cookieDongy) {
            thongbao.style.display = "none"; // Ẩn bảng thông báo
            backdrop.style.display = "none"; // Ẩn lớp nền mờ
            // Cho phép người dùng truy cập trang web
        } else {
            backdrop.style.display = "block"; // Hiển thị lớp nền mờ
        };

 //ip
   const ipEl = document.getElementById("ip");
const ispEl = document.getElementById("isp");
const countryEl = document.getElementById("country");
const cityEl = document.getElementById("city");
const latitudeEl = document.getElementById("latitude");
const longitudeEl = document.getElementById("longitude");
const timezoneEl = document.getElementById("timezone");

// Lấy thông tin IP
fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
        ipEl.textContent = `Địa chỉ IP: ${data.ip}`;
        return fetch(`https://ipinfo.io/${data.ip}/json`);
    })
    .then((response) => response.json())
    .then((data) => {
        ispEl.textContent = `Nhà cung cấp: ${data.isp}`;
        countryEl.textContent = `Quốc gia: ${data.country}`;
        cityEl.textContent = `Thành phố: ${data.city}`;
        latitudeEl.textContent = `Vĩ độ: ${data.latitude}`;
        longitudeEl.textContent = `Kinh độ: ${data.longitude}`;
        timezoneEl.textContent = `Múi giờ: ${data.timezone}`;
    });


  const checkip = document.querySelector('#ipc');
const muiTenXuong = document.querySelector('.mui-ten-xuong');

muiTenXuong.addEventListener('click', () => {
  checkip.classList.toggle('hidden');
});


//tool
const toggleButtons = document.querySelectorAll("[id^=toggle-tools]");
const toolsContainers = document.querySelectorAll("[id^=tools]");
const toggleDeltaButton = document.getElementById("toggle-delta");

let isMultiSelectionEnabled = false; // Flag to track multi-selection state

toggleDeltaButton.addEventListener("click", () => {
  isMultiSelectionEnabled = !isMultiSelectionEnabled;
  toggleDeltaButton.textContent = isMultiSelectionEnabled ? "╳" : "∆";
});

toggleButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const currentTools = toolsContainers[index];

        if (button.textContent === "✕") {
      currentTools.style.display = "none";
      button.textContent = "☰";
      return; // Exit this click handler to prevent further actions
    }

    if (isMultiSelectionEnabled) {
            currentTools.style.display = currentTools.style.display === "none" ? "block" : "none";
      button.textContent = currentTools.style.display === "block" ? "✕" : "☰";
    } else {
      // Multi-selection disabled, close all others, open clicked one
      toolsContainers.forEach((container) => {
        container.style.display = "none";
      });
      currentTools.style.display = currentTools.style.display === "none" ? "block" : "none";
      toggleButtons.forEach((otherButton) => {
        otherButton.textContent = "☰";
      });
      button.textContent = currentTools.style.display === "block" ? "✕" : "☰";
    }
  });
});

// Hiển thị/ẩn mục phụ khi click vào h4
const headings = document.querySelectorAll("h4");

headings.forEach(heading => {
  heading.addEventListener("click", function() {
    const content = this.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});


const ulBq = document.querySelector('.ul-bq');
const muiTenLen = document.querySelector('.mui-ten-len');

muiTenLen.addEventListener('click', () => {
  ulBq.classList.toggle('hidden');
});

//url
const surl = document.getElementById('surl');

    // Lấy link từ ô input
        const linkType = surl.querySelector('select[name="linkType"]');

        surl.addEventListener('submit', (event) => {
            event.preventDefault();

            // Lấy link từ ô input
            const link = surl.querySelector('input[name="link"]').value;

            // Xác định loại link
            /*const typesurl = linkType.value;

            // Thêm view-source: nếu cần thiết
            if (typesurl === 'view-source') {
                link = 'view-source:' + link;
            }*/

            // Kiểm tra nếu link không bắt đầu bằng http:// hoặc https://
            if (!link.startsWith('http://') && !link.startsWith('https://')) {
                link = 'https://' + link;
            }

            // Chuyển đến link
           /* window.location.href = link;*/
            window.open(link, '_blank');
        });

/*
const hienBgt = document.getElementById('hien-chu');

hienBgt.addEventListener('click', function() {
  const textDiv = this.closest('.ul-bq'); // Tìm div #text gần nhất
  textDiv.querySelector('p').style.display = 'none'; // Ẩn thẻ p trong #text
});*/









//video
const viideo = document.querySelector('.video');
const muiTenCheo = document.querySelector('.mui-ten-cheo');
const anvi = document.querySelector('.ul-bq .p-bq');


viideo.addEventListener('change', () => {
  if (viideo.classList.contains('hidden') || viideo.style.display === 'none') {
    const videoItems = document.querySelectorAll('.vo');
    videoItems.forEach(videoItem => videoItem.pause());
  }
});





muiTenCheo.addEventListener('click', () => {
  viideo.classList.toggle('hidden');
    anvi.classList.toggle('hidden');
});



//dung-video-khi-hidden







/*
const prevVideoBtn = document.getElementById("prev-video");
const nextVideoBtn = document.getElementById("next-video");
const videos = document.querySelectorAll(".video video");



let currentVideoIndex = 0;

prevVideoBtn.addEventListener("click", () => {
  if (currentVideoIndex > 0) {
    videos[currentVideoIndex].pause();
    videos[currentVideoIndex].style.display = "none";
    currentVideoIndex--;
    videos[currentVideoIndex].style.display = "block";
    videos[currentVideoIndex].play();
  }
});

nextVideoBtn.addEventListener("click", () => {
  if (currentVideoIndex < videos.length - 1) {
    videos[currentVideoIndex].pause();
    videos[currentVideoIndex].style.display = "none";
    currentVideoIndex++;
    videos[currentVideoIndex].style.display = "block";
    videos[currentVideoIndex].play();
  }
});*/





//phat-don-le-1-video
const videosssi = document.querySelectorAll('video');





for (const video of videosssi) {
  video.addEventListener('play', () => {
    for (const otherVideo of videosssi) {
      if (otherVideo !== video) {
        otherVideo.pause();
      }
    }
  });
}



//const videos = document.querySelectorAll(".video video");

/*const viiideos = document.querySelectorAll(".video .vo");

viiideos.forEach(video => {
  video.addEventListener("click", () => {
    // Dừng tất cả video đang phát
    viiideos.forEach(v => v.pause());

    // Phát video được chọn
    video.play();
  });
});*/

//const videoss = document.querySelectorAll('.vio');

// Lặp qua tất cả các video





 //thanh tim kiem   
    function handleSearch(formId) {
  const input = document.getElementById(`input-${formId}`);
  const searchEngine = document.getElementById(`search-engine-${formId}`);
  const submitButton = document.getElementById(`submit-${formId}`);


    submitButton.addEventListener("click", function(event) {
      event.preventDefault();
      const query = input.value.trim();
      if (query === "") {
        return;
      }
      
      const selectedEngine = searchEngine.value;
      let url = "";
      switch (selectedEngine) {
        case "duckduckgo":
          url = "https://duckduckgo.com/?q=" + query;
          break;
        case "google":
          url = "https://www.google.com/search?q=" + query;
          break;
         case "zerochan":        
         url = "https://www.zerochan.net/search?q=" + query;
          case "cardyugioh":
          url = "https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=1&sess=1&rp=10&mode=&sort=1&keyword=" + query + "&stype=1&ctype=&othercon=2&starfr=&starto=&pscalefr=&pscaleto=&linkmarkerfr=&linkmarkerto=&link_m=2&atkfr=&atkto=&deffr=&defto=&releaseDStart=1&releaseMStart=1&releaseYStart=1999&releaseDEnd=&releaseMEnd=&releaseYEnd=";
          break;
          case "pixiv":
          url = "https://www.pixiv.net/en/tags/" + query;
          break;
          case "wikipedia":
          url = "https://vi.m.wikipedia.org/wiki/" + query;
          break;
         case "bing":
          url = "https://www.bing.com/search?q=" + query;
          break;
          case "googlev":
          url = "https://transparencyreport.google.com/safe-browsing/search?url=" + query;
          break;
          case "itemtoram":
          url = "https://coryn.club/item.php?name=" + query;
          break;
           case "quaitoram":
          url = "https://coryn.club/monster.php?name=" + query;
          break;
           case "lvltoram":
          url = "https://coryn.club/leveling.php?lv=" + query + "&gap=7";
          break;
           case "maptoram":
          url = "https://coryn.club/map.php?name=" + query;
          break;
           case "nct":
          url = "https://www.nhaccuatui.com/tim-kiem?q=" + query;
          break;
           case "zing-mp3":
          url = "https://zingmp3.vn/tim-kiem/tat-ca?q=" + query;
          break;
           case "ytb":
          url = "https://youtube.com/results?sp=mAEA&search_query=" + query;
          break;
        case "qtm":
          url = "https://quantrimang.com/s/?q=" + query;
          break;
          case "fd":
          url = "https://" + query + ".fandom.com/";
          break;
          case "tdwk":
          url = "https://vi.m.wiktionary.org/wiki/" + query;
          break;
      }
  window.open(url, '_blank');
  //mo-o-mot trang
   /*window.location.href = url;*/
    });}


  handleSearch("search");
handleSearch("quet");