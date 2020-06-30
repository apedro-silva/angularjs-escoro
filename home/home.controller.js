class HomeCtrl {
  constructor($scope) {
    'ngInject';

    this.name = "AngularJS";
   
    $scope.person = [
        {name : "Antonio",id : 1, isPreselected:false},
        {name : "Pedro",id : 2, isPreselected:false},
        {name : "Silva",id : 3, isPreselected:false}
    ];
    $scope.persons = $scope.person.slice();

    $scope.filterItems = function(arr, query) {
      return arr.filter(function (el) {
        return el.id == query.id;
      })
    }
    $scope.transferPerson = function() {
      $scope.filterItems($scope.persons, $scope.selectPersons[0]).isPreselected=true;
    }
  }
  
}

export default HomeCtrl;