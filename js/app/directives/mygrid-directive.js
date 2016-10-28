/*
	Directive Name: ngGrid
	Author: Yuvraj Gawade
	Date: 19-12-2014

	Markup HTML : <ng-grid data="userGridData"/>

	User has to pass Json object to data attribute of ng-grid.
	This data object should contain "grid header" and "grid data".
	grid header should be array of Strings like ['Id', 'Name', 'Age', 'Phone Number', 'Address'] and
	grid data should be array of object like
	  [
		{
			'id': 1,
			'name': 'Yuvraj Gawade',
			'age': '23',
			'phoneNumber': '7620676545',
			'address': 'Pune'
		},
		{
			'id': 2,
			'age': '42',
			'name': 'Sachin Tendulakar',
			'phoneNumber': '9595359368',
			'address': 'Mumbai'
		},
		{
			'id': 3,
			'name': 'MS Dhoni',
			'age': '39',
			'phoneNumber': '1212121212',
			'address': 'Ranchi'
		}

	  ]

	So final json object will look like
	  {
		'gridHeader' : ['Id', 'Name', 'Age', 'Phone Number', 'Address'],
		'gridData' :
			[
				{
					'id': 1,
					'name': 'Yuvraj Gawade',
					'age': '23',
					'phoneNumber': '7620676545',
					'address': 'Pune'
				},
				{
					'id': 2,
					'age': '42',
					'name': 'Sachin Tendulakar',
					'phoneNumber': '9595359368',
					'address': 'Mumbai'
				},
				{
					'id': 3,
					'name': 'MS Dhoni',
					'age': '39',
					'phoneNumber': '1212121212',
					'address': 'Ranchi'
				}

			]
	  }
	user has to pass this final json object to "data" attribute of ng-grid.

	Ref for sorting :: http://jsfiddle.net/vojtajina/js64b/14/
*/

myApp.directive('ngGrid', function() {
	return {
		restrict: 'E',
		scope : {
			data : '=',
			actionList: '=',
			call: '&'
		},
		templateUrl: 'html/mygrid-directive.html',
		link: function(scope, element, attrs) {
			scope.sortRecords = function(s, p, r) {
				if(s == true) {
					scope.predicate = p;
					scope.reverse = r;
				}
			};

			/*
			 * @param : json object {}
			 * @retrun: json array[]
			 *
			 * This is the fix for "Skip ng-repeat JSON ordering in Angular JS".
			 * This function will return array of keys present in the object.
			 */
			scope.notSorted = function(obj){
		        if (!obj) {
		            return [];
		        }
		        var array = Object.keys(obj);
		        var i = array.indexOf("$$hashKey");
		        array.splice(i, 1);
		        return array;
		    };
		}
	};
});
