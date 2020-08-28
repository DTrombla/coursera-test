(function(){
	var names = ["Joe", "jack", "tim", "Garry", "John", "jeremy", "alice", "karina"];
	for (var i = names.length - 1; i >= 0; i--) {
		 var first = names[i].charAt(0).toUpperCase();
		 if (first === "J"){
			byeSpeaker.speak(names[i]);
		 }
		else {
			helloSpeaker.speak(names[i]);
		 }
	}
})();