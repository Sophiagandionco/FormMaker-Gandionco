const insert = () => {

    let type = document.querySelector('#type').value
    let label = document.querySelector('#label').value

    switch(type){
        case 'text': appendText(label)
            break
        case 'button': appendButton(label)
            break
        case 'title': appendTitle(label)
            break
        case 'phonenumber': appendPhoneNumber(label)
            break
        case 'checkbox': appendCheckbox(label)
            break
    }

}

const appendText = (label = "Default") => {

    let elem = document.createElement('input')

    elem.setAttribute('placeholder', label)
    elem.setAttribute('class', 'form-control mt-2')

    let remelem = document.createElement('button');
    remelem.setAttribute('class', 'btn btn-danger delete-btn d-none');
    remelem.textContent = 'Delete';
    remelem.addEventListener('click', () => {
      container.remove();
    });
  
    let container = document.createElement('div');
    container.setAttribute('class', 'input-group');
    container.append(elem, remelem);

    document.querySelector('#display').append(elem)

}

const appendButton = (label = "Default") => {
    let elem = document.createElement('button');
    elem.setAttribute('class', 'btn btn-primary form-control mt-2');
    elem.textContent = label;
  
    let remelem = document.createElement('button');
    remelem.setAttribute('class', 'btn btn-danger delete-btn d-none');
    remelem.textContent = 'Delete';
    remelem.addEventListener('click', () => {
      container.remove();
    });
  
    let container = document.createElement('div');
    container.setAttribute('class', 'input-group');
    container.append(elem, remelem);
  
    elem.addEventListener('click', () => {
      remelem.classList.toggle('d-none');
    });
  
    document.querySelector('#display').append(container);
  };
  
  const appendTitle = (label = "Default") => {
    let elem = document.createElement("input");
    elem.setAttribute("type", "title");
    elem.setAttribute("placeholder", label);
    elem.setAttribute("class", "form-control mt-2");
  
    let remelem = document.createElement('button');
    remelem.setAttribute('class', 'btn btn-danger delete-btn d-none');
    remelem.textContent = 'Delete';
    remelem.addEventListener('click', () => {
      container.remove();
    });
  
    let container = document.createElement('div');
    container.setAttribute('class', 'input-group');
    container.append(elem, remelem);
  
    elem.addEventListener('click', () => {
      remelem.classList.toggle('d-none');
    });
  
    document.querySelector('#display').append(container);
  };



const appendPhoneNumber = (label = "Default") => {
    let elem = document.createElement("input");
    elem.setAttribute("type", "tel");
    elem.setAttribute("placeholder", label);
    elem.setAttribute("class", "form-control mt-2");
  
    let remelem = document.createElement('button');
    remelem.setAttribute('class', 'btn btn-danger delete-btn d-none');
    remelem.textContent = 'Delete';
    remelem.addEventListener('click', () => {
      container.remove();
    });
  
    let container = document.createElement('div');
    container.setAttribute('class', 'input-group');
    container.append(elem, remelem);
  
    elem.addEventListener('click', () => {
      remelem.classList.toggle('d-none');
    });

    elem.addEventListener('input', () => {
      let value = elem.value.replace(/\D/g, '');
      value = value.slice(0,3) + '-' + value.slice(3,6) + '-' + value.slice(6,10);
      elem.value = value;
    });
  
    document.querySelector('#display').append(container);
};

const appendCheckbox = (label = "Default") => {
    let elem = document.createElement("input");
    elem.setAttribute("type", "checkbox");
    elem.setAttribute("class", "form-check-input mt-2");
  
    let labelElem = document.createElement("label");
    labelElem.setAttribute("class", "form-check-label ml-2");
    labelElem.textContent = label;
  
    let remelem = document.createElement('button');
    remelem.setAttribute('class', 'btn btn-danger delete-btn d-none');
    remelem.textContent = 'Delete';
    remelem.addEventListener('click', () => {
      container.remove();
    });
  
    let container = document.createElement('div');
    container.setAttribute('class', 'form-check');
    container.append(elem, labelElem, remelem);
  
    elem.addEventListener('click', () => {
      remelem.classList.toggle('d-none');
    });
  
    document.querySelector('#display').append(container);
}