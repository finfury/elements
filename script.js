const selects = document.querySelectorAll('.select')
selects.forEach(select => {
    const activeItem = select.querySelector('.select__item');
    const optionList = select.querySelector('.option-list');
    const options = optionList.querySelectorAll('.option')

    activeItem.addEventListener('click', () => {
        changeClassActive('toggle', activeItem, optionList)
    })

    options.forEach(option => {
        const optionValue = option.getAttribute('data-value');
        const optionContent = option.querySelector('.option__title').textContent;

        option.addEventListener('click', () => {
            const activeValue = activeItem.getAttribute('data-value');

            if (optionValue === activeValue) {
                changeClassActive('remove', activeItem, optionList)
                console.log('removed')
                return
            }
            activeItem.setAttribute('data-value', optionValue)
            activeItem.querySelector('.option__title').textContent = optionContent
            changeClassActive('remove', activeItem, optionList)
        })
    })
})

function changeClassActive(option, ...items) {
    switch (option) {
        case 'add':
            items.forEach(item => item.classList.add('active'))
            break;
        case 'remove':
            items.forEach(item => item.classList.remove('active'))
            break;
        case 'toggle':
            items.forEach(item => item.classList.toggle('active'))
            break;
        default: break;
    }
}