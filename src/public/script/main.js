

const button_pre = document.getElementById('button-preview');
const main_bar = document.getElementById('main-bar');
const right_menu = document.getElementById('right-menu');
const menu_element = document.getElementById('menu-element');
const menu = document.getElementById('menu');
const back_menu = document.getElementById('back-menu');

button_pre.addEventListener('change', (ev) =>{
    if(ev.target.checked && button_pre.checked){
        main_bar.style.display = 'none';
        right_menu.style.display = 'none';
    }
    else{
        main_bar.style.display = 'block';
        right_menu.style.display = 'block';
    }
    
});

menu_element.addEventListener('click' , (ev) =>{
    menu.style.display = 'block';
    menu_element.style.display = 'none';
});

back_menu.addEventListener('click',()=>{
    menu.style.display = 'none';
    menu_element.style.display = 'block';
});

const info_button = document.getElementById('info-button');
const back_info = document.getElementById('back-info');
const information = document.getElementById('information');

info_button.addEventListener('click',()=>{
    info_button.style.display = 'none';
    information.style.display = 'block';
});

back_info.addEventListener('click',()=>{
    info_button.style.display = 'block';
    information.style.display = 'none';
})

const fild_drop = document.getElementById('ex-fild-drop');
const drag_items = document.querySelectorAll('#menu ul li');


drag_items.forEach((element) =>{

    element.addEventListener('dragstart',(ev)=>{
        ev.dataTransfer.setData('text',ev.target.textContent.trim());
        ev.target.style.opacity = '0.5';
    });

    element.addEventListener('dragend',(ev)=>{
        ev.target.style.opacity = '1';
    });
});

fild_drop.addEventListener('dragover',(ev)=>{
    ev.preventDefault();
    fild_drop.style.backgroundColor = '#eeeeee';
});

fild_drop.addEventListener('dragleave',()=>{
    fild_drop.style.backgroundColor = '';
});



fild_drop.addEventListener('drop',(ev)=>{
    ev.preventDefault();

    const dragged_data = ev.dataTransfer.getData('text');

    const new_item = document.createElement('div');
    new_item.classList.add('comman-style');
    new_item.textContent = dragged_data;
    new_item.draggable = true;
    new_item.style.width = '100%';

    const enter = document.createElement('br');
    const line = document.createElement('hr');
    line.style.width = '90%';

    new_item.appendChild(enter);

    if(dragged_data === 'عنوان'){
        const title = document.createElement('input');
        title.type = 'text';
        title.name = 'عنوان';
        title.placeholder = 'عنوان خود را وارد کنید';
        title.classList.add('box-title');
        new_item.appendChild(title);
    }

    else if(dragged_data === 'تاریخ'){
        const date = document.createElement('input');
        date.type = 'date';
        date.name = 'تاریخ';
        date.classList.add('box-date');
        new_item.appendChild(date);

    }

    else if(dragged_data === 'ایمیل'){
        const email = document.createElement('input');
        email.type = 'email';
        email.name = 'ایمیل';
        email.placeholder = 'ایمیل خود را وارد کنید';
        email.classList.add('box-email');
        new_item.appendChild(email);
    }
    
    else if(dragged_data === 'تصویر'){
        const image = document.createElement('input');
        image.type = 'file';
        image.name = 'تصویر';
        image.classList.add('box-image');
        new_item.appendChild(image);
    }

    else if(dragged_data === 'متن'){
        const textArea = document.createElement('textarea');
        textArea.rows = '8';
        textArea.cols = '45';
        textArea.name = 'متن';
        textArea.placeholder = 'متن دلخواه را بنویسید';
        textArea.classList.add('box-text');
        new_item.appendChild(textArea);
    }

    else{
        const phone = document.createElement('input');
        phone.type = 'tel';
        phone.name = 'شماره تلفن';
        phone.placeholder = 'شماره تلفن خود را وارد کنید';
        phone.classList.add('box-phone');
        new_item.appendChild(phone);

    }

    new_item.appendChild(line);

    new_item.addEventListener('dragstart',(dragEv)=>{
        dragEv.dataTransfer.setData('text',dragged_data);
        new_item.style.opacity = '0.5';
    });
    new_item.addEventListener('dragend',()=>{
        new_item.style.opacity = '1';
    });

    new_item.addEventListener('dblclick',()=>{
        new_item.remove();
    });

    


    fild_drop.style.backgroundColor = '';
    fild_drop.appendChild(new_item);

});

const submit = document.getElementById('submit-done');

submit.addEventListener('click',(ev)=>{
    ev.preventDefault();

    const whole_data = document.querySelectorAll('#ex-fild-drop input , #ex-fild-drop textarea');

    const formData = {};

    whole_data.forEach((ele)=>{
        const name = ele.getAttribute('name');
        const value = ele.value;

        formData[name] = value;
    });
    const data = JSON.stringify(formData);

    console.log(data);

    alert("داده ها با موفقیت ذخیره شدند.");

    const respose = fetch('http://localhost:3000/api' , {
        method: 'POST',
        headers: { 'Content-type':'application/json'},
        body: data
    });


    document.getElementById('ex-fild-drop').innerHTML = 'عناصر را اینجا قرار دهید';




});






