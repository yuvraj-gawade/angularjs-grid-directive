myApp.controller('MainController', function($scope){

	$scope.userGridData = {
		'gridHeader' : [
			{'displayName':'Id', 'column':'id', 'sortable' : true},
			{'displayName':'Name', 'column':'name', 'sortable' : true},
			{'displayName':'age', 'column':'age', 'sortable' : true},
			{'displayName':'PhoneNumber', 'column':'phoneNumber', 'sortable' : false},
			{'displayName':'Address', 'column':'address', 'sortable' : true}
		],
		'gridData' :
			[
				{
					'id': 1,
					'name': 'Yuvraj Gawade',
					'age': 23,
					'phoneNumber': '7620676545',
					'address': 'Pune'
				},
				{
					'id': 2,
					'name': 'Sachin Tendulakar',
					'age': 42,
					'phoneNumber': '9595359368',
					'address': 'Mumbai'
				},
				{
					'id': 3,
					'name': 'MS Dhoni',
					'age': 39,
					'phoneNumber': '1212121212',
					'address': 'Ranchi'
				}

			]
	};

	// actions (show, delete) have to be defined before $scope.actionList
	$scope.show = function (row) {
		alert('show: ' + row.id + ':' + row.name);
	};
	
	$scope.delete = function (row) {
		alert('delete: ' + row.id);
	};

	$scope.actionList = [
		/*{ label: 'edit', href: '#/edit/{{row.id}}', title: 'action to other CTRL' },*/
		{ label: 'show', click: $scope.show, title: 'action in this CTRL use ngClick' },
		{ label: 'delete', click: $scope.delete, title: 'action in this CTRL use ngClick' }
	];

	// call any action in this CTRL
	$scope.call = function (fun, row) {
		fun(row);
	};

	$scope.sayHello = function() {
		console.log("hi, you are in sayHello funtion...");
	};
});
