class Menu {
  constructor(element) {
    this.menu = element;
    this.btnMobile = $(this.menu).find('.js-button');
    this.submenu = $(this.menu).find('.js-submenu');
    this.menuList = $(this.menu).find('.js-menu-list');
    this.expanders = $(this.menuList).find('.js-menu-expander');
    this.btnMobile.on('click', this.onClickMenuButton.bind(this));
    this.expanders.on('click', this.onClickSubmenu.bind(this));
  }

  onClickMenuButton() {
    this.menuList.toggleClass('menu__list_visible');
  }

  onClickSubmenu() {
    this.submenu.toggleClass('menu__submenu_visible')
  }
}

export default Menu;