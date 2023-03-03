const moveCardSelection = (direction) => {
    //alert(direction);
    const carousel = document.getElementsByClassName('carousel')[0];
    let itemCount = carousel.children.length;
    if(direction === 'left') {
        let hideSet = false;
        let showSet = false;
        [...carousel.children].forEach((row, index) => {
            if(index > 0 && index < (itemCount-1)) {
                if(!hideSet && row.className === "show-card"){
                    row.className="hide-card";
                    hideSet = true;
                } else if(hideSet && !showSet && row.className === "hide-card"){
                    row.className="show-card";
                    showSet = true;
                }
            }
        });
    } else if(direction === 'right') {
        let hideSet = false;
        let showSet = false;
        let rows = carousel.children;
        for (let i = (itemCount-1); i >= 0; i--) {
            if(!hideSet && rows[i].className === "show-card"){
                rows[i].className="hide-card";
                hideSet = true;
            } else if(hideSet && !showSet && rows[i].className === "hide-card"){
                rows[i].className="show-card";
                showSet = true;
            }
        }
    }
} 

export default function decorate(block) {
    let itemCount = block.children.length;
    [...block.children].forEach((row, index) => {
        if(index == 0) {
            row.className="left-nav";
            row.addEventListener('click', () => moveCardSelection('left'));
        }
        else if(index > 0 && index <= 5)
            row.className="show-card";
        else if( index > 5 && index < (itemCount-1))
            row.className="hide-card";
        else {
            row.className="right-nav";
            row.addEventListener('click', () => moveCardSelection('right'));
        }
    });
  }