let lastScrollTop = 0; // Track last scroll position
const menuIcon = document.getElementById('menuIcon');


document.addEventListener('DOMContentLoaded', function () {
    const isDesktop = /Win|Mac|Linux/.test(navigator.platform);

    if (isDesktop) {
        // Для компьютеров: показываем сообщение и скрываем основной контент
        document.getElementById('desktopMessage').style.display = 'flex';
        document.getElementById('content').style.display = 'none';
        // Скрываем кнопки меню и X
        document.getElementById('menuIcon').style.display = 'none';
        document.getElementById('closeIcon').style.display = 'none';
    } else {
        // Для мобильных устройств: скрываем сообщение и показываем основной контент
        document.getElementById('desktopMessage').style.display = 'none';
        document.getElementById('content').style.display = 'block';
        // Убедимся, что кнопки меню и X видимы
        document.getElementById('menuIcon').style.display = 'block';
        document.getElementById('closeIcon').style.display = 'block';
    }
});
function showCustomAlert(message) {
    document.getElementById('alertMessage').textContent = message;
    document.getElementById('customAlert').style.display = 'flex';
}

function closeCustomAlert() {
    document.getElementById('customAlert').style.display = 'none';
}

// Sidebar related functions
function openSidebar() {
    document.getElementById('sidebar').classList.add('open');
    document.getElementById('overlay').classList.add('active');
    document.getElementById('menuIcon').style.display = 'none';
    document.getElementById('closeIcon').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Block scroll when menu is open
}

function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('overlay').classList.remove('active');
    document.getElementById('menuIcon').style.display = 'flex';
    document.getElementById('closeIcon').style.display = 'none';
    document.body.style.overflow = ''; // Unblock scroll when menu is closed
}
// function openSidebar() {
//     document.getElementById('sidebar').classList.add('open');
//     document.getElementById('overlay').classList.add('active');
//     menuIcon.style.display = 'none';
//     document.getElementById('closeIcon').style.display = 'block';
//     document.body.style.overflow = 'hidden'; // Block scroll when menu is open
// }
//
// function closeSidebar() {
//     document.getElementById('sidebar').classList.remove('open');
//     document.getElementById('overlay').classList.remove('active');
//     menuIcon.style.display = 'flex';
//     document.getElementById('closeIcon').style.display = 'none';
//     document.body.style.overflow = ''; // Unblock scroll when menu is closed
// }

function updateVisitCount() {
    let count = localStorage.getItem('visitCount') || 0;
    count++;
    localStorage.setItem('visitCount', count);
    document.getElementById('visitCount').textContent = count;
}

// Initialize visit count on page load
window.onload = updateVisitCount;

// function showCustomAlert(message) {
//     document.getElementById('alertMessage').textContent = message;
//     document.getElementById('customAlert').style.display = 'flex';
// }
//
// function closeCustomAlert() {
//     document.getElementById('customAlert').style.display = 'none';
// }

document.addEventListener('contextmenu', function(e) {
    e.preventDefault(); // Prevent right-click
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'PrintScreen') {
        e.preventDefault(); // Prevent PrintScreen
    }
});

// Function to handle scroll event
window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        if (!document.getElementById('sidebar').classList.contains('open')) {
            menuIcon.style.display = 'none';
        }
    } else {
        // Scrolling up
        menuIcon.style.display = 'flex';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});
