Plan d'action

Html : 
-boutton au meme niveau que les balises audio
-balises audio (id correspondant au keycode de la touch appuyé)


css :
-@media query qui modifie la classe "btn-container"

js :
fonction input() qui capte le code de la touch appuyé et lance la fonction playsound() avec un switch(keycode)

fonction playsound(keyCode) :
	selectionne le son correspondant a la touch en utilisant le keyCode qui correspond a l'id de l'audio
	le son est remis à 0 
	le son est joué
	on ajoute la classe 'sound-active' au boutton correspondant previousElementSibling
	on ajoute un EventListener qui detecte la fin du son
		on retire la classe 'sound-active' au boutton

la fonction input() est déclenché par un EventListener qui detecte l'appuye de touche

on export puis import la fonction input
