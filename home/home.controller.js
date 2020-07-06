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
   //$scope.persons=null;

    $scope.filterItems = function(arr, query) {
      return arr.filter(function (el) {
        return el.id == query.id;
      })
    }
    // $scope.persons = $scope.persons.map(function (person) {
    //   return {
    //     isVisible : false,
    //     name : person.name,
    //     id : person.id,
    //     isPreselected : person.isPreselected,
    //     productFamily : person.productFamily
    //   }
    // });

    $scope.model = {
      id:1,
      name:"antonio",
      address : {
        addressId : 1,
        description:"phone",
        contact : "123"
      }
    };

    $scope.groups = [
      {grpId:1, person: $scope.persons && $scope.persons.map(function (person) {
      return {
        isVisible : false,
        name : person.name,
        id : person.id,
        isPreselected : person.isPreselected,
        productFamily : person.productFamily
      }
    })},
      {grpId:2, person: $scope.persons && $scope.persons.map(function (person) {
      return {
        isVisible : false,
        name : person.name,
        id : person.id,
        isPreselected : person.isPreselected,
        productFamily : person.productFamily
      }
    })},
      {grpId:3, person: $scope.persons && $scope.persons.map(function (person) {
      return {
        isVisible : false,
        name : person.name,
        id : person.id,
        isPreselected : person.isPreselected,
        productFamily : person.productFamily
      }
    })}];

var kvArray = [{key: 1, value: 10}, 
               {key: 2, value: 20}, 
               {key: 3, value: 30}]
//kvArray=null;
$scope.reformattedArray = kvArray && kvArray.map(obj => {
   let rObj = {}
   rObj[obj.key] = obj.value
   return rObj
});


    $scope.xpto = function (person) {
      return {
        isVisible : false,
        name : person.name,
        id : person.id,
        isPreselected : person.isPreselected,
        productFamily : person.productFamily
      }
    };
//$scope.hasBafValue=1;

    $scope.transferPerson = function() {
      $scope.persons.filter(word => $scope.selectedPersons && $scope.selectedPersons.some((element) => element==word.id)).forEach(e => e.isVisible=true);
    }

    $scope.transferTS = function() {
      $scope.persons.filter(word => $scope.selectedTS && $scope.selectedTS.some((element) => element.id==word.id)).forEach(e => e.isVisible=true);
    }    
    $scope.getNameId = function() {
      console.log( $scope.hasBafValue);
    }    
    $scope.getPerson = function() {
      console.log( $scope.massAdjustmentType);
    }  
    $scope.onlyUnique = function (value, index, self) {
        return self.indexOf(value) === index;
    };

    $scope.orderGroups = function (a, b) {
        var sortingArr = [2, 1, 9];
        return sortingArr.indexOf(a) - sortingArr.indexOf(b);
    };

  }
  
}

export default HomeCtrl;