import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    //Dropdown menu categories on desktop

    //Variables
    let ListCategory = document.getElementsByClassName('categories-list')[0]
    let submenuCategory = document.getElementsByClassName('header-categories-submenu')[0]
    //Event menu display
    ListCategory.addEventListener('click', function(e){
      submenuCategory.classList.toggle('active')
      e.preventDefault()
    })
    
    //Sidebar
    let sidebar = document.getElementsByClassName('sidebar-header')[0]
    let openSidebar = document.getElementsByClassName('open-sidebar')[0]
    let closeSidebar = document.getElementsByClassName('close-sidebar')[0]

    //Event Open Sidebar
    openSidebar.addEventListener('click', function(){
      sidebar.classList.add('active')
    })
    //Event Close Sidebar
    closeSidebar.addEventListener('click', function(){
      sidebar.classList.remove('active')
    })

    //Scroll Header
    window.onscroll = function(){
      var menu = document.getElementsByClassName('first-header')[0]
      menu.classList.toggle('white', window.scrollY>0);   
  }

  }
}
