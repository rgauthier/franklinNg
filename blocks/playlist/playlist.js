export default function decorate(block) {
    let itemCount = block.children.length;
    const container = document.createElement('div');
    container.className='container';

    for(var i = 0; i < itemCount; i++){
        const input = document.createElement('input');
        input.type='radio';
        input.name='slider';
        input.id=`item-${i}`;
        if (i == 1) {
            input.checked=true;
        }
        container.append(input);
    }

    const cards = document.createElement('div');
    cards.className='cards';
    let leftNav;
    let rightNav;

    [...block.children].forEach((row, index) => {
        if(index == 0) {
            row.className="left-nav";
            row.addEventListener('click', () => moveCardSelection('left'));
            leftNav=row;
        }
        else if(index == (itemCount-1)) {
            row.className="right-nav";
            row.addEventListener('click', () => moveCardSelection('right'));
            rightNav=row;
        }
        else {
            const label = document.createElement('label');
            label.className='card';
            label.setAttribute('for', `item-${index}`);
            label.id=`card-${index}`
            label.append(row.querySelector('img'));
            cards.append(label);
        }
    });
    container.append(cards);
    block.textContent = '';
    block.append(leftNav);
    block.append(container);
    block.append(rightNav);
  }