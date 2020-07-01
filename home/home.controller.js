class HomeCtrl {
  constructor($scope) {
    'ngInject';

    this.name = "AngularJS";
    $scope.selectedPersons = [
        {name : "Pedro",id : 2, isPreselected:false}
    ];
    $scope.persons = [
        {name : "Antonio",id : 1, isPreselected:false},
        {name : "Pedro",id : 2, isPreselected:false},
        {name : "Silva",id : 3, isPreselected:false}
    ];
    //$scope.persons = $scope.person.slice();

    $scope.filterItems = function(arr, query) {
      return arr.filter(function (el) {
        return el.id == query.id;
      })
    }
    $scope.persons = $scope.persons.map(function (person) {
      return {
        isVisible : false,
        name : person.name,
        id : person.id,
        isPreselected : person.isPreselected
      }
    });

    $scope.transferPerson = function() {
      $scope.persons.filter(word => $scope.selectedPersons && $scope.selectedPersons.some((element) => element==word.id)).forEach(e => e.isVisible=true);
      // $scope.persons.forEach(p=>{
      //   if (!$scope.selectedPersons) return;
      //   if ($scope.selectedPersons.some((element) => element==p.id))
      //     p.isVisible=true;
      // });
    }

    $scope.transferTS = function() {
      $scope.persons.filter(word => $scope.selectedTS && $scope.selectedTS.some((element) => element.id==word.id)).forEach(e => e.isVisible=true);
      // $scope.persons.forEach(p=>{
      //   if (!$scope.selectedTS) return;
      //   if ($scope.selectedTS.some((element) => element.id==p.id))
      //     p.isVisible=true;
      // });
    }    
  }
  
}

export default HomeCtrl;