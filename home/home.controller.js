class HomeCtrl {
  constructor($scope) {
    'ngInject';

    this.name = "AngularJS";
    $scope.selectedPersons = [
        {name : "Pedro",id : 2, isPreselected:false}
    ];
    $scope.persons = [
        {name : "Antonio",id : 1, isPreselected:false, productFamily:1},
        {name : "Pedro",id : 2, isPreselected:false, productFamily:2},
        {name : "Silva",id : 3, isPreselected:false, productFamily:1}
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
        isPreselected : person.isPreselected,
        productFamily : person.productFamily
      }
    });

    $scope.transferPerson = function() {
      $scope.persons.filter(word => $scope.selectedPersons && $scope.selectedPersons.some((element) => element==word.id)).forEach(e => e.isVisible=true);
    }

    $scope.transferTS = function() {
      $scope.persons.filter(word => $scope.selectedTS && $scope.selectedTS.some((element) => element.id==word.id)).forEach(e => e.isVisible=true);
    }    
    
    $scope.onlyUnique = function (value, index, self) {
        return self.indexOf(value) === index;
    };

    $scope.orderGroups = function (a, b) {
        var sortingArr = [2, 1, 9];
        return sortingArr.indexOf(a) - sortingArr.indexOf(b);
    };

    $scope.groups = $scope.persons.map(function (x) { return x.productFamily; }).filter($scope.onlyUnique).sort($scope.orderGroups);

    //$scope.$watchCollection('optionDataSrv.charges', function (newVal) {
    //    $scope.charges = newVal;
    //    $scope.groups = $scope.charges.map(function (x) { return x.productFamily; }).filter($scope.onlyUnique).sort($scope.orderGroups);
    //});

  }
  
}

export default HomeCtrl;