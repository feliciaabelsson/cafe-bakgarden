var Main = {

	init:function() {
	
		var burgerBtn = document.getElementById('burgerMenuIcon');
			burgerBtn.addEventListener('click', Main.toggleMenu);

	},//End init


	toggleMenu:function(e) {
		var btn = e.target;
		var listItems = btn.parentNode.getElementsByTagName('li');
		var len = listItems.length;

			for (let i = 0; i < len; i++) {

				if (listItems[i].className == 'hidden') {
					listItems[i].removeAttribute('class', 'hidden');
					listItems[i].setAttribute('class', 'burgerListItem');
					btn.removeAttribute('id', 'burgerMenuIcon');
					btn.setAttribute('id', 'activeIcon');
				}//end if

				else if (listItems[i].className == 'burgerListItem') {
					listItems[i].removeAttribute('class', 'burgerListItem');
					listItems[i].setAttribute('class', 'hidden');
					btn.removeAttribute('id', 'activeIcon');
					btn.setAttribute('id', 'burgerMenuIcon');
				} //end else
			}//end loop

	}//End toggleMenu

}// End Main

document.addEventListener('DOMContentLoaded', Main.init);