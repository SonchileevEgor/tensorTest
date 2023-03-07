document.addEventListener("DOMContentLoaded", function() {
    var btns = document.getElementsByClassName("card__button");
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];

    Array.from(btns).forEach(element => {
        element.onclick = function() {
            modal.style.display = "block";
        }
    });

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    var form = document.querySelector('.contact-form form');

    form.addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем стандартное поведение формы

    var email = document.getElementById('email').value;
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;

    //Отправка на сервер
    // var xhr = new XMLHttpRequest();
    // xhr.open('POST', '/send-email.php');
    // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // xhr.onreadystatechange = function() {
        // if (xhr.readyState === XMLHttpRequest.DONE) {
        // if (xhr.status === 200) {
            let modal_success = document.getElementById("myModal1");
            modal.style.display = "none";
            modal_success.style.display = "block";
            let span_success = document.getElementsByClassName("close")[1];
            span_success.onclick = function() {
                modal_success.style.display = "none";
            }
        
            window.onclick = function(event) {
                if (event.target == modal_success) {
                    modal_success.style.display = "none";
                }
            }
            form.reset();
        // } else {
            // alert('Произошла ошибка при отправке сообщения.');
        // }
        // }
    // };
    //Отправка на сервер

    //Попытка проверка с помощью мока
    // const handleSubmit = (name, email, phone) => {
    //  /*xhr.send*/console.log('name=' + encodeURIComponent(name) +
    //         '&email=' + encodeURIComponent(email) +
    //         '&phone=' + encodeURIComponent(phone));   
    // }

    // expect(handleSubmit).toHaveBeenCalledWith(
    //     expect.objectContaining({ target: expect.anything() })
    // );
    //Попытка проверка с помощью мока

    });
});