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
		changeItem: function(position, newItem) {
				this.list[position].itemName = newItem;
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
		},
}

var handler = {
	addItem: function() { var itemInput = document.getElementById("add").value;
			toDoList.addItem(itemInput);
			document.getElementById("add").value = '';
			view.displayList();
			return false; 	
			},
	deleteItem: function() { var itemPosition = document.getElementById("deletePosition").valueAsNumber;
			toDoList.deleteItem(itemPosition);
			document.getElementById("deletePosition").value = '';
			view.displayList();
				return false; 
			},
	changeItem : function() { var itemPosition = document.getElementById("changePosition").valueAsNumber;
				var newName = document.getElementById("nameChange").value;
				toDoList.changeItem(itemPosition, newName);
				document.getElementById("changePosition").value = '';
				document.getElementById("nameChange").value = '';
				view.displayList();
				return false; 
				},
	toggleCompleted : function() { var togglePosition = document.getElementById("toggleCompletedPosition").valueAsNumber;
			if (togglePosition) {
			toDoList.toggleCompleted(togglePosition);
			document.getElementById("toggleCompletedPosition").value = '';
			view.displayList();
			}
			else { }
			return false;
	},
	toggleAll : function() { toDoList.toggleAll();
			view.displayList();		
			return false;
	},
}

var view = {
	displayList: function() {
			var todoUl = document.querySelector('ul');
			todoUl.innerHTML = '';
		for (var i = 0; i < toDoList.list.length; i++) {
		var todoLi = document.createElement('li');
			todoLi.className = "inputs";	
		var liss = toDoList.list[i];		
		var itemCompletion = '';
		if ( liss.isCompleted === true ) {
		itemCompletion = '-x-';
		}
		else {
		itemCompletion = '- -';
		}
		todoLi.textContent = toDoList.list[i].itemName + " " + itemCompletion;
		todoUl.appendChild(todoLi);					
}
}
}
