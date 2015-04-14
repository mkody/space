function playSounds() {
	var sounds = new Array(
		"./sound/babble16",
		"./sound/babble19",
		"./sound/babble20",
		"./sound/babble24",
		"./sound/babble62",
		"./sound/babble100",
		"./sound/babble105",
		"./sound/babbleb06",
		"./sound/babbleb11",
		"./sound/babbleb18",
		"./sound/space01",
		"./sound/space08",
		"./sound/space11",
		"./sound/space12"
	);
	var index = Math.floor(Math.random() * (sounds.length));
	$("#element").html('<audio id="sound" autobuffer autoplay><source src="' + sounds[index] + '.mp3"><source src="' + sounds[index] + '.ogg"></audio>');
	var aud = document.getElementById("sound");
	aud.volume = 0.4;
}
