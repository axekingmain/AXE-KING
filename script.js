let lastScrollTop = 0; // Track last scroll position
const menuIcon = document.getElementById('menuIcon');



// document.addEventListener('DOMContentLoaded', function () {
//     const isDesktop = /Win|Mac|Linux/.test(navigator.platform);
//
//     if (isDesktop) {
//         // Для компьютеров: показываем сообщение и скрываем основной контент
//         document.getElementById('desktopMessage').style.display = 'flex';
//         document.getElementById('content').style.display = 'none';
//         // Скрываем кнопки меню и X
//         document.getElementById('menuIcon').style.display = 'none';
//         document.getElementById('closeIcon').style.display = 'none';
//     } else {
//         // Для мобильных устройств: скрываем сообщение и показываем основной контент
//         document.getElementById('desktopMessage').style.display = 'none';
//         document.getElementById('content').style.display = 'block';
//         // Убедимся, что кнопки меню и X видимы
//         document.getElementById('menuIcon').style.display = 'block';
//         document.getElementById('closeIcon').style.display = 'block';
//     }
// });
function showCustomAlert(message) {
    document.getElementById('alertMessage').textContent = message;
    document.getElementById('customAlert').style.display = 'flex';
}

function closeCustomAlert() {
    document.getElementById('customAlert').style.display = 'none';
    playMusic();
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


// function playMusic() {
//     const audio = document.getElementById('backgroundMusic');
//     if (audio) {
//         audio.play().catch(error => {
//             console.error('Error playing audio:', error);
//         });
//     } else {
//         console.error('Audio element not found.');
//     }
// }
//
// // Воспроизвести аудио при первом взаимодействии пользователя с документом
// document.addEventListener('click', playMusic, { once: true });
//


// music.js
// script.js

document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('backgroundMusic');

    if (!audio) {
        console.error('Audio element not found');
        return;
    }

    // Попытаться воспроизвести аудио
    function playMusic() {
        audio.play().catch(error => {
            console.error('Error playing audio:', error);
        });
    }

    // Попытаться воспроизвести музыку при загрузке страницы
    playMusic();

    // Слушаем событие нажатия для возобновления воспроизведения, если оно было заблокировано
    document.body.addEventListener('click', () => {
        playMusic();
    });

    // Сохраняем текущее время воспроизведения при уходе со страницы
    window.addEventListener('beforeunload', () => {
        localStorage.setItem('musicTime', audio.currentTime);
    });

    // Восстанавливаем время воспроизведения при загрузке страницы
    const lastTime = localStorage.getItem('musicTime');
    if (lastTime) {
        audio.currentTime = parseFloat(lastTime);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('backgroundMusic');

    if (!audio) {
        console.error('Audio element not found');
        return;
    }

    // Функция для воспроизведения музыки
    function playMusic() {
        audio.play().catch(error => {
            console.error('Error playing audio:', error);
        });
    }

    // Попытаться воспроизвести музыку при загрузке страницы
    // Сохраняем текущее время воспроизведения при уходе со страницы
    window.addEventListener('beforeunload', () => {
        localStorage.setItem('musicTime', audio.currentTime);
    });

    // Восстанавливаем время воспроизведения при загрузке страницы
    const lastTime = localStorage.getItem('musicTime');
    if (lastTime) {
        audio.currentTime = parseFloat(lastTime);
    }

    // Показать предупреждение и предложить воспроизвести музыку
    document.body.addEventListener('click', () => {
        // Воспроизводим музыку только один раз после клика
        document.body.removeEventListener('click', arguments.callee);
        playMusic();
    });

    // Показываем предупреждение сразу при загрузке страницы
    showCustomAlert('Проверка На Робота<br>Нажмите Ок');

    function showCustomAlert(message) {
    const alertElement = document.getElementById('customAlert');
    const alertMessage = document.getElementById('alertMessage');

    if (!alertElement || !alertMessage) {
        console.error('Alert elements not found');
        return;
    }

    // Установка текста сообщения с HTML разрывами строк
    alertMessage.innerHTML = message;
    alertElement.style.display = 'flex';

    // При нажатии на кнопку "OK" в предупреждении запускаем музыку
    document.querySelector('.alert-content button').addEventListener('click', () => {
        alertElement.style.display = 'none';
        // Вызов функции воспроизведения музыки
        const audio = document.getElementById('background-music');
        if (audio) {
            audio.play().catch(error => {
                console.error('Error playing audio:', error);
            });
        }
    });
}
});
