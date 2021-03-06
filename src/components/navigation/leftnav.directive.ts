module DigiLeftNav
{
    export class LeftNavDirective implements ng.IDirective
    {
        public restrict: string = "E";
        public replace: boolean = true;
        public templateUrl: string = 'components/navigation/leftnav.html';
        public controller = DigiLeftNav.LeftNavController;
        public controllerAs: string = 'vm';
  }



    export class LeftNavController
    {
        static $inject = ['$state', '$mdSidenav'];
        public menu: any = [];
        public $state: ng.ui.IStateService;
        public $mdSidenav: ng.material.ISidenavObject;
        public selected: number = 0;
        constructor($state: ng.ui.IStateService, $mdSidenav: ng.material.ISidenavObject)
        {
          var vm = this;
          vm.$state = $state;
          vm.$mdSidenav = $mdSidenav;
          console.log('LeftNavController ... started.');
          vm.menu = [

            {
              link: 'home',
              name: 'Home',
              icon: 'apps'
            },
              {
                link: 'home.reports',
                name: 'Reports',
                icon: 'insert_chart'
              },
              {
                link: 'home.page1',
                name: 'Page1',
                icon: 'drafts'
              },
              {
                link: 'home.page2',
                name: 'page2',
                icon: 'content_paste'
              },
            ];


        }

        toggleSidenav(): boolean {
          console.warn('GFA DEBUG toggleSidenav');
          this.$mdSidenav.toggle();
          return true;
        }

        closeSidenav(): boolean {
          this.$mdSidenav.close();
          return true;
        }

    }
}
