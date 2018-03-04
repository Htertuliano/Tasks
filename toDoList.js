var toDoList = {
		list: [],
		displayList: function() {
						if ( this.list.length === 0 ) {
							alert("List is empty");
						}
						else {
								for (var i = 0; i < this.list.length; i++) {
								if ( this.list[i].isCompleted === true ) {
										console.log(this.list[i].itemName);
								}
								else {
									console.log('Your List:' + "\n" + this.list[i].itemName + '-');
								}
						}
				}
		},
		addItem: function(itemName) {
				this.list.push({
						itemName: itemName,
						isCompleted: false
							});
				this.displayList();
		},
		changeitem: function(position, newItem) {
				this.list[position].itemName = newitem;
				this.displayList();
		},
		deleteItem: function(position) {
				this.list.splice(position,1);
				this.displayList();
		},
		toggleCompleted: function(position) {
				var item = this.list[position];
				item.isCompleted = !item.isCompleted;
				this.displayList();
		},
		toggleAll: function() {
				var totalItems = this.list.length;
				var completedItems = 0;
				for ( var i = 0; i < totalItems; i++) {
					if ( this.list[i].isCompleted === true ) {
								completedItems++
						}
				} 
				if (completedItems === totalItems ) {
					for ( var i = 0; i < totalItems; i++) {
						this.list[i].isCompleted = false;
					}
				}
				else {
					for ( var i = 0; i < totalItems; i++ ) {
						this.list[i].isCompleted = true;
					}		
				     }		
				this.displayList();
		}
}

var handlers = {
	addItem: function() { var itemInput = document.getElementById("add").value;
			toDoList.addItem(itemInput);
			document.getElementById("add").value = '';
			view.displayList();
			},
	deleteItem: function() { var itemPosition = document.getElementById("deletePosition").valueAsNumber;
			toDoList.deleteItem(itemPosition);
			document.getElementById("deletePosition").value = '';
			view.displayList();
			},
	changeItem : function() { var itemPosition = document.getElementById("changePosition").valueAsNumber;
				var newName = document.getElementById("nameChange").value;
				toDolist.changeItem(itemPosition, newName);
				document.getElementById("changePosition").value = '';
				document.getElementById("nameChange").value = '';
				view.displayList();	
				},
	toggleAll : function() { var togglePosition = document.getElementById("toggleAllPosition").valueAsNumber;
			toDoList.toggleAll(togglePosition);
			document.getElementById("togglePosition");
		view.displayList();
	}
}

var view = {
	displayList: function() {
			var todoUl = document.querySelector('ul');
			todoUl.innerHTML = '';
		for (var i = 0; i < toDoList.list.length; i++) {
		var todoLi = document.creatElement('li');
		var liss = toDoList.list[i];		
		var itemCompletion = '';
		if ( list.isCompleted === true ) {
		itemCompletion = '-x-' + liss.itemName;
		}
		else {
		itemCompletion = '- -' + liss.itemName;
		}
				todoLi.textContent = toDoList.list[i].itemName;
		todoUl.appendChild(todoLi);					
}
}
