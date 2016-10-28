  Directive Name: ngGrid <br> 
	Author: Yuvraj Gawade <br>
	Date: 19-12-2014 <br>

	Markup HTML : <ng-grid data="userGridData"/>

	User has to pass Json object to data attribute of ng-grid.
	This data object should contain "grid header" and "grid data".
	grid header should be array of Strings like 
	[
		{'displayName':'Id', 'column':'id', 'sortable' : true},
		{'displayName':'Name', 'column':'name', 'sortable' : true},
		{'displayName':'age', 'column':'age', 'sortable' : true},
		{'displayName':'PhoneNumber', 'column':'phoneNumber', 'sortable' : false},
		{'displayName':'Address', 'column':'address', 'sortable' : true}
	] and
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
