const poemas = [
    "Eres la luz que ilumina mi camino, el susurro que calma mis miedos, y el latido que alimenta mi alma.",
    "En tu sonrisa encuentro la paz que mi corazón anhela, en tus ojos veo un futuro lleno de cariño y en tus brazos encuentro mi hogar.",
    "Cada momento a tu lado es un tesoro, cada risa compartida es un poema, y cada mirada es un suspiro de cariño eterno.",
    "En tus ojos hallé un universo, donde el amor es nuestro verso. En cada beso, en cada mirar,tu amor es mi eternidad en el mar",
    "Eres el sol en mi amanecer, la melodía que quiero aprender. En tu risa, hallé la paz, eres mi amor, mi eterna paz.",
    "En tus abrazos, encuentro el cielo, tu amor, mi refugio, mi anhelo. Eres la luna en mi noche oscura, mi eterna llama, mi ternura.",
    "Eres la flor que en mi jardín florece, tu amor en mi corazón engrandece. En cada suspiro, en cada latir, eres mi razón para sonreír.",
    "Tus palabras son versos en mi piel, tu amor, un fuego que no tiene fin. Eres mi sueño hecho realidad, mi amor por siempre, mi felicidad.",
    "En tu sonrisa, encuentro la aurora, eres mi paz, mi eterna calma. En cada beso, en cada caricia, tu amor es mi eterna delicia.",
    "Eres el eco en mi silencio, tu amor, mi más grande anhelo. En tus brazos, encuentro mi hogar, mi amor por ti, nunca dejará de brillar.",
    "En cada amanecer, en cada atardecer, tu amor es todo lo que quiero tener. Eres mi poesía, mi melodía, mi amor por ti, es mi alegría.",
    "Eres la estrella en mi noche serena, tu amor, mi fuerza, mi gran cadena. En cada paso, en cada instante, mi amor por ti es mi faro brillante.",
    "En tus ojos, el sol amanece, en tu risa, el mundo enriquece. Eres mi estrella, mi dulce verdad, en tus brazos, hallé mi eternidad.",
    "En el eco de tu risa, encuentro la paz, en tu abrazo, mis miedos se deshaz. Eres mi faro en la noche oscura, en tu amor, encuentro mi cura.",
    "Tus palabras son susurros de seda, en tu mirada, mi alma queda. Eres la melodía que en mi pecho suena, en tu amor, mi vida se ordena.",
    "En tus besos, el tiempo se detiene, en tu amor, mi ser se enardece y sostiene.Eres mi anhelo, mi dicha y mi suerte, en tu amor, hallé mi norte fuerte.",
    "En tu sonrisa, encuentro mi alborada, en tu amor, mi vida está colmada. Eres mi sueño hecho realidad, en tus brazos, hallé mi felicidad.",
    "Tus caricias son versos en mi piel, en tu presencia, el mundo se vuelve miel. Eres mi refugio, mi eterna canción, en tu amor, encontré mi redención.",
    "En tu risa, descubro la magia del viento, en tu amor, encuentro mi mayor aliento. Eres mi sueño que nunca termina, en tu amor, mi vida resplandece y culmina."
  ];
  
  function generarPoema() {
    const poemaElement = document.getElementById("poema");
    const randomPoema = poemas[Math.floor(Math.random() * poemas.length)];
    poemaElement.textContent = randomPoema;
  }