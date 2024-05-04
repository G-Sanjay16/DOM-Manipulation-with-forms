function createForm() {
    const formContainer = document.getElementById('formContainer');

   
    const form = document.createElement('form');
    form.setAttribute('id', 'survey-form');
    form.setAttribute('class', 'survey-form'); 

    const fields = ['First Name', 'Last Name', 'Address', 'Pincode'];
    fields.forEach(field => {
        const label = document.createElement('label');
        label.textContent = field + ':';
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('name', field.toLowerCase().replace(/\s/g, ''));
        input.setAttribute('id', field.toLowerCase().replace(/\s/g, ''));
        if (field === 'First Name') {
            input.setAttribute('required', 'true');
            input.setAttribute('placeholder', 'Enter your first name');
            input.setAttribute('id', 'first-name'); 
            const nameLabel = document.createElement('label');
            nameLabel.textContent = 'Name:';
            nameLabel.setAttribute('id', 'name-label'); 
            form.appendChild(nameLabel);
        } else if (field === 'Last Name') {
            input.setAttribute('required', 'true');
            input.setAttribute('placeholder', 'Enter your last name');
            input.setAttribute('id', 'last-name'); 
        }
        const formGroup = document.createElement('div');
        formGroup.setAttribute('class', 'form-group');
        formGroup.appendChild(label);
        formGroup.appendChild(input);
        form.appendChild(formGroup);
    });

    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email:';
    emailLabel.setAttribute('id', 'email-label'); 
    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('name', 'email');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('required', 'true');
    emailInput.setAttribute('placeholder', 'Enter your email');
    const emailFormGroup = document.createElement('div');
    emailFormGroup.setAttribute('class', 'form-group');
    emailFormGroup.appendChild(emailLabel);
    emailFormGroup.appendChild(emailInput);
    form.appendChild(emailFormGroup);

   
    const genderLabel = document.createElement('label');
    genderLabel.textContent = 'Gender:';
    form.appendChild(genderLabel);

    const genders = ['Male', 'Female', 'Other'];
    genders.forEach(gender => {
        const genderInput = document.createElement('input');
        genderInput.setAttribute('type', 'radio');
        genderInput.setAttribute('name', 'gender');
        genderInput.setAttribute('value', gender.toLowerCase());
        const genderText = document.createTextNode(gender);
        const genderSpan = document.createElement('span');
        genderSpan.appendChild(genderInput);
        genderSpan.appendChild(genderText);
        form.appendChild(genderSpan);
    });

   
    const foodLabel = document.createElement('label');
    foodLabel.textContent = 'Choice of Food (Select at least 2):';
    form.appendChild(foodLabel);

    const foods = ['Pizza', 'Burger', 'Pasta', 'Salad', 'Soup'];
    foods.forEach(food => {
        const foodInput = document.createElement('input');
        foodInput.setAttribute('type', 'checkbox');
        foodInput.setAttribute('name', 'food');
        foodInput.setAttribute('value', food.toLowerCase());
        const foodText = document.createTextNode(food);
        const foodSpan = document.createElement('span');
        foodSpan.appendChild(foodInput);
        foodSpan.appendChild(foodText);
        form.appendChild(foodSpan);
    });

   
    const stateLabel = document.createElement('label');
    stateLabel.textContent = 'State:';
    form.appendChild(stateLabel);

    const states = ['State 1', 'State 2', 'State 3']; 
    const stateSelect = document.createElement('select');
    stateSelect.setAttribute('name', 'state');
    states.forEach(state => {
        const option = document.createElement('option');
        option.setAttribute('value', state.toLowerCase().replace(/\s/g, ''));
        option.textContent = state;
        stateSelect.appendChild(option);
    });
    form.appendChild(stateSelect);


    const countryLabel = document.createElement('label');
    countryLabel.textContent = 'Country:';
    const countryInput = document.createElement('input');
    countryInput.setAttribute('type', 'text');
    countryInput.setAttribute('name', 'country');
    const countryFormGroup = document.createElement('div');
    countryFormGroup.setAttribute('class', 'form-group');
    countryFormGroup.appendChild(countryLabel);
    countryFormGroup.appendChild(countryInput);
    form.appendChild(countryFormGroup);

    
    const commentsLabel = document.createElement('label');
    commentsLabel.textContent = 'Additional Comments:';
    const commentsTextarea = document.createElement('textarea');
    commentsTextarea.setAttribute('id', 'comments');
    commentsTextarea.setAttribute('name', 'comments');
    commentsTextarea.setAttribute('rows', '4');
    commentsTextarea.setAttribute('placeholder', 'Enter your additional comments');
    const commentsFormGroup = document.createElement('div');
    commentsFormGroup.setAttribute('class', 'form-group');
    commentsFormGroup.appendChild(commentsLabel);
    commentsFormGroup.appendChild(commentsTextarea);
    form.appendChild(commentsFormGroup);

  
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('id', 'submit');
    submitButton.textContent = 'Submit';
    form.appendChild(submitButton);

    
    formContainer.appendChild(form);

   
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        addRow();
    });
}


createForm();


function addRow() {
    
    const formData = new FormData(document.getElementById('survey-form'));
    const values = {};
    formData.forEach((value, key) => {
        if (!values[key]) {
            values[key] = value;
        } else {
            if (!Array.isArray(values[key])) {
                values[key] = [values[key]];
            }
            values[key].push(value);
        }
    });

   
    const tableBody = document.getElementById('tableBody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${values.firstname}</td>
                        <td>${values.lastname}</td>
                        <td>${values.address}</td>
                        <td>${values.pincode}</td>
                        <td>${values.gender}</td>
                        <td>${values.food.join(', ')}</td>
                        <td>${values.country}</td>
                        <td>${values.comments}</td>`;
    tableBody.appendChild(newRow);

    
    document.getElementById('survey-form').reset();
}