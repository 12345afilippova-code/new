window.onload = function() {
    let preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('hide-preloader');
    }
};

const modal = document.getElementById('modalForm');
const openBtn = document.getElementById('openFormBtn');
const closeBtn = document.querySelector('.close-modal');

// Открыть форму
if (openBtn) {
    openBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
}

// Закрыть по крестику
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

// Закрыть при клике на фон (вне контента)
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Обработка отправки формы
const form = document.getElementById('feedbackForm');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // отменяем реальную отправку (т.к. нет бэкенда)

        // Собираем данные
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Простая валидация (проверка на заполнение обязательных полей)
        if (!data.fio || !data.email || !data.subject || !data.message) {
            alert('Пожалуйста, заполните все обязательные поля (отмечены *)');
            return;
        }
        
        // Вывод в консоль (для отладки)
        console.log('Данные формы:', data);
        
        // Имитация отправки: показываем сообщение об успехе
        alert('Спасибо! Ваше сообщение отправлено (демонстрация).\n\nВ реальном проекте данные ушли бы на почту.');
        
        // Очистить форму и закрыть модальное окно
        form.reset();
        modal.style.display = 'none';
    });
}